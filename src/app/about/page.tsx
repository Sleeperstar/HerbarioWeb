import Header from "@/components/Header";
import TeamMemberCard, { TeamMember } from "@/components/TeamMemberCard";
import { Info, Landmark, Target, BookOpenText, Rocket } from "lucide-react";

export default function About() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 pt-28 pb-12">
        {/* Mini Hero */}
        <section className="mb-10">
          <div className="card-botanical p-8 rounded-2xl bg-gradient-to-r from-botanical-cream/70 to-botanical-sage/40 border border-botanical-sage/30">
            <h1 className="font-headline text-4xl font-bold text-botanical-shadow mb-3">Acerca del Proyecto</h1>
            <p className="text-botanical-earth/80 max-w-3xl">
              Preservamos y democratizamos el conocimiento botánico del Perú mediante la digitalización del Herbario USM.
            </p>
          </div>
        </section>

        {/* El Proyecto */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-6 items-stretch">
            <div className="card-botanical p-6 flex items-start gap-3">
              <div className="rounded-xl bg-botanical-leaf/10 p-3">
                <Info className="w-6 h-6 text-botanical-leaf" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-botanical-shadow mb-2">El Proyecto</h2>
                <p className="text-botanical-earth/80">
                  <span className="font-semibold">Problema:</span> El acceso a las colecciones de herbarios es clave para la investigación, pero está limitado por barreras físicas y económicas. Los especímenes son vulnerables a daños y degradación, poniendo en riesgo información invaluable.
                </p>
              </div>
            </div>
            <div className="card-botanical p-6">
              <h3 className="font-headline text-xl font-bold text-botanical-shadow mb-3">Justificación e Impacto</h3>
              <p className="text-botanical-earth/80 leading-relaxed">
                Digitalizamos el Herbario USM para democratizar el acceso, preservar para futuras generaciones y potenciar la investigación científica, la educación y la economía del Perú.
              </p>
            </div>
          </div>
        </section>

        {/* El Herbario USM */}
        <section className="mb-10">
          <div className="card-botanical p-6 flex items-start gap-3">
            <div className="rounded-xl bg-botanical-amber/10 p-3">
              <Landmark className="w-6 h-6 text-botanical-amber" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-botanical-shadow mb-2">El Herbario USM</h2>
              <p className="text-botanical-earth/80">
                Fundado en la década de 1940, el Herbario San Marcos (USM) es el más grande del Perú, con más de 750,000 especímenes. Alberga colecciones históricas de valor incalculable como las de Antonio Raimondi y Augusto Weberbauer.
              </p>
            </div>
          </div>
        </section>

        {/* Objetivos */}
        <section className="mb-12">
          <h2 className="font-headline text-3xl font-bold text-botanical-shadow mb-6">Objetivos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-botanical hover-lift p-6 text-center">
              <div className="mb-3 flex justify-center"><Target className="w-8 h-8 text-botanical-leaf" /></div>
              <h3 className="font-semibold text-botanical-shadow mb-2">Objetivo General</h3>
              <p className="text-botanical-earth/80 text-sm">Prototipo funcional de la plataforma digital del Herbario USM.</p>
            </div>
            <div className="card-botanical hover-lift p-6 text-center">
              <div className="mb-3 flex justify-center"><BookOpenText className="w-8 h-8 text-botanical-amber" /></div>
              <h3 className="font-semibold text-botanical-shadow mb-2">Digitalización</h3>
              <p className="text-botanical-earth/80 text-sm">1,500 especímenes Tipo y 8,000 colecciones históricas.</p>
            </div>
            <div className="card-botanical hover-lift p-6 text-center">
              <div className="mb-3 flex justify-center"><Target className="w-8 h-8 text-botanical-moss" /></div>
              <h3 className="font-semibold text-botanical-shadow mb-2">ADN de Barras</h3>
              <p className="text-botanical-earth/80 text-sm">Poner a punto técnicas de códigos de barras de ADN.</p>
            </div>
            <div className="card-botanical hover-lift p-6 text-center">
              <div className="mb-3 flex justify-center"><Rocket className="w-8 h-8 text-botanical-sage" /></div>
              <h3 className="font-semibold text-botanical-shadow mb-2">Despliegue</h3>
              <p className="text-botanical-earth/80 text-sm">Publicar la plataforma para el acceso abierto al público.</p>
            </div>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="mb-12">
          <h2 className="font-headline text-3xl font-bold text-botanical-shadow mb-6">Nuestro Equipo</h2>
          <TeamGrid />
        </section>

        {/* Colaboradores */}
        <section>
          <div className="card-botanical p-6">
            <h2 className="font-headline text-3xl font-bold text-botanical-shadow mb-3">Colaboradores</h2>
            <p className="text-botanical-earth/80">
              Contamos con la invaluable colaboración de expertos internacionales y la prestigiosa <span className="font-semibold">Universidad de Yale</span>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function TeamGrid() {
  const team: TeamMember[] = [
    {
      name: "Orjeda Fernandez Maria Gisella",
      role: "Investigadora principal",
      faculty: "Facultad: Ciencias Biológicas",
      imageUrl: "/images/integrantes/Gisella Orjeda.jpeg",
    },
    {
      name: "Arakaki Makishi Monica",
      role: "Investigadora principal",
      faculty: "Facultad: Ciencias Biológicas",
      imageUrl: "/images/integrantes/ARAKAKI MAKISHI.jpeg",
    },
    {
      name: "Alban Castillo Joaquina Adelaida",
      role: "Investigadora principal",
      faculty: "Facultad: Ciencias Biológicas",
      imageUrl: "/images/integrantes/ALBAN CASTILLO.jpeg",
    },
    {
      name: "Millan Salazar Betty Gaby",
      role: "Investigadora principal",
      faculty: "Facultad: Ciencias Biológicas",
      imageUrl: "/images/integrantes/MILLAN SALAZAR.jpeg",
    },
    {
      name: "Herrera Quispe Jose Alfredo",
      role: "Investigador principal",
      faculty: "Facultad: Ingeniería de Sistemas e Informática",
      imageUrl: "/images/integrantes/Jose Herrera.jpeg",
    },
    {
      name: "GABRIEL CAMPOS EDWIN NATIVIDAD",
      role: "Investigador principal",
      faculty: "Facultad: Ciencias Sociales",
      imageUrl: "/images/integrantes/GABRIEL CAMPOS.jpeg",
    },
    {
      name: "LEON BOCANGEL DE YOUNG BLANCA ROSA",
      role: "Investigadora principal",
      faculty: "Facultad: Ciencias Biológicas",
      imageUrl: "/images/integrantes/Blanca Leon.jpeg",
    },
    {
      name: "CANO ECHEVARRIA ASUNCION ALIPIO",
      role: "Investigador principal",
      faculty: "Facultad: Ciencias Biológicas",
      imageUrl: "/images/integrantes/Cano Echevarria.jpeg",
    },
    {
      name: "Quispe Huallpa Jhampier Edison",
      role: "Tesista",
      faculty: "Facultad: Ingeniería de Sistemas e Informática",
      imageUrl: "/images/integrantes/Jhampier Quispe.jpeg",
    },
  ];

  // Separar investigadores y tesistas
  const investigadores = team.filter((m) => m.role.toLowerCase().includes("investigador"));
  const tesistas = team.filter((m) => m.role.toLowerCase() === "tesista");

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-botanical-shadow mb-4">Investigadores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {investigadores.map((member) => (
            <div key={member.name}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-botanical-shadow mb-4">Tesistas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tesistas.map((member) => (
            <div key={member.name}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
