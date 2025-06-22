
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCallback } from "react";

const HeroSection = () => {
  const scrollToNextSection = useCallback(() => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative h-[700px] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center h-[calc(700px-10rem)]">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-1 space-y-8 z-10">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white animate-fade-in">
                Innovation for
                <br />
                <span className="text-green-400">Positive</span>
                <br />
                Change
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-md uppercase tracking-wide animate-fade-in">
                INNOVATION THAT DELIVERS RESULTS
              </p>
            </div>
            
            {/* Signature */}
            <div className="mt-12 animate-fade-in">
              <div className="w-64 h-16 opacity-60">
                <svg viewBox="0 0 200 50" className="w-full h-full text-white">
                  <path d="M10 30 Q 30 10, 50 30 T 90 30 M 100 20 L 120 40 M 120 20 L 120 40 M 140 30 Q 160 10, 180 30" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        fill="none" 
                        className="animate-pulse"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Right Column - Central rotation container */}
          <div className="lg:col-span-1 relative w-full h-full flex items-center justify-center">
            
            {/* Central rotation container */}
            <div className="relative w-[500px] h-[500px]">
              
              {/* Card 1 - Top position (0 degrees) */}
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 animate-[spin_20s_linear_infinite_reverse]">
                  <Card className="w-80 h-48 bg-gradient-to-br from-blue-500 to-purple-600 border-none text-white overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in hover:shadow-2xl">
                    <CardContent className="p-0 relative h-full">
                      <img 
                        src="https://binos.themescamp.com/innovation-growth/wp-content/uploads/sites/9/2025/04/hero8-1.webp" 
                        alt="Business Growth" 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-xs uppercase tracking-wide mb-1 opacity-80">BINOS</div>
                        <h3 className="text-xl font-bold mb-2">Business Growth Through Expert Leadership</h3>
                        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-0">
                          Start Project <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Card 2 - Right position (90 degrees offset) */}
              <div className="absolute inset-0 animate-[spin_25s_linear_infinite]" style={{ animationDelay: '0s' }}>
                <div className="absolute top-1/2 -right-24 transform -translate-y-1/2 animate-[spin_25s_linear_infinite_reverse]" style={{ animationDelay: '0s' }}>
                  <Card className="w-72 h-40 bg-white border-none text-black overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in hover:shadow-2xl">
                    <CardContent className="p-0 relative h-full">
                      <img 
                        src="https://binos.themescamp.com/innovation-growth/wp-content/uploads/sites/9/2025/04/hero8-2.webp" 
                        alt="24/7 Availability" 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-lg font-medium mb-2">No days off 24 presents knock me.</p>
                        <Button variant="default" size="sm" className="bg-black text-white hover:bg-gray-800 rounded-full px-4">
                          Contact Us <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div className="text-right">
                          <div className="text-2xl font-bold">24/7</div>
                          <div className="text-xs text-gray-600">Availability</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Card 3 - Bottom position (180 degrees offset) */}
              <div className="absolute inset-0 animate-[spin_30s_linear_infinite]" style={{ animationDelay: '0s' }}>
                <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 animate-[spin_30s_linear_infinite_reverse]" style={{ animationDelay: '0s' }}>
                  <Card className="w-64 h-44 bg-gradient-to-br from-purple-600 to-pink-600 border-none text-white overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in hover:shadow-2xl">
                    <CardContent className="p-0 relative h-full">
                      <img 
                        src="https://binos.themescamp.com/innovation-growth/wp-content/uploads/sites/9/2025/04/hero8-4.webp" 
                        alt="Company Skills" 
                        className="w-full h-full object-cover opacity-80 transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="text-xs uppercase tracking-wide mb-1">Improve</div>
                        <div className="text-xs uppercase tracking-wide opacity-80">COMPANY SKILLS</div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="text-3xl font-bold">5</div>
                        <div className="text-xs opacity-80">m+</div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-full h-16">
                        <svg viewBox="0 0 200 50" className="w-full h-full opacity-60">
                          <path d="M0 25 Q 50 15, 100 25 T 200 25" stroke="currentColor" strokeWidth="2" fill="none"/>
                        </svg>
                        <div className="absolute bottom-2 right-4 text-xs">
                          2023&nbsp;&nbsp;&nbsp;2024&nbsp;&nbsp;&nbsp;2025&nbsp;&nbsp;&nbsp;2026
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Card 4 - Left position (270 degrees offset) */}
              <div className="absolute inset-0 animate-[spin_18s_linear_infinite]" style={{ animationDelay: '0s' }}>
                <div className="absolute top-1/2 -left-24 transform -translate-y-1/2 animate-[spin_18s_linear_infinite_reverse]" style={{ animationDelay: '0s' }}>
                  <Card className="w-72 h-52 bg-gray-100 border-none text-black overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in hover:shadow-2xl">
                    <CardContent className="p-0 relative h-full">
                      <img 
                        src="https://binos.themescamp.com/innovation-growth/wp-content/uploads/sites/9/2025/04/hero8-3.webp" 
                        alt="Innovation" 
                        className="w-full h-full object-cover opacity-60 transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-100/90 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold mb-2">Transformare prin Inovație</h3>
                        <p className="text-sm text-gray-600 mb-3">Soluții moderne pentru provocările de business.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
