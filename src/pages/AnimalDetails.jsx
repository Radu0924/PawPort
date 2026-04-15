import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import AdoptForm from "../components/AdoptForm";
import AdoptModal from "../components/AdoptModal";

export default function AnimalDetails() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/data/pets.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === Number(id));
        setAnimal(found);
      });
  }, [id]);

  if (!animal) return null;

  return (
    <div className="min-h-screen bg-sky-blue paper-texture">
      <Header />

      <main className="max-w-[1400px] mx-auto px-8 py-10 grid grid-cols-12 gap-10">

        {/* PROFIL STÂNGA */}
        <aside className="col-span-3 bg-white/70 backdrop-blur-sm rounded-xl p-6">
          <div className="w-full aspect-square rounded-lg overflow-hidden mb-3">
            <img
              src={animal.poza_url}
              alt={animal.nume}
              className="w-full h-full object-cover"
            />
          </div>

          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-bold mb-4">
            ADOPTABIL
          </span>

          <h1 className="text-2xl font-black mb-1">
            {animal.nume}
          </h1>

          <p className="text-base text-gray-500 mb-6">
            {animal.specie} • {animal.rasa}
          </p>

          <ul className="space-y-3 text-base">
            <li><b>Vârstă:</b> {animal.varsta}</li>
            <li><b>Sex:</b> {animal.sex}</li>
            <li><b>Locație:</b> {animal.locatie}</li>
            <li><b>Mărime:</b> {animal.marime}</li>
          </ul>
        </aside>

        {/* CENTRU */}
        <section className="col-span-6 space-y-6">

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Vital Statistics Hub
            </h2>

            <div className="grid grid-cols-3 gap-6 text-lg text-center font-sketch">
              <Stat label="Vaccinat" value={animal.vaccinat ? "Da" : "Nu"} />
              <Stat label="Sterilizat" value={animal.sterilizat ? "Da" : "Nu"} />
              <Stat label="Afecțiuni" value={animal.afectiuni ?? "Niciuna"} />
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Comportament
            </h2>

            <div className="flex flex-wrap gap-4">
              {animal.temperament.map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-100 px-3 py-3 rounded-full text-base "
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* MEDICAL / HISTORY */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold mb-6">
              Istoric medical & de viață
            </h2>

            <p><b>Foști proprietari:</b> {animal.fosti_proprietari}</p>
            <p><b>Motiv predare:</b> {animal.motiv_predare ?? "—"}</p>
            <p>
              <b>Mediu recomandat:</b>{" "}
              {animal.temperament.includes("Animal de interior")
                ? "Interior"
                : "Exterior"}
            </p>
          </div>

        </section>

        {/* COLOANA DREAPTA – ACTIUNE */}
        <aside className="col-span-3 bg-white/70 backdrop-blur-sm rounded-xl p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4 text-center">
            Ești gata să îi oferi o familie?
        </h2>

        <button
            onClick={() => setShowModal(true)}
            className="
            w-full
            bg-crayon-red
            text-white
            py-4
            rounded-full
            text-lg
            font-bold
            sketch-border
            hover:bg-berry-pink
            transition
            "
        >
            Adoptă
        </button>
        </aside>

        {showModal && <AdoptModal onClose={() => setShowModal(false)} />}
                </main>
            </div>
        );
        }   
    
function Stat({ label, value }) {
  return (  
    <div>
      <div className="text-gray-500 mb-2">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}