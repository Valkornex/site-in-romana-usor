
import { ArrowRight, TrendingUp, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCallback } from "react";

const HeroSection = () => {
  const scrollToNextSection = useCallback(() => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-10rem)]">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Zap className="w-3 h-3 mr-1" />
                Inovație pentru Schimbarea Pozitivă
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Transformăm</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Viziunea
                </span>
                <br />
                <span className="text-white">în</span>{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Realitate
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Oferim soluții de consultanță de vârf pentru a accelera creșterea afacerii tale. 
                Echipa noastră de experți te ghidează către succesul sustenabil.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Începe colaborarea cu noi"
              >
                Începe Transformarea
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToNextSection}
                className="border-2 border-white/20 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300"
                aria-label="Află mai multe despre serviciile noastre"
              >
                Descoperă Serviciile
              </Button>
            </div>
          </div>
          
          {/* Right Column - Stats Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Growth Card */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border-white/10 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-blue-400" />
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                    +287%
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">Creștere Business</h3>
                <p className="text-slate-300 text-sm">
                  Companiile noastre partenere au înregistrat o creștere medie de 287% în primul an.
                </p>
                <div className="mt-4 flex items-center text-sm text-slate-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  Rezultate măsurabile în 90 de zile
                </div>
              </CardContent>
            </Card>
            
            {/* Clients Served Card */}
            <Card className="bg-gradient-to-br from-violet-500/20 to-pink-500/20 backdrop-blur-sm border-white/10 text-white ml-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-violet-500/20 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-violet-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-xs text-slate-400">Clienți</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Experiență Vastă</h3>
                <p className="text-slate-300 text-sm">
                  Peste 500 de companii transformate cu succes în ultimii 5 ani.
                </p>
              </CardContent>
            </Card>
            
            {/* Success Rate Card */}
            <Card className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border-white/10 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-emerald-500/20 p-3 rounded-lg">
                    <Target className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-400">98%</div>
                    <div className="text-xs text-slate-400">Succese</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Rată de Succes</h3>
                <p className="text-slate-300 text-sm">
                  98% dintre proiectele noastre ating sau depășesc obiectivele stabilite.
                </p>
                <div className="mt-4">
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0" aria-hidden="true">
        <svg className="w-full h-16 text-slate-800" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
