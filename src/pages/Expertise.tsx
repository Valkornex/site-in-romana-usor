
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, Target, Users, BarChart3, ShoppingCart, Leaf, Building } from "lucide-react";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: TrendingUp,
      title: "Îmbunătățirea/Crearea Strategiei și Creșterea Performanței",
      description: "Analizăm strategia companiei ținând cont de momentele de creștere semnificativă, diagnosticând problemele și propunând o nouă abordare a costurilor pentru rezultate foarte bune."
    },
    {
      icon: DollarSign,
      title: "Investiții/Capital",
      description: "Consiliem partenerii pentru realizarea strategiei investiționale, oferim soluții de creștere a valorii portofoliului și realizarea agendei post-achiziție."
    },
    {
      icon: Target,
      title: "Strategia de Marketing și Brand",
      description: "Creativitatea reprezintă o sursă de creștere. Ne axăm pe analiza prețurilor, calității produselor/serviciilor, strategiei de marketing și brand, pe vânzări și canale de desfacere."
    },
    {
      icon: Users,
      title: "Aspecte Organizaționale",
      description: "Susținem clienții pentru creșterea performanțelor financiare și organizarea unui mediu plăcut de lucru pentru angajați, conform obiectivelor de dezvoltare."
    },
    {
      icon: BarChart3,
      title: "Analiză Financiară",
      description: "Folosim sisteme de analiză financiară avansate pentru identificarea problemelor în detaliu și oferirea celor mai bune decizii managementului."
    },
    {
      icon: ShoppingCart,
      title: "Achiziții",
      description: "Acordăm atenție deosebită necesității realizării achizițiilor, realizând studii de piață pentru a determina nivelul de preț și aplicarea corectă a legislației."
    },
    {
      icon: Leaf,
      title: "Sustenabilitate și Responsabilizare",
      description: "Ajutăm companiile să își bazeze strategiile pe principii operaționale sustenabile și să implementeze măsuri de responsabilizare pe termen lung."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expertiza Noastră
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Serviciile noastre se focusează în permanență atât pe aspectele critice ale clienților cât și pe oportunitățile de dezvoltare, indiferent de tipul de industrie din care fac parte sau poziționarea geografică.
          </p>
        </div>

        {/* Secțiunea de introducere */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Aducem expertiză funcțională, analizând în profunzime și având o perspectivă holistică: căutăm acea valoare existentă în orice companie, preferând o abordare de tip sumă decât una care vede doar aspecte individuale, dispersate.
            </p>
            
            <p className="font-semibold text-blue-600">
              Lucrăm întotdeauna cot la cot cu executivul pentru a ajuta companiile să creeze valoare fără precedent.
            </p>
            
            <p>
              Avem o experiență vastă în domeniul managementului, finanțelor, design-ului organizațional și IT.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Serviciile noastre sunt axate pe tematici precum:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 h-full">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secțiunea de încheiere */}
        <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Noi lucrăm pentru a înțelege realitatea clienților noștri și pentru a le oferi rezultate reale focusându-ne pe decizii strategice și acțiuni concrete. Și ne aliniez la obiectivele clienților noștri, astfel încât ei știu că suntem împreună în acest efort susținut.
            </p>
            
            <blockquote className="text-xl font-semibold text-blue-600 italic text-center border-l-4 border-blue-600 pl-6">
              "Succesul în afaceri presupune pregătire, disciplină și multă muncă. Dar dacă nu ești speriat de aceste lucruri, oportunitățile sunt mereu foarte mari."
              <footer className="text-gray-600 text-base mt-2 not-italic">– David Rockefeller</footer>
            </blockquote>
          </div>
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
