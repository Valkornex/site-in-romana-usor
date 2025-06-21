
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@advicelink.ro",
      description: "Trimite-ne un email și îți vom răspunde în cel mai scurt timp"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+40 123 456 789",
      description: "Suntem disponibili în program de lucru"
    },
    {
      icon: MapPin,
      title: "Adresă",
      content: "Str. Principală, Nr. 123, București",
      description: "Vizitează-ne la sediul nostru pentru o consultație față în față"
    },
    {
      icon: Clock,
      title: "Program",
      content: "Luni - Vineri: 9:00 - 18:00",
      description: "Disponibili pentru programări și consultații"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactează-ne
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem aici să te ajutăm cu orice întrebări sau nevoie de consultanță. Contactează-ne pentru o discuție inițială gratuită.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-blue-600 mb-2">
                  {info.content}
                </p>
                <CardDescription className="text-gray-600">
                  {info.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Formularul de contact extins pe întreaga secțiune */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Formular de Contact
          </h2>
          <div className="bg-gradient-to-br from-blue-600 to-red-600 rounded-lg p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">
              Contact Form 7
            </h3>
            <p className="text-xl mb-6">
              Aici va fi implementat Contact Form 7 conform cerințelor tale.
            </p>
            <p className="text-lg opacity-90 mb-8">
              Formularul va include câmpuri pentru nume, email, telefon, subiect și mesaj, 
              cu validare automată și trimitere prin email.
            </p>
            <div className="max-w-2xl mx-auto">
              <p className="text-base opacity-80">
                Formularul va fi complet responsiv și va oferi o experiență optimă pe toate dispozitivele.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-red-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gata să începem colaborarea?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hai să discutăm despre proiectul tău și să vedem cum te putem ajuta să îți atingi obiectivele.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-200">
            Programează o Consultație Gratuită
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
