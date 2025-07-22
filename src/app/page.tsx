"use client";

import { useState, useEffect, type ChangeEvent } from 'react';
import Image from 'next/image';
import { Leaf, Search, Info } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface Specimen {
  id_catalogo: string;
  nombre_cientifico: string;
  familia: string;
  colector: string;
  fecha_colecta: string;
  localidad: string;
  url_imagen: string;
}

function SpecimenCard({ specimen }: { specimen: Specimen }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={specimen.url_imagen}
            alt={`Imagen de ${specimen.nombre_cientifico}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint="plant specimen"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="font-headline text-lg mb-1 italic">{specimen.nombre_cientifico}</CardTitle>
        <CardDescription className="text-base">
          <span className="font-semibold">Familia:</span> {specimen.familia}
        </CardDescription>
        <CardDescription>
          <span className="font-semibold">Colector:</span> {specimen.colector}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <p className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
          {specimen.id_catalogo}
        </p>
      </CardFooter>
    </Card>
  );
}

export default function Home() {
  const [allSpecimens, setAllSpecimens] = useState<Specimen[]>([]);
  const [filteredSpecimens, setFilteredSpecimens] = useState<Specimen[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/specimens.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Specimen[] = await response.json();
        setAllSpecimens(data);
        setFilteredSpecimens(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(`Failed to load specimen data: ${e.message}`);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const results = allSpecimens.filter(specimen =>
      specimen.nombre_cientifico.toLowerCase().includes(lowercasedTerm) ||
      specimen.familia.toLowerCase().includes(lowercasedTerm) ||
      specimen.colector.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredSpecimens(results);
  }, [searchTerm, allSpecimens]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-10">
          <div className="flex justify-center items-center gap-4 mb-2">
            <Leaf className="w-12 h-12 text-primary" />
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Herbario Digital USM
            </h1>
          </div>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            Explora la colección digitalizada del Herbario San Marcos (USM), un tesoro de la biodiversidad botánica del Perú.
          </p>
        </header>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por nombre científico, familia o colector..."
              className="w-full pl-10 pr-4 py-6 text-base rounded-full shadow-inner bg-card"
              value={searchTerm}
              onChange={handleSearch}
              aria-label="Search specimens"
            />
          </div>
        </div>
        
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="flex flex-col">
                <Skeleton className="h-64 w-full" />
                <CardContent className="p-4 space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-1/3" />
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Skeleton className="h-6 w-1/4" />
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {error && (
           <Alert variant="destructive" className="max-w-2xl mx-auto">
            <Info className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!loading && !error && filteredSpecimens.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSpecimens.map(specimen => (
              <SpecimenCard key={specimen.id_catalogo} specimen={specimen} />
            ))}
          </div>
        )}

        {!loading && !error && filteredSpecimens.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No se encontraron resultados para "{searchTerm}".</p>
            <p className="text-muted-foreground mt-2">Intenta con otro término de búsqueda.</p>
          </div>
        )}
      </main>
      <footer className="text-center py-6 mt-12 border-t">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Herbario Digital USM Explorer. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
