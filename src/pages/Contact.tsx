
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Advice Link - Consultanță Profesională România | Programează o Întâlnire</title>
        <meta name="description" content="Contactează echipa Advice Link pentru consultanță profesională în business și management. Programează o consultație gratuită. Răspunsuri rapide și soluții personalizate." />
        <meta name="keywords" content="contact consultanță România, programare consultație business, contact Advice Link, consultanță gratuită București" />
        <link rel="canonical" href="https://advicelink.ro/contact" />
        <meta property="og:title" content="Contact Advice Link - Consultanță Profesională România" />
        <meta property="og:description" content="Contactează echipa noastră pentru consultanță profesională. Programează o consultație gratuită și primește soluții personalizate." />
        <meta property="og:url" content="https://advicelink.ro/contact" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Advice Link",
              "description": "Pagina de contact pentru servicii de consultanță profesională",
              "url": "https://advicelink.ro/contact",
              "mainEntity": {
                "@type": "ContactPoint",
                "telephone": "+40123456789",
                "email": "noreply@advicelink.ro",
                "contactType": "customer service",
                "areaServed": "RO",
                "availableLanguage": "Romanian"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contactează-ne
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suntem aici să te ajutăm cu orice întrebări sau nevoi de consultanță. Contactează-ne pentru o discuție inițială gratuită.
            </p>
          </header>

          {/* Formularul de contact funcțional */}
          <section className="mb-16" aria-label="Formular de contact">
            <ContactForm 
              title="Formular de Contact"
              description="Completează formularul de mai jos pentru a ne contacta direct. Îți vom răspunde în cel mai scurt timp."
            />
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-blue-600 to-red-600 rounded-xl p-8 md:p-12 text-center text-white" aria-label="Apel la acțiune">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gata să începem colaborarea?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Hai să discutăm despre proiectul tău și să vedem cum te putem ajuta să îți atingi obiectivele.
            </p>
            <a 
              href="mailto:noreply@advicelink.ro" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-200 inline-block"
              aria-label="Trimite email pentru programarea unei consultații gratuite"
            >
              Programează o Consultație Gratuită
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
