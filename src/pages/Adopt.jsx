import { useEffect, useState } from "react";
import Header from "../components/Header";
import PetCard from "../components/PetCard";
import CustomDropdown from "../components/CustomDropdown";
import { useSearchParams } from "react-router-dom";

const SPECII = [
  "Toate",
  "Câine",
  "Pisică",
  "Reptilă",
  "Pasăre",
  "Pește",
  "Altele"
];

export default function Adopt() {
  const [toateAnimalele, setToateAnimalele] = useState([]);
 const [searchParams, setSearchParams] = useSearchParams();

const specieSelectata = searchParams.get("specie") || "Toate";
const orasSelectat = searchParams.get("oras") || "Orase";

const specieFiltrata = specieSelectata !== "Toate";
const orasFiltrat = orasSelectat !== "Orase";


  useEffect(() => {
    fetch("/data/pets.json")
      .then((res) => res.json())
      .then((data) => setToateAnimalele(data));
  }, []);

  const oraseUnice = [
    "Orase",
    ...Array.from(new Set(toateAnimalele.map((p) => p.locatie))),
  ];

  const animaleFiltrate = toateAnimalele.filter((pet) => {
    const matchSpecie =
      specieSelectata === "Toate" || pet.specie === specieSelectata;
    const matchOras =
      orasSelectat === "Orase" || pet.locatie === orasSelectat;

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
            
          <CustomDropdown
            value={specieSelectata}
            options={SPECII}
            onChange={(value) =>
              setSearchParams({
                specie: value,
                oras: orasSelectat,
              })
            }
          />

          <CustomDropdown
            value={orasSelectat}
            options={oraseUnice}
            onChange={(value) =>
              setSearchParams({
                specie: specieSelectata,
                oras: value,
              })
            }
          />
          </div>
        </div>

        <div className="pt-6 min-h-[500px]">
          {animaleFiltrate.length === 0 ? (
          <p className="font-handwriting text-2xl opacity-80 text-center">
            {specieFiltrata && !orasFiltrat && (
              <>Nu am găsit animale pentru această specie.</>
            )}

            {!specieFiltrata && orasFiltrat && (
              <>Nu am găsit animale pentru acest oraș.</>
            )}

            {specieFiltrata && orasFiltrat && (
              <>Nu am găsit animale pentru această specie și acest oraș.</>
            )}
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
        © 2024 PawPort • Din suflet, pentru animale. 🐾
      </footer>
    </div>
  );
}
