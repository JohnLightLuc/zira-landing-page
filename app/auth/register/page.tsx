import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: "var(--navy)" }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center gap-3 justify-center mb-8">
          <Image src="/logo_ic.png" width={36} height={36} alt="Zira" className="rounded-xl" />
          <div>
            <div className="font-bold text-base" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>Zira</div>
            <div className="text-[10px] font-medium tracking-widest uppercase" style={{ color: "var(--cyan)", marginTop: "-2px" }}>GPS Management</div>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-8" style={{ background: "var(--navy-2)", border: "1px solid var(--border-2)" }}>
          <h1 className="text-xl font-bold mb-1 text-center" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>
            Créer un compte
          </h1>
          <p className="text-sm text-center mb-7" style={{ color: "var(--slate)" }}>
            Démarrez votre essai gratuit de 14 jours
          </p>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: "var(--slate-2)" }}>Prénom</label>
                <input type="text" placeholder="Jean" className="w-full text-sm px-4 py-3 rounded-xl outline-none" style={{ background: "var(--navy-3)", border: "1px solid var(--border-2)", color: "var(--white-fleet)" }} />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: "var(--slate-2)" }}>Nom</label>
                <input type="text" placeholder="Kouassi" className="w-full text-sm px-4 py-3 rounded-xl outline-none" style={{ background: "var(--navy-3)", border: "1px solid var(--border-2)", color: "var(--white-fleet)" }} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium mb-2" style={{ color: "var(--slate-2)" }}>Nom de l'entreprise</label>
              <input type="text" placeholder="Transport Kouassi SARL" className="w-full text-sm px-4 py-3 rounded-xl outline-none" style={{ background: "var(--navy-3)", border: "1px solid var(--border-2)", color: "var(--white-fleet)" }} />
            </div>
            <div>
              <label className="block text-xs font-medium mb-2" style={{ color: "var(--slate-2)" }}>Adresse email</label>
              <input type="email" placeholder="vous@entreprise.ci" className="w-full text-sm px-4 py-3 rounded-xl outline-none" style={{ background: "var(--navy-3)", border: "1px solid var(--border-2)", color: "var(--white-fleet)" }} />
            </div>
            <div>
              <label className="block text-xs font-medium mb-2" style={{ color: "var(--slate-2)" }}>Téléphone</label>
              <input type="tel" placeholder="+225 07 00 00 00" className="w-full text-sm px-4 py-3 rounded-xl outline-none" style={{ background: "var(--navy-3)", border: "1px solid var(--border-2)", color: "var(--white-fleet)" }} />
            </div>
            <div>
              <label className="block text-xs font-medium mb-2" style={{ color: "var(--slate-2)" }}>Mot de passe</label>
              <input type="password" placeholder="Minimum 8 caractères" className="w-full text-sm px-4 py-3 rounded-xl outline-none" style={{ background: "var(--navy-3)", border: "1px solid var(--border-2)", color: "var(--white-fleet)" }} />
            </div>
            <div>
              <label className="block text-xs font-medium mb-2" style={{ color: "var(--slate-2)" }}>Taille de la flotte</label>
              <select className="w-full text-sm px-4 py-3 rounded-xl outline-none" style={{ background: "var(--navy-3)", border: "1px solid var(--border-2)", color: "var(--white-fleet)" }}>
                <option>1 – 10 véhicules</option>
                <option>11 – 50 véhicules</option>
                <option>51 – 200 véhicules</option>
                <option>200+ véhicules</option>
              </select>
            </div>

            <Link
              href="/dashboard"
              className="w-full text-sm font-semibold text-white text-center py-3.5 rounded-xl mt-2 block no-underline hover:opacity-90"
              style={{ background: "var(--blue)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Créer mon compte gratuitement
            </Link>
          </div>

          <p className="text-xs text-center mt-5" style={{ color: "var(--slate)" }}>
            En créant un compte, vous acceptez nos{" "}
            <Link href="#" className="no-underline" style={{ color: "var(--blue-3)" }}>Conditions d'utilisation</Link>
            {" "}et notre{" "}
            <Link href="#" className="no-underline" style={{ color: "var(--blue-3)" }}>Politique de confidentialité</Link>
          </p>

          <p className="text-xs text-center mt-4" style={{ color: "var(--slate)" }}>
            Déjà un compte ?{" "}
            <Link href="/auth/login" className="no-underline" style={{ color: "var(--blue-3)" }}>Se connecter</Link>
          </p>
        </div>

        <p className="text-xs text-center mt-6">
          <Link href="/" className="no-underline" style={{ color: "var(--slate-2)" }}>
            ← Retour à l'accueil
          </Link>
        </p>
      </div>
    </div>
  );
}
