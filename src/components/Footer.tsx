import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#751a1d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Leaf className="w-8 h-8 text-[#ec973a]" />
              <h3 className="font-headline text-xl font-bold">Herbario USM</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Preservando y compartiendo la biodiversidad peruana para las futuras generaciones.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/" className="hover:text-[#ec973a] transition-colors">Explorar Colección</Link></li>
              <li><Link href="/about" className="hover:text-[#ec973a] transition-colors">Acerca del Proyecto</Link></li>
              <li><Link href="/collections" className="hover:text-[#ec973a] transition-colors">Colecciones Históricas</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <p className="text-white/80 leading-relaxed">
              Universidad Nacional Mayor de San Marcos<br />
              Museo de Historia Natural<br />
              Lima, Perú
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70">
            &copy; {new Date().getFullYear()} Herbario Digital USM Explorer. Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
