import { useEffect, useState } from "react";
import Header from "../components/Header";
import PetCard from "../components/PetCard";

const SPECII = [
  "Toate",
  "Câine",
  "Pisică",
  "Reptilă",
  "Pasăre",
  "Pește",
  "Altele",
];

export default function Adopt() {
  const [toateAnimalele, setToateAnimalele] = useState([]);
  const [specieSelectata, setSpecieSelectata] = useState("Toate");
  const [orasSelectat, setOrasSelectat] = useState("Toate");

  useEffect(() => {
    fetch("/data/pets.json")
      .then((res) => res.json())
      .then((data) => setToateAnimalele(data));
  }, []);

  const oraseUnice = [
    "Toate",
    ...Array.from(new Set(toateAnimalele.map((p) => p.locatie))),
  ];

  const animaleFiltrate = toateAnimalele.filter((pet) => {
    const matchSpecie =
      specieSelectata === "Toate" || pet.specie === specieSelectata;
    const matchOras =
      orasSelectat === "Toate" || pet.locatie === orasSelectat;

    return matchSpecie && matchOras;
  });

  return (
    <div className="min-h-screen bg-sky-blue paper-texture flex flex-col">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10 flex-grow">

        <div
          className="
            sticky top-0 z-10
            bg-sky-blue paper-texture
            flex items-center justify-between
            mb-4 pb-6 gap-6 flex-wrap
          "
        >
          <div>
            <h1 className="font-display font-black text-4xl">
              Găsește-ți noul prieten!
            </h1>
            <p className="font-handwriting text-lg opacity-70">
              Alege o specie și un oraș pentru a vedea animalele disponibile.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <select
              value={specieSelectata}
              onChange={(e) => setSpecieSelectata(e.target.value)}
              className="
                px-5 py-3
                rounded-full
                sketch-border
                bg-white
                font-sketch
                cursor-pointer
                hover:bg-sky-blue/40
                transition-colors
              "
            >
              {SPECII.map((specie) => (
                <option key={specie} value={specie}>
                  {specie}
                </option>
              ))}
            </select>

            <select
              value={orasSelectat}
              onChange={(e) => setOrasSelectat(e.target.value)}
              className="
                px-5 py-3
                rounded-full
                sketch-border
                bg-white
                font-sketch
                cursor-pointer
                hover:bg-sky-blue/40
                transition-colors
              "
            >
              {oraseUnice.map((oras) => (
                <option key={oras} value={oras}>
                  {oras}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-6 min-h-[500px]">
          {animaleFiltrate.length === 0 ? (
            <p className="font-handwriting text-2xl opacity-80">
              Nu am găsit animale pentru această locație.
            </p>
          ) : (
            <div className="flex flex-wrap gap-10 justify-center items-start">
              {animaleFiltrate.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
          )}
        </div>

      </main>

      <footer className="w-full text-center py-6 font-sketch text-sm opacity-60 border-t border-ink-black/10">
        © 2024 PawPort • Adoptă cu inimă 🐾
      </footer>
    </div>
  );
}
