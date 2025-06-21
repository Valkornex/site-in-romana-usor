
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

export interface RssArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  link: string;
  author: string;
  date: string;
  dateSort: Date;
  image?: string;
  category: string;
  readTime: string;
}

const parseRssFeed = (xmlText: string): RssArticle[] => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  const items = xmlDoc.querySelectorAll('item');
  
  return Array.from(items).map((item, index) => {
    const title = item.querySelector('title')?.textContent || 'Titlu lipsă';
    const description = item.querySelector('description')?.textContent || '';
    const link = item.querySelector('link')?.textContent || '';
    const pubDate = item.querySelector('pubDate')?.textContent || '';
    const category = item.querySelector('category')?.textContent || 'Știri';
    
    // Clean description from HTML tags
    const cleanDescription = description.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
    
    // Format date
    const dateObj = new Date(pubDate);
    const formattedDate = dateObj.toLocaleDateString('ro-RO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Calculate read time (rough estimate)
    const wordCount = cleanDescription.split(' ').length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200)) + ' min';
    
    return {
      id: `${index + 1}`,
      title,
      excerpt: cleanDescription,
      content: description,
      link,
      author: 'ZF.ro',
      date: formattedDate,
      dateSort: dateObj,
      category,
      readTime
    };
  });
};

const fetchWithTimeout = async (url: string, timeout = 10000): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml'
      }
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

export const useRssFeed = (rssUrl: string) => {
  return useQuery({
    queryKey: ['rss-feed', rssUrl],
    queryFn: async () => {
      // Lista de proxy-uri CORS să încercăm
      const proxies = [
        'https://api.allorigins.win/raw?url=',
        'https://corsproxy.io/?',
        'https://api.codetabs.com/v1/proxy?quest='
      ];
      
      let lastError: any;
      
      for (const proxy of proxies) {
        try {
          const proxyUrl = `${proxy}${encodeURIComponent(rssUrl)}`;
          const response = await fetchWithTimeout(proxyUrl, 8000);
          
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
          
          const xmlText = await response.text();
          const articles = parseRssFeed(xmlText);
          
          return articles;
        } catch (error) {
          lastError = error;
          continue;
        }
      }
      
      // Dacă toate proxy-urile au eșuat, încearcă direct
      try {
        const response = await fetchWithTimeout(rssUrl, 5000);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const xmlText = await response.text();
        return parseRssFeed(xmlText);
      } catch (error) {
        throw new Error(`Failed to fetch RSS feed: ${lastError?.message || 'Unknown error'}`);
      }
    },
    staleTime: 15 * 60 * 1000, // 15 minutes - cache mai lung
    gcTime: 30 * 60 * 1000, // 30 minutes
    retry: 1, // Reducem retry-urile
    retryDelay: 2000, // Delay fix mai mic
    refetchOnWindowFocus: false, // Nu refetch la focus
    refetchOnMount: false, // Nu refetch la mount dacă avem cache
  });
};
