
const About = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Despre Noi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Echipa noastră de experți este dedicată să ofere soluții inovatoare și consultanță de calitate superioară.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop" 
              alt="Despre Advice Link"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Misiunea Noastră
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              La Advice Link, ne dedicăm să oferim consultanță de înaltă calitate pentru a ajuta afacerile să își atingă potențialul maxim. Cu ani de experiență în diverse industrii, echipa noastră de experți aduce cunoștințe aprofundate și soluții personalizate pentru fiecare client.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Credem în puterea colaborării și a inovației pentru a crea rezultate excepționale care depășesc așteptările clienților noștri.
            </p>
          </div>
        </div>

        {/* Secțiunea nouă cu conținutul cerut */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Povestea Noastră
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Când cineva ne întreabă ce facem suntem tentați să punem accentul pe modul în care ne-am călit, am devenit mai performanți, mai empatici la dorințele clienților, o versiune mult mai bună a fiecăruia dintre noi. Cu toate astea ne-am asumat misiunea de a lucra împreună cu partenerii noștri concentrându-ne asupra provocărilor cu care se confruntă echipele de management pentru a le oferi cele mai bune soluții.
              </p>
              
              <p className="font-semibold text-blue-600">
                Dar asta este doar o parte a ceea ce facem.
              </p>
              
              <p>
                Cealaltă parte, la fel de importantă, este despre oamenii și valorile noastre, despre pasiunea pentru ceea ce facem, despre modul în care acționăm ca echipă. Pentru noi, cele mai importante "instrumente" de lucru nu sunt autoturismele și gadgeturile de ultima generație ci cunoștințele, experiența, capacitatea de a pune în practică soluții creative ținând cont permanent de nevoile partenerilor noștri.
              </p>
              
              <p>
                În această afacere am pus efort, dăruire, speranță și toate cunoștințele noastre. Am crescut încet dar sigur, aprecierea celor cu care am colaborat exprimându-se prin recomandările lor ulterioare. Avem parteneri din diferite domenii de activitate de la energie, proiecte eoliene, producție din oțel, fertilizatori, containere, cargo general, animale vii, până la proiectare și consultanță în infrastructură și managementul construcțiilor, inginerie civilă, infrastructură rutieră, dezvoltare și export soluții IT.
              </p>
              
              <p className="font-semibold">
                Pentru fiecare caz în parte avem o abordare specifică fiecărui partener.
              </p>
              
              <p>
                Și nu ne oprim aici. Facem tot posibilul ca soluțiile noastre să fie rapid implementate cu rezultate deosebite.
              </p>
              
              <p className="font-semibold text-blue-600">
                Ne angajăm că la finalul fiecărui parteneriat, companiile să fie mai puternice decât atunci când ne-am cunoscut.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-2xl font-bold text-blue-600">
                Obiectivul nostru este succesul vostru.
              </p>
            </div>
          </div>
        </div>

        {/* Secțiunea de valori */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Performanță</h3>
            <p className="text-gray-600">
              Ne-am călit și am devenit mai performanți pentru a oferi cele mai bune rezultate.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Empatie</h3>
            <p className="text-gray-600">
              Suntem mai empatici la dorințele clienților și înțelegem nevoile lor.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Inovație</h3>
            <p className="text-gray-600">
              Punem în practică soluții creative pentru fiecare provocare unică.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
