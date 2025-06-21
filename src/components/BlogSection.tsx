
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogSection = () => {
  // Sample blog articles - you can replace this with real data later
  const blogArticles = [
    {
      id: 1,
      title: "Strategii de Succes în Business",
      excerpt: "Descoperă cele mai eficiente strategii pentru a-ți dezvolta afacerea în 2024. Ghid complet cu sfaturi practice.",
      author: "Expert Advice Link",
      date: "15 Ianuarie 2024",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      category: "Business"
    },
    {
      id: 2,
      title: "Consultanța Digitală Modernă",
      excerpt: "Cum să te adaptezi la era digitală și să folosești tehnologia pentru a-ți îmbunătăți serviciile de consultanță.",
      author: "Expert Advice Link",
      date: "12 Ianuarie 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      category: "Digital"
    },
    {
      id: 3,
      title: "Leadership și Management",
      excerpt: "Principiile fundamentale ale unui leadership eficient și cum să îți motivezi echipa pentru rezultate excepționale.",
      author: "Expert Advice Link",
      date: "10 Ianuarie 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "Leadership"
    },
    {
      id: 4,
      title: "Inovația în Consultanță",
      excerpt: "Metodele inovatoare de consultanță care transformă industriile și creează valoare pentru clienți.",
      author: "Expert Advice Link",
      date: "8 Ianuarie 2024",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      category: "Inovație"
    },
    {
      id: 5,
      title: "Comunicarea Eficientă",
      excerpt: "Tehnici avansate de comunicare pentru consultanți și lideri de business. Cum să transmiți mesaje clare și persuasive.",
      author: "Expert Advice Link",
      date: "5 Ianuarie 2024",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      category: "Comunicare"
    },
    {
      id: 6,
      title: "Dezvoltarea Profesională",
      excerpt: "Pașii esențiali pentru dezvoltarea carierei în consultanță și cum să îți construiești o reputație solidă în domeniu.",
      author: "Expert Advice Link",
      date: "3 Ianuarie 2024",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop",
      category: "Carieră"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimele Articole din Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rămâi la curent cu cele mai noi tendințe și strategii în consultanță prin articolele noastre expertizate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {article.title}
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </CardDescription>
                <Button variant="ghost" className="group/btn text-blue-600 hover:text-blue-800 p-0 h-auto">
                  Citește mai mult
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Vezi Toate Articolele
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
