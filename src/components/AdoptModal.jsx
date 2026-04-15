import AdoptForm from "./AdoptForm";

export default function AdoptModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 w-full max-w-md sketch-border">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold opacity-60 hover:opacity-100"
        >
          ✕
        </button>

        <h2 className="font-display font-black text-2xl mb-4 text-center">
          Adoptă‑mă! 💛
        </h2>

        <AdoptForm />
      </div>
    </div>
  );
}