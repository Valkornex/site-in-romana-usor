
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

export const useRssFeed = (rssUrl: string) => {
  return useQuery({
    queryKey: ['rss-feed', rssUrl],
    queryFn: async () => {
      try {
        // Use a CORS proxy to fetch the RSS feed
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`;
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
          throw new Error('Failed to fetch RSS feed');
        }
        
        const xmlText = await response.text();
        return parseRssFeed(xmlText);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
        throw error;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
