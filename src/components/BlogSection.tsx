
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useRssFeed } from "@/hooks/useRssFeed";

const BlogSection = () => {
  const { data: blogArticles = [], isLoading, error } = useRssFeed("https://www.zf.ro/rss/");

  // Afișează doar primele 6 articole pentru secțiunea de pe homepage
  const displayArticles = blogArticles.slice(0, 6);

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ultimele Articole din Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rămâi la curent cu cele mai noi știri și tendințe
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin mr-2" />
            <span className="text-lg">Se încarcă articolele...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error || displayArticles.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ultimele Articole din Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rămâi la curent cu cele mai noi știri și tendințe
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-4">Nu am putut încărca articolele momentan.</p>
            <Link to="/blog">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Vezi Blogul
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ultimele Articole din Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rămâi la curent cu cele mai noi știri și tendințe de pe ZF.ro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop`;
                    }}
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
                    Citește pe ZF.ro
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Vezi Toate Articolele
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
