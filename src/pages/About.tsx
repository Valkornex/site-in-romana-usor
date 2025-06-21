
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
      </div>
    </div>
  );
};

export default About;
