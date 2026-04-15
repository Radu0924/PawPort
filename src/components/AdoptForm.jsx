import { useState } from "react";

export default function AdoptForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Numele este obligatoriu";

    if (!form.email.trim()) {
      e.email = "Emailul este obligatoriu";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Format de email invalid";
    }

    if (!form.message.trim()) e.message = "Mesajul este obligatoriu";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-grass-green/30 border border-grass-green rounded-xl p-4 text-center">
        <p className=" text-green-600 text-xl">
          ✅ Cererea a fost trimisă!
        </p>
        <p className="text-base opacity-70 mt-1">
          Te vom contacta în curând.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <input
          placeholder="Nume complet"
          className="w-full p-3 rounded-full sketch-border"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <input
          placeholder="Email"
          className="w-full p-3 rounded-full sketch-border"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <textarea
          placeholder="Mesaj"
          rows={4}
          className="w-full p-3 rounded-xl sketch-border"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      <button className="w-full bg-ocean-blue text-white py-3 rounded-full font-bold sketch-border hover:bg-ink-black">
        Trimite cererea
      </button>
    </form>
  );
}