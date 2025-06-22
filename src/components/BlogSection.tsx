import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Loader2, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useRssFeed } from "@/hooks/useRssFeed";
import { useMemo } from "react";

const BlogSection = () => {
  const { data: blogArticles = [], isLoading, error } = useRssFeed("https://www.zf.ro/rss/");

  // Memoizăm articolele afișate pentru a evita recalcularea
  const displayArticles = useMemo(() => blogArticles.slice(0, 6), [blogArticles]);

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50" aria-label="Se încarcă articolele din blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-700 to-pink-700 bg-clip-text text-transparent mb-6">
              Ultimele Articole din Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Rămâi la curent cu cele mai noi știri și tendințe
            </p>
          </div>
          <div className="flex items-center justify-center" role="status" aria-live="polite">
            <Loader2 className="h-8 w-8 animate-spin mr-2 text-orange-600" aria-hidden="true" />
            <span className="text-lg text-gray-700">Se încarcă articolele...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error || displayArticles.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50" aria-label="Eroare la încărcarea articolelor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-700 to-pink-700 bg-clip-text text-transparent mb-6">
              Ultimele Articole din Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Rămâi la curent cu cele mai noi știri și tendințe
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <p className="text-gray-600 mb-4">Nu am putut încărca articolele momentan.</p>
              <Link to="/blog">
                <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Vezi Blogul
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-pink-50" aria-label="Ultimele articole din blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-700 to-pink-700 bg-clip-text text-transparent mb-6">
            Ultimele Articole din Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rămâi la curent cu cele mai noi știri și tendințe de pe ZF.ro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayArticles.map((article, index) => (
            <Card 
              key={article.id} 
              className="group relative bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 overflow-hidden rounded-2xl"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Citește articolul: ${article.title}`}
                className="block h-full"
              >
                <div className="relative p-6">
                  <div className="flex justify-between items-start mb-6">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">2 min</span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader className="px-6 pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2 leading-tight">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mt-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-white" aria-hidden="true" />
                      </div>
                      <span className="font-medium">{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <Calendar className="h-3 w-3 text-gray-600" aria-hidden="true" />
                      </div>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <CardDescription className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="ghost" 
                      className="group/btn text-orange-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 p-0 h-auto px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Citește pe ZF.ro
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                    
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </CardContent>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-orange-600 hover:from-orange-600 hover:via-pink-600 hover:to-orange-700 text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Vezi Toate Articolele
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
