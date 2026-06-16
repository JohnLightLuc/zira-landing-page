"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DeleteAccountPage() {
  const [form, setForm] = useState({ email: "", reason: "", confirm: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email || !form.reason) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    if (form.confirm.toLowerCase() !== "supprimer") {
      setError("Veuillez saisir « supprimer » pour confirmer.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: "var(--navy)" }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center gap-3 justify-center mb-8">
          <Image src="/logo_ic.png" width={36} height={36} alt="Zira" className="rounded-xl" />
          <div>
            <div
              className="font-bold text-base"
              style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Zira
            </div>
            <div
              className="text-[10px] font-medium tracking-widest uppercase"
              style={{ color: "var(--cyan)", marginTop: "-2px" }}
            >
              GPS Management
            </div>
          </div>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{ background: "var(--navy-2)", border: "1px solid var(--border-2)" }}
        >
          {submitted ? (
            /* Success state */
            <div className="flex flex-col items-center text-center gap-4 py-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(0,212,170,0.12)" }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="var(--cyan)" strokeWidth="1.5" />
                  <path
                    d="M7.5 12.5l3 3 6-6"
                    stroke="var(--cyan)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h2
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Demande envoyée
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--slate)" }}>
                  Votre demande de suppression de compte a bien été reçue. Notre équipe la traitera
                  dans un délai de <span style={{ color: "var(--slate-2)" }}>7 jours ouvrables</span>.
                  Vous recevrez une confirmation par email.
                </p>
              </div>
              <Link
                href="/"
                className="w-full text-sm font-semibold text-center py-3 rounded-xl mt-2 block no-underline transition-opacity hover:opacity-90"
                style={{
                  background: "var(--navy-3)",
                  border: "1px solid var(--border-2)",
                  color: "var(--slate-2)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Retour à l'accueil
              </Link>
            </div>
          ) : (
            /* Form state */
            <>
              {/* Warning banner */}
              <div
                className="flex items-start gap-3 rounded-xl p-3 mb-6"
                style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}
              >
                <svg
                  className="shrink-0 mt-0.5"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                    stroke="#f87171"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-xs leading-relaxed" style={{ color: "#f87171" }}>
                  Cette action est <strong>irréversible</strong>. Toutes vos données seront
                  définitivement supprimées.
                </p>
              </div>

              <h1
                className="text-xl font-bold mb-1 text-center"
                style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Suppression de compte
              </h1>
              <p className="text-sm text-center mb-7" style={{ color: "var(--slate)" }}>
                Remplissez ce formulaire pour soumettre votre demande
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Email */}
                <div>
                  <label
                    className="block text-xs font-medium mb-2"
                    style={{ color: "var(--slate-2)" }}
                  >
                    Adresse email <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="vous@exemple.ci"
                    className="w-full text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                    style={{
                      background: "var(--navy-3)",
                      border: "1px solid var(--border-2)",
                      color: "var(--white-fleet)",
                    }}
                    required
                  />
                </div>

                {/* Reason */}
                <div>
                  <label
                    className="block text-xs font-medium mb-2"
                    style={{ color: "var(--slate-2)" }}
                  >
                    Raison <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <select
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    className="w-full text-sm px-4 py-3 rounded-xl outline-none"
                    style={{
                      background: "var(--navy-3)",
                      border: "1px solid var(--border-2)",
                      color: form.reason ? "var(--white-fleet)" : "var(--slate)",
                    }}
                    required
                  >
                    <option value="" disabled>
                      Sélectionnez une raison
                    </option>
                    <option value="no_longer_needed">Je n&apos;ai plus besoin du service</option>
                    <option value="privacy">Raisons de confidentialité</option>
                    <option value="switching">Je passe à une autre solution</option>
                    <option value="too_expensive">Trop coûteux</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                {/* Additional comment */}
                <div>
                  <label
                    className="block text-xs font-medium mb-2"
                    style={{ color: "var(--slate-2)" }}
                  >
                    Commentaire <span style={{ color: "var(--slate)" }}>(optionnel)</span>
                  </label>
                  <textarea
                    name="comment"
                    onChange={handleChange}
                    placeholder="Dites-nous comment nous aurions pu mieux vous servir..."
                    rows={3}
                    className="w-full text-sm px-4 py-3 rounded-xl outline-none resize-none"
                    style={{
                      background: "var(--navy-3)",
                      border: "1px solid var(--border-2)",
                      color: "var(--white-fleet)",
                    }}
                  />
                </div>

                {/* Confirmation input */}
                <div>
                  <label
                    className="block text-xs font-medium mb-2"
                    style={{ color: "var(--slate-2)" }}
                  >
                    Tapez <span style={{ color: "#f87171" }}>supprimer</span> pour confirmer{" "}
                    <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="confirm"
                    value={form.confirm}
                    onChange={handleChange}
                    placeholder="supprimer"
                    className="w-full text-sm px-4 py-3 rounded-xl outline-none"
                    style={{
                      background: "var(--navy-3)",
                      border: "1px solid var(--border-2)",
                      color: "var(--white-fleet)",
                    }}
                    required
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p className="text-xs text-center" style={{ color: "#f87171" }}>
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full text-sm font-semibold py-3.5 rounded-xl mt-1 transition-opacity hover:opacity-90"
                  style={{
                    background: "rgba(239,68,68,0.15)",
                    border: "1px solid rgba(239,68,68,0.4)",
                    color: "#f87171",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Envoyer la demande de suppression
                </button>
              </form>
            </>
          )}
        </div>

        {!submitted && (
          <p className="text-xs text-center mt-6">
            <Link
              href="/"
              className="no-underline hover:opacity-80"
              style={{ color: "var(--slate-2)" }}
            >
              ← Retour à l&apos;accueil
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}