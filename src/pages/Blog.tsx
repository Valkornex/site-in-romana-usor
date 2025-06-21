
import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRssFeed } from "@/hooks/useRssFeed";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Toate");
  const [sortBy, setSortBy] = useState("date-desc");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const { data: blogArticles = [], isLoading, error } = useRssFeed("https://www.zf.ro/rss/");

  const categories = useMemo(() => {
    if (!blogArticles.length) return ["Toate"];
    const uniqueCategories = Array.from(new Set(blogArticles.map(article => article.category)));
    return ["Toate", ...uniqueCategories];
  }, [blogArticles]);

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = blogArticles;

    // Filtrare după căutare
    if (searchTerm) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrare după categorie
    if (selectedCategory !== "Toate") {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Sortare
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return b.dateSort.getTime() - a.dateSort.getTime();
        case "date-asc":
          return a.dateSort.getTime() - b.dateSort.getTime();
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        case "readtime-asc":
          return parseInt(a.readTime) - parseInt(b.readTime);
        case "readtime-desc":
          return parseInt(b.readTime) - parseInt(a.readTime);
        default:
          return 0;
      }
    });

    return filtered;
  }, [blogArticles, searchTerm, selectedCategory, sortBy]);

  // Calculează paginația
  const totalPages = Math.ceil(filteredAndSortedArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredAndSortedArticles.slice(startIndex, endIndex);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("Toate");
    setSortBy("date-desc");
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset pagina când se schimbă filtrele
  const handleFilterChange = (callback: () => void) => {
    callback();
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin mr-2" />
            <span className="text-lg">Se încarcă articolele...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Eroare la încărcarea articolelor</h1>
            <p className="text-gray-600 mb-4">Nu am putut încărca articolele de pe RSS feed.</p>
            <Button onClick={() => window.location.reload()} className="bg-blue-600 hover:bg-blue-700">
              Încearcă din nou
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog Advice Link
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Articole și știri de actualitate de pe ZF.ro
          </p>
          
          {/* Căutare și filtre */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
              {/* Căutare */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Caută articole..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => handleFilterChange(() => setSearchTerm(e.target.value))}
                />
              </div>

              {/* Filtru categoria */}
              <Select value={selectedCategory} onValueChange={(value) => handleFilterChange(() => setSelectedCategory(value))}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Selectează categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sortare */}
              <Select value={sortBy} onValueChange={(value) => handleFilterChange(() => setSortBy(value))}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-desc">Cele mai noi</SelectItem>
                  <SelectItem value="date-asc">Cele mai vechi</SelectItem>
                  <SelectItem value="title-asc">Titlu A-Z</SelectItem>
                  <SelectItem value="title-desc">Titlu Z-A</SelectItem>
                  <SelectItem value="readtime-asc">Timp citire crescător</SelectItem>
                  <SelectItem value="readtime-desc">Timp citire descrescător</SelectItem>
                </SelectContent>
              </Select>

              {/* Reset */}
              <Button variant="outline" onClick={resetFilters}>
                Resetează filtrele
              </Button>
            </div>
          </div>

          {/* Categorii ca butoane */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange(() => setSelectedCategory(category))}
                className={category === selectedCategory ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Rezultate căutare */}
        {(searchTerm || selectedCategory !== "Toate") && (
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredAndSortedArticles.length} articol{filteredAndSortedArticles.length !== 1 ? 'e' : ''} găsit{filteredAndSortedArticles.length !== 1 ? 'e' : ''}
              {searchTerm && ` pentru "${searchTerm}"`}
              {selectedCategory !== "Toate" && ` în categoria "${selectedCategory}"`}
            </p>
          </div>
        )}

        {/* Grid articole */}
        {currentArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 bg-white">
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    <div className="relative p-4">
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                          {article.readTime}
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

            {/* Paginație */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {/* Primele pagini */}
                    {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {/* Elipsa dacă sunt mai multe pagini */}
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                    
                    {/* Ultimele pagini */}
                    {totalPages > 3 && Array.from({ length: Math.min(2, totalPages - 3) }, (_, i) => totalPages - 1 + i).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage >= totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">Nu au fost găsite articole</p>
            <p className="text-gray-500 mb-6">Încearcă să modifici criteriile de căutare sau să resetezi filtrele.</p>
            <Button onClick={resetFilters} className="bg-blue-600 hover:bg-blue-700">
              Resetează filtrele
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
