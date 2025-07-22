import Header from "@/components/Header";

export default function About() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">
          Acerca del Proyecto
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            El Proyecto
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              <span className="font-bold">Problema:</span> El acceso a las
              colecciones de herbarios es fundamental para la investigación
              científica, pero está limitado por barreras físicas y
              económicas. Los especímenes físicos son vulnerables a daños y
              degradación, lo que pone en riesgo información invaluable.
            </p>
            <p>
              <span className="font-bold">Justificación e Impacto:</span> Este
              proyecto busca digitalizar el Herbario USM para democratizar el
              acceso a su vasta colección, preservarla para futuras
              generaciones y potenciar la investigación científica, la
              educación y la economía del Perú.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            El Herbario USM
          </h2>
          <p className="text-lg text-gray-700">
            Fundado en la década de 1940, el Herbario San Marcos (USM) es el
            más grande del Perú, con más de 750,000 especímenes. Alberga
            colecciones históricas de valor incalculable, como las de Antonio
            Raimondi y Augusto Weberbauer.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Objetivos
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              <span className="font-bold">Objetivo General:</span> Lograr un
              prototipo funcional de la plataforma digital del Herbario USM.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-bold">Objetivo Específico 1:</span>{" "}
                Implementar la plataforma digital.
              </li>
              <li>
                <span className="font-bold">Objetivo Específico 2:</span>{" "}
                Digitalizar los 1,500 especímenes Tipo y las 8,000 colecciones
                históricas.
              </li>
              <li>
                <span className="font-bold">Objetivo Específico 3:</span> Poner
                a punto las técnicas de códigos de barras de ADN.
              </li>
              <li>
                <span className="font-bold">Objetivo Específico 4:</span>{" "}
                Desplegar la plataforma para el acceso público.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Aquí se puede mapear una lista de miembros del equipo */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Nombre del Miembro</h3>
              <p className="text-gray-600">Rol, Facultad</p>
            </div>
            {/* ... otros miembros */}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Colaboradores
          </h2>
          <p className="text-lg text-gray-700">
            Contamos con la invaluable colaboración de expertos
            internacionales y la prestigiosa{" "}
            <span className="font-bold">Universidad de Yale</span>.
          </p>
        </section>
      </main>
    </div>
  );
}
