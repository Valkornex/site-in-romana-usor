
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Lightbulb, Target, Shield, Globe } from "lucide-react";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: TrendingUp,
      title: "Strategii de Business",
      description: "Dezvoltăm strategii personalizate pentru creșterea sustenabilă a afacerii tale."
    },
    {
      icon: Users,
      title: "Management și Leadership",
      description: "Oferim consultanță pentru dezvoltarea echipelor și a abilităților de leadership."
    },
    {
      icon: Lightbulb,
      title: "Inovație și Transformare",
      description: "Te ajutăm să implementezi soluții inovatoare pentru transformarea digitală."
    },
    {
      icon: Target,
      title: "Optimizare Procese",
      description: "Analizăm și optimizăm procesele pentru eficiență maximă și reducerea costurilor."
    },
    {
      icon: Shield,
      title: "Managementul Riscurilor",
      description: "Identificăm și gestionăm riscurile pentru protejarea afacerii tale."
    },
    {
      icon: Globe,
      title: "Expansiune Internațională",
      description: "Ghidare expertă pentru intrarea pe piețe internaționale."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expertiza Noastră
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferim servicii de consultanță specializate în multiple domenii pentru a satisface nevoile diverse ale clienților noștri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-red-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ai nevoie de consultanță specializată?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactează-ne astăzi pentru a discuta despre cum te putem ajuta să îți atingi obiectivele de business.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-200">
            Solicită o Consultație
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
