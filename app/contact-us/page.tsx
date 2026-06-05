"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/CTAFooter";

const subjects = [
  "Demande commerciale",
  "Support technique",
  "Partenariat",
  "Facturation",
  "Autre",
];

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div style={{ background: "var(--navy)", minHeight: "100vh" }}>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs mb-6 hover:opacity-80 transition-opacity"
            style={{ color: "var(--slate-2)", textDecoration: "none" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour à l&apos;accueil
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(26,110,245,0.15)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--blue-3)"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h1
              className="text-2xl font-bold"
              style={{
                color: "var(--white-fleet)",
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.6px",
              }}
            >
              Nous contacter
            </h1>
          </div>
          <p className="text-sm" style={{ color: "var(--slate-2)" }}>
            Une question, un projet, un besoin de support ? Notre équipe vous
            répond sous 24 h.
          </p>
        </div>

        {submitted ? (
          <div
            className="rounded-2xl px-8 py-12 flex flex-col items-center text-center gap-4"
            style={{
              background: "var(--navy-3)",
              border: "1px solid var(--border-2)",
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "rgba(0,212,170,0.12)" }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--cyan)"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h2
              className="text-lg font-bold"
              style={{
                color: "var(--white-fleet)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Message envoyé !
            </h2>
            <p className="text-sm max-w-sm" style={{ color: "var(--slate-2)" }}>
              Merci de nous avoir contactés. Notre équipe vous répondra dans les
              plus brefs délais.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({
                  name: "",
                  email: "",
                  company: "",
                  phone: "",
                  subject: "",
                  message: "",
                });
              }}
              className="mt-2 text-sm font-medium px-5 py-2.5 rounded-xl transition-opacity hover:opacity-80"
              style={{
                background: "var(--blue)",
                color: "#fff",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Nouveau message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl px-8 py-9 flex flex-col gap-5"
            style={{
              background: "var(--navy-3)",
              border: "1px solid var(--border-2)",
            }}
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-medium"
                  style={{ color: "var(--slate-2)" }}
                >
                  Nom complet <span style={{ color: "var(--blue-3)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className="text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                  style={{
                    background: "var(--navy-2)",
                    border: "1px solid var(--border-2)",
                    color: "var(--white-fleet)",
                  }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-medium"
                  style={{ color: "var(--slate-2)" }}
                >
                  Adresse e-mail{" "}
                  <span style={{ color: "var(--blue-3)" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jean@entreprise.com"
                  className="text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                  style={{
                    background: "var(--navy-2)",
                    border: "1px solid var(--border-2)",
                    color: "var(--white-fleet)",
                  }}
                />
              </div>
            </div>

            {/* Company + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-medium"
                  style={{ color: "var(--slate-2)" }}
                >
                  Entreprise
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Ma Société SAS"
                  className="text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                  style={{
                    background: "var(--navy-2)",
                    border: "1px solid var(--border-2)",
                    color: "var(--white-fleet)",
                  }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs font-medium"
                  style={{ color: "var(--slate-2)" }}
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+33 6 00 00 00 00"
                  className="text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                  style={{
                    background: "var(--navy-2)",
                    border: "1px solid var(--border-2)",
                    color: "var(--white-fleet)",
                  }}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs font-medium"
                style={{ color: "var(--slate-2)" }}
              >
                Sujet <span style={{ color: "var(--blue-3)" }}>*</span>
              </label>
              <select
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="text-sm px-4 py-3 rounded-xl outline-none transition-colors appearance-none"
                style={{
                  background: "var(--navy-2)",
                  border: "1px solid var(--border-2)",
                  color: form.subject ? "var(--white-fleet)" : "var(--slate)",
                }}
              >
                <option value="" disabled>
                  Sélectionnez un sujet
                </option>
                {subjects.map((s) => (
                  <option
                    key={s}
                    value={s}
                    style={{
                      background: "var(--navy-2)",
                      color: "var(--white-fleet)",
                    }}
                  >
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs font-medium"
                style={{ color: "var(--slate-2)" }}
              >
                Message <span style={{ color: "var(--blue-3)" }}>*</span>
              </label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Décrivez votre demande en détail…"
                className="text-sm px-4 py-3 rounded-xl outline-none transition-colors resize-none"
                style={{
                  background: "var(--navy-2)",
                  border: "1px solid var(--border-2)",
                  color: "var(--white-fleet)",
                }}
              />
            </div>

            {/* Footer row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
              <p className="text-xs" style={{ color: "var(--slate)" }}>
                Réponse garantie sous 24 h ouvrées · contact@zira.ci
              </p>
              <button
                type="submit"
                disabled={loading}
                className="text-sm font-semibold px-7 py-3 rounded-xl transition-opacity hover:opacity-90 flex items-center gap-2 shrink-0"
                style={{
                  background: "var(--blue)",
                  color: "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading && (
                  <svg
                    className="animate-spin"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                )}
                {loading ? "Envoi…" : "Envoyer le message"}
              </button>
            </div>
          </form>
        )}

        {/* Contact info cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
              label: "E-mail",
              value: "contact@zira.ci",
            },
            {
              icon: "M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3",
              label: "Support",
              value: "support@zira.ci",
            },
            {
              icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
              label: "Disponibilité",
              value: "Lun – Ven · 9h – 18h",
            },
          ].map(({ icon, label, value }) => (
            <div
              key={label}
              className="rounded-xl px-5 py-4 flex flex-col gap-2"
              style={{
                background: "var(--navy-3)",
                border: "1px solid var(--border)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--blue-3)"
                strokeWidth={1.8}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
              </svg>
              <span
                className="text-xs font-medium"
                style={{ color: "var(--slate)" }}
              >
                {label}
              </span>
              <span
                className="text-xs font-semibold"
                style={{ color: "var(--white-2)" }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
