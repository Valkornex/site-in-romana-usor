
const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Termeni și Condiții
          </h1>
          <p className="text-lg text-gray-600">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptarea termenilor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prin accesarea și utilizarea site-ului web al Advice Link, acceptați să fiți legați de acești Termeni și Condiții. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați serviciile noastre.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descrierea serviciilor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Advice Link oferă servicii de consultanță în management, strategie de afaceri, analiză financiară și alte servicii conexe. Serviciile sunt furnizate în conformitate cu acordurile specifice încheiate cu fiecare client.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Utilizarea site-ului</h2>
            <div className="text-gray-700 leading-relaxed mb-4">
              <p className="mb-3">Vă angajați să utilizați site-ul nostru doar în scopuri legale și în conformitate cu acești termeni. Nu veți:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utiliza site-ul în mod ilegal sau neautorizat</li>
                <li>Transmite viruși sau alt cod malițios</li>
                <li>Încerca să obțineți acces neautorizat la sistemele noastre</li>
                <li>Reproduce sau distribui conținutul fără autorizare</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Proprietatea intelectuală</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tot conținutul de pe acest site, inclusiv textele, imaginile, logo-urile și designul, este proprietatea Advice Link și este protejat de legile drepturilor de autor. Reproducerea neautorizată este interzisă.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitarea răspunderii</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Advice Link nu va fi răspunzătoare pentru daune directe, indirecte, incidentale sau consecințiale care rezultă din utilizarea serviciilor noastre sau a site-ului web, în măsura permisă de lege.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidențialitate</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Advice Link se angajează să mențină confidențialitatea informațiilor clientului. Toate informațiile primite în cadrul relației de consultanță vor fi tratate ca fiind confidențiale și nu vor fi divulgate terților fără consimțământul explicit al clientului.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modificarea termenilor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment. Modificările vor intra în vigoare imediat după publicarea pe site. Utilizarea continuă a serviciilor după modificări constituie acceptarea noilor termeni.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Legea aplicabilă</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Acești Termeni și Condiții sunt guvernați de legea română. Orice dispute vor fi soluționate de instanțele competente din România.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pentru întrebări despre acești Termeni și Condiții, ne puteți contacta la:
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

export default TermsConditions;
