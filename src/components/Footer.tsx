
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo și descriere */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/41c2a8a2-886f-48da-8229-f282178575b4.png" 
                alt="Advice Link Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Oferim soluții profesionale de consultanță pentru a-ți transforma ideile în realitate. 
              Echipa noastră de experți te va ghida către succesul dorit.
            </p>
            
            {/* Informații de contact */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:office@advicelink.ro" className="text-gray-400 hover:text-white transition-colors duration-200">
                  office@advicelink.ro
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigare rapidă */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigare Rapidă</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/despre-noi" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link to="/expertiza" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Expertiză
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicii</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Strategii de Creștere
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Consultanță Investiții
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Marketing & Brand
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Analiză Financiară
              </li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Sustenabilitate
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Advice Link. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/politica-de-confidentialitate" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Politica de Confidențialitate
              </Link>
              <Link to="/termeni-si-conditii" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
