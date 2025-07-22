import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-gray-700 hover:text-green-700">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-green-700">
              Acerca del Proyecto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
