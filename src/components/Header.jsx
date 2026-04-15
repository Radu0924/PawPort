import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex items-center px-10 py-6 border-b border-ink-black/10">

      <Link
        to="/"
        className="bg-sunny-yellow px-4 py-2 rounded-bubble sketch-border rotate-2 hover:rotate-0 transition-transform hover:scale-105"
      >
        <span className="font-display font-black text-2xl">
          🐾 PawPort
        </span>
      </Link>

      <nav className="flex-1 flex justify-center gap-10 font-display font-bold text-lg">
        <Link to="/adopta" className="hover:underline">
          Adoptă un animal
        </Link>
        <Link to="/ofera" className="hover:underline">
          Oferă spre adopție
        </Link>
        <span className="opacity-70">Despre noi</span>
        <span className="opacity-70">Contactează-ne</span>
      </nav>
    </header>
  );
}