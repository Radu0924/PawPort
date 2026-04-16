import Header from "../components/Header";

export default function Ofera() {
  return (
    <div className="min-h-screen bg-sky-blue paper-texture flex flex-col">

      <Header />

      <main className="flex-grow p-10 max-w-3xl mx-auto">
        <h1 className="font-display font-black text-4xl mb-6">
          Oferă spre adopție
        </h1>

        <p className="font-handwriting text-xl opacity-80 mb-8">
          Completează formularul de mai jos pentru a ajuta un animal să își găsească
          o nouă familie 💛
        </p>

        <div className="bg-white p-6 rounded-wiggly sketch-border">
          <p className="font-sketch opacity-70">
            Formularul pentru oferire spre adopție va fi aici.
          </p>
        </div>
      </main>

      <footer className="w-full text-center py-6 font-sketch text-sm opacity-60 border-t border-ink-black/10">
        © 2024 PawPort • Din suflet, pentru animale. 🐾
      </footer>
    </div>
  );
}