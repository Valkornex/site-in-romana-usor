
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Politica de Confidențialitate
          </h1>
          <p className="text-lg text-gray-600">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducere</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Advice Link respectă confidențialitatea datelor personale ale utilizatorilor și se angajează să protejeze informațiile pe care ni le furnizați. Această Politică de Confidențialitate explică modul în care colectăm, utilizăm, divulgăm și protejăm informațiile dumneavoastră.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informații pe care le colectăm</h2>
            <div className="text-gray-700 leading-relaxed mb-4">
              <p className="mb-3">Colectăm următoarele tipuri de informații:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Informații de contact (nume, adresă email, număr de telefon)</li>
                <li>Informații despre compania dumneavoastră</li>
                <li>Mesaje și comunicări cu echipa noastră</li>
                <li>Informații tehnice (adresa IP, tipul de browser, sistemul de operare)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cum utilizăm informațiile</h2>
            <div className="text-gray-700 leading-relaxed mb-4">
              <p className="mb-3">Utilizăm informațiile colectate pentru:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Furnizarea serviciilor de consultanță</li>
                <li>Comunicarea cu clienții și potențialii clienți</li>
                <li>Îmbunătățirea serviciilor noastre</li>
                <li>Respectarea obligațiilor legale</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Partajarea informațiilor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nu vindem, nu închirim și nu împărtășim informațiile dumneavoastră personale cu terțe părți, cu excepția cazurilor în care acest lucru este necesar pentru furnizarea serviciilor sau când suntem obligați prin lege.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Securitatea datelor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementăm măsuri de securitate tehnice și organizatorice pentru a proteja informațiile dumneavoastră împotriva accesului neautorizat, alterării, divulgării sau distrugerii.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Drepturile dumneavoastră</h2>
            <div className="text-gray-700 leading-relaxed mb-4">
              <p className="mb-3">Conform GDPR, aveți următoarele drepturi:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dreptul de acces la datele personale</li>
                <li>Dreptul de rectificare</li>
                <li>Dreptul la ștergerea datelor</li>
                <li>Dreptul la portabilitatea datelor</li>
                <li>Dreptul de opoziție</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pentru întrebări despre această Politică de Confidențialitate sau pentru exercitarea drepturilor dumneavoastră, ne puteți contacta la:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> contact@advicelink.ro<br />
                <strong>Telefon:</strong> +40 123 456 789<br />
                <strong>Adresă:</strong> Str. Principală, Nr. 123, București
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
