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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100" aria-label="Se încarcă articolele din blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6 leading-relaxed">
              Ultimele Articole din Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-2.5">
              Rămâi la curent cu cele mai noi știri și tendințe
            </p>
          </div>
          <div className="flex items-center justify-center" role="status" aria-live="polite">
            <Loader2 className="h-8 w-8 animate-spin mr-2 text-green-400" aria-hidden="true" />
            <span className="text-lg text-gray-700">Se încarcă articolele...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error || displayArticles.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100" aria-label="Eroare la încărcarea articolelor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6 leading-relaxed">
              Ultimele Articole din Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-2.5">
              Rămâi la curent cu cele mai noi știri și tendințe
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <p className="text-gray-600 mb-4">Nu am putut încărca articolele momentan.</p>
              <Link to="/blog">
                <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100" aria-label="Ultimele articole din blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6 leading-relaxed">
            Ultimele Articole din Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-2.5">
            Rămâi la curent cu cele mai noi știri și tendințe de pe ZF.ro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayArticles.map((article, index) => (
            <a 
              key={article.id}
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Citește articolul: ${article.title}`}
              className="block h-full"
            >
              <Card 
                className="group relative bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden rounded-lg h-full"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative p-6">
                  <div className="flex justify-between items-start mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      <Clock className="h-3 w-3" />
                      <span className="font-medium">2 min</span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                </div>

                <CardHeader className="px-6 pb-4">
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2 leading-tight">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-gray-600" aria-hidden="true" />
                      </div>
                      <span className="font-medium">{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                        <Calendar className="h-3 w-3 text-gray-600" aria-hidden="true" />
                      </div>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                </CardContent>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
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
