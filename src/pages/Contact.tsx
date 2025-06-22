
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactează-ne
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem aici să te ajutăm cu orice întrebări sau nevoi de consultanță. Contactează-ne pentru o discuție inițială gratuită.
          </p>
        </div>

        {/* Formularul de contact funcțional */}
        <div className="mb-16">
          <ContactForm 
            title="Formular de Contact"
            description="Completează formularul de mai jos pentru a ne contacta direct. Îți vom răspunde în cel mai scurt timp."
          />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-red-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gata să începem colaborarea?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hai să discutăm despre proiectul tău și să vedem cum te putem ajuta să îți atingi obiectivele.
          </p>
          <a 
            href="mailto:noreply@advicelink.ro" 
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-200 inline-block"
          >
            Programează o Consultație Gratuită
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
