
import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Advice Link - Consultanță Profesională și Servicii de Business în România</title>
        <meta name="description" content="Advice Link oferă servicii premium de consultanță în business, management, leadership și transformare digitală. Experți cu experiență vastă pentru succesul afacerii tale în România." />
        <meta name="keywords" content="consultanță business România, management profesional, leadership, transformare digitală, strategii creștere, consultanță investiții" />
        <link rel="canonical" href="https://advicelink.ro/" />
        <meta property="og:title" content="Advice Link - Consultanță Profesională România" />
        <meta property="og:description" content="Servicii premium de consultanță pentru succesul afacerii tale. Experți în business, management și transformare digitală." />
        <meta property="og:url" content="https://advicelink.ro/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Advice Link - Pagina Principală",
              "description": "Servicii premium de consultanță în business, management și transformare digitală în România",
              "url": "https://advicelink.ro/",
              "mainEntity": {
                "@type": "ProfessionalService",
                "name": "Advice Link",
                "serviceType": ["Consultanță Business", "Management", "Leadership", "Transformare Digitală"]
              }
            }
          `}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <main>
          <HeroSection />
          <BlogSection />
        </main>
      </div>
    </>
  );
};

export default Index;
