import Header from "../components/Header";

export default function Adopt() {
  return (
    <div className="min-h-screen bg-sky-blue paper-texture flex flex-col">

      <Header />

      <main className="flex-grow p-10">
        <h1 className="font-display font-black text-4xl mb-6">
          Adoptă un animal
        </h1>

        <p className="font-handwriting text-xl opacity-80 max-w-2xl">
          Aici va fi lista de animale disponibile pentru adopție 🐶🐱
        </p>
      </main>

      <footer className="w-full text-center py-6 font-sketch text-sm opacity-60 border-t border-ink-black/10">
        © 2024 PawPort • Adoptă cu inimă 🐾
      </footer>
    </div>
  );
}