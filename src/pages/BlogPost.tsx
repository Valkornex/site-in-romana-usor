
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Date de exemplu pentru articole - în realitate ar veni din API sau bază de date
  const blogArticles = [
    {
      id: 1,
      title: "Strategii de Succes în Business",
      content: `
        <p>În lumea de astăzi a afacerilor, succesul nu vine doar din experiență, ci și din capacitatea de a te adapta rapid la schimbările din piață. Strategiile moderne de business necesită o abordare holistică care combină inovația cu managementul eficient al resurselor.</p>
        
        <h2>1. Planificarea Strategică</h2>
        <p>Planificarea strategică reprezintă fundația oricărei afaceri de succes. Aceasta implică definirea clară a obiectivelor pe termen lung și identificarea căilor concrete pentru atingerea acestora. O planificare eficientă include:</p>
        <ul>
          <li>Analiza SWOT detaliată</li>
          <li>Identificarea pieței țintă</li>
          <li>Stabilirea obiectivelor SMART</li>
          <li>Dezvoltarea unui plan de acțiune clar</li>
        </ul>
        
        <h2>2. Inovația ca Motor de Creștere</h2>
        <p>Companiile care prosperă sunt cele care îmbrățișează inovația nu doar ca un concept, ci ca o practică zilnică. Inovația poate fi implementată în:</p>
        <ul>
          <li>Dezvoltarea de produse și servicii noi</li>
          <li>Optimizarea proceselor existente</li>
          <li>Adoptarea tehnologiilor emergente</li>
          <li>Îmbunătățirea experienței clientului</li>
        </ul>
        
        <h2>3. Dezvoltarea Echipei</h2>
        <p>Capitalul uman reprezintă cel mai valoros activ al unei organizații. Investiția în dezvoltarea echipei prin programe de training, mentoring și crearea unui mediu de lucru motivant sunt esențiale pentru succesul pe termen lung.</p>
        
        <h2>Concluzie</h2>
        <p>Succesul în business nu este un accident, ci rezultatul unei planificări atente, a inovației constante și a investiției în oameni. Companiile care adoptă aceste principii vor fi cele care vor prospera în economia viitorului.</p>
      `,
      excerpt: "Descoperă cele mai eficiente strategii pentru a-ți dezvolta afacerea în 2024. Ghid complet cu sfaturi practice și exemple concrete din industrie.",
      author: "Expert Advice Link",
      date: "15 Ianuarie 2024",
      category: "Business",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Consultanța Digitală Modernă",
      content: `
        <p>Era digitală a transformat radical modul în care oferim servicii de consultanță. Tehnologiile moderne ne permit să oferim soluții mai eficiente, mai personalizate și mai accesibile clientului.</p>
        
        <h2>Transformarea Digitală în Consultanță</h2>
        <p>Consultanța digitală nu înseamnă doar mutarea proceselor tradiționale online, ci reimaginarea completă a modului în care interacționăm cu clienții și oferim valoare.</p>
        
        <h2>Instrumente Esențiale</h2>
        <p>Tehnologiile care revoluționează consultanța includ inteligența artificială, analitica de date avansată și platformele collaborative cloud.</p>
      `,
      excerpt: "Cum să te adaptezi la era digitală și să folosești tehnologia pentru a-ți îmbunătăți serviciile de consultanță. Tendințe și instrumente esențiale.",
      author: "Expert Advice Link",
      date: "12 Ianuarie 2024",
      category: "Digital",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Leadership și Management",
      content: `
        <p>Leadership-ul eficient este arta de a inspira și motiva echipele pentru a atinge performanțe excepționale. În lumea modernă a afacerilor, un lider trebuie să fie în același timp vizionar, comunicator și facilitator.</p>
        
        <h2>Principiile Leadership-ului Modern</h2>
        <p>Leadership-ul de astăzi se bazează pe empatie, transparență și capacitatea de a se adapta rapid la schimbări.</p>
      `,
      excerpt: "Principiile fundamentale ale unui leadership eficient și cum să îți motivezi echipa pentru rezultate excepționale. Case studies și practici demonstrate.",
      author: "Expert Advice Link",
      date: "10 Ianuarie 2024",
      category: "Leadership",
      readTime: "6 min"
    }
  ];

  const article = blogArticles.find(article => article.id === parseInt(id || ''));

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Articol negăsit</h1>
          <p className="text-xl text-gray-600 mb-8">Articolul pe care îl căutați nu există.</p>
          <Button onClick={() => navigate('/blog')} className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Înapoi la Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb și buton înapoi */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="text-blue-600 hover:text-blue-800 p-0 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Înapoi la Blog
          </Button>
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-700">Acasă</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{article.title}</span>
          </nav>
        </div>

        {/* Header articol */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              <span>{article.readTime} citire</span>
            </div>
          </div>
          
          {/* Butoane de partajare */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm text-gray-600">Partajează:</span>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Partajează
            </Button>
          </div>
        </header>

        {/* Conținutul articolului */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              lineHeight: '1.8',
            }}
          />
        </div>

        {/* Articole similare */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Articole Similare</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogArticles
                .filter(a => a.id !== article.id && a.category === article.category)
                .slice(0, 2)
                .map((similarArticle) => (
                  <Link 
                    key={similarArticle.id}
                    to={`/blog/${similarArticle.id}`}
                    className="group block p-4 rounded-lg border hover:shadow-md transition-shadow duration-200"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-2">
                        {similarArticle.title}
                      </h4>
                      <p className="text-sm text-gray-600">{similarArticle.date}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to action */}
        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            <Link to="/blog">
              Vezi Toate Articolele
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
