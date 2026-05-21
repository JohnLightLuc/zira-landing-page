import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — ZIRA",
  description:
    "Consultez les Conditions Générales d'Utilisation de la plateforme ZIRA, système de gestion de flotte avec géolocalisation GPS.",
};

const articles = [
  { id: "definitions", num: 1, title: "Définitions" },
  { id: "objet", num: 2, title: "Objet de la plateforme" },
  { id: "acces", num: 3, title: "Accès et création de compte" },
  { id: "obligations", num: 4, title: "Obligations et responsabilités des utilisateurs" },
  { id: "donnees", num: 5, title: "Protection des données personnelles" },
  { id: "propriete", num: 6, title: "Propriété intellectuelle" },
  { id: "disponibilite", num: 7, title: "Disponibilité et qualité du service" },
  { id: "securite", num: 8, title: "Sécurité" },
  { id: "tarification", num: 9, title: "Tarification et abonnements" },
  { id: "resiliation", num: 10, title: "Résiliation et suspension" },
  { id: "modifications", num: 11, title: "Modifications des CGU" },
  { id: "droit", num: 12, title: "Droit applicable et règlement des litiges" },
  { id: "divers", num: 13, title: "Dispositions diverses" },
];

function Section({ id, number, title, children }: { id: string; number: number; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-xs font-bold px-2 py-1 rounded-lg shrink-0"
          style={{ background: "rgba(26,110,245,0.15)", color: "var(--blue-3)", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Art. {number}
        </span>
        <h2
          className="text-base font-bold"
          style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "var(--slate-2)" }}>
        {children}
      </div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-semibold mb-1.5" style={{ color: "var(--white-2)", fontFamily: "'Space Grotesk', sans-serif" }}>
        {title}
      </p>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--blue-3)" }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return <hr className="my-8" style={{ borderColor: "var(--border)" }} />;
}

export default function CguPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--navy)" }}>
      {/* Top bar */}
      <div
        className="sticky top-0 z-10 border-b px-6 py-4"
        style={{ background: "rgba(5,14,31,0.9)", backdropFilter: "blur(12px)", borderColor: "var(--border)" }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "var(--blue)" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <span className="font-bold text-sm" style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}>
              ZIRA
            </span>
          </Link>
          <span className="text-xs" style={{ color: "var(--slate)" }}>
            CGU — Version 1.0 · Mai 2025
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 flex gap-10">
        {/* Sidebar table of contents */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-20">
            <p
              className="text-xs font-semibold mb-3 uppercase tracking-widest"
              style={{ color: "var(--slate)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Sommaire
            </p>
            <nav className="flex flex-col gap-1">
              <a
                href="#preambule"
                className="text-xs py-1.5 px-2 rounded-lg no-underline transition-colors hover:opacity-80"
                style={{ color: "var(--slate)" }}
              >
                Préambule
              </a>
              {articles.map((a) => (
                <a
                  key={a.id}
                  href={`#${a.id}`}
                  className="text-xs py-1.5 px-2 rounded-lg no-underline transition-colors hover:opacity-80"
                  style={{ color: "var(--slate)" }}
                >
                  <span style={{ color: "var(--blue-3)" }}>Art. {a.num}</span> — {a.title}
                </a>
              ))}
              <a
                href="#contact"
                className="text-xs py-1.5 px-2 rounded-lg no-underline transition-colors hover:opacity-80"
                style={{ color: "var(--slate)" }}
              >
                Contact
              </a>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Header */}
          <div className="mb-10">
            <div
              className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(26,110,245,0.1)", border: "1px solid rgba(26,110,245,0.25)", color: "var(--blue-3)" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Document légal officiel
            </div>
            <h1
              className="text-3xl font-bold mb-3"
              style={{ color: "var(--white-fleet)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Conditions Générales<br />d'Utilisation
            </h1>
            <div className="flex flex-wrap gap-4 text-xs" style={{ color: "var(--slate)" }}>
              <span>Version 1.0</span>
              <span style={{ color: "var(--border-2)" }}>·</span>
              <span>Mai 2025</span>
              <span style={{ color: "var(--border-2)" }}>·</span>
              <span>Dernière mise à jour : 21 mai 2025</span>
            </div>
          </div>

          {/* Préambule */}
          <section id="preambule" className="scroll-mt-8 mb-8">
            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--navy-2)", border: "1px solid var(--border)" }}
            >
              <h2
                className="text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--cyan)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Préambule
              </h2>
              <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "var(--slate-2)" }}>
                <p>
                  Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'accès et
                  l'utilisation de la plateforme ZIRA, éditée par la société ZIRA SAS (ci-après « l'Éditeur »),
                  accessible via application mobile et interface web.
                </p>
                <p>
                  En accédant à la plateforme ZIRA, en créant un compte ou en utilisant l'un de ses services,
                  l'utilisateur reconnaît avoir lu, compris et accepté sans réserve l'intégralité des présentes CGU.
                  Si l'utilisateur n'accepte pas ces conditions, il lui est demandé de ne pas utiliser la plateforme.
                </p>
              </div>
            </div>
          </section>

          <Divider />

          {/* Article 1 */}
          <Section id="definitions" number={1} title="Définitions">
            <p>Pour l'application des présentes CGU, les termes ci-dessous ont la signification suivante :</p>
            <BulletList items={[
              "« Plateforme » : l'ensemble des services numériques ZIRA, comprenant l'application mobile et l'interface web d'administration.",
              "« Éditeur » : la société ZIRA SAS, responsable du développement, de l'hébergement et de la maintenance de la plateforme.",
              "« Utilisateur » : toute personne physique ou morale accédant à la plateforme, qu'il s'agisse d'un Propriétaire de flotte, d'un Gestionnaire, d'un Chauffeur ou d'un Observateur.",
              "« Propriétaire de flotte » : l'utilisateur titulaire d'un compte principal, responsable de la gestion de sa flotte de véhicules et des accès accordés à ses collaborateurs.",
              "« Chauffeur » : l'utilisateur opérationnel affecté à un ou plusieurs véhicules de la flotte.",
              "« Dispositif GPS / Traceur » : équipement matériel permettant la transmission des données de géolocalisation d'un véhicule vers la plateforme.",
              "« Données personnelles » : toute information permettant d'identifier directement ou indirectement une personne physique, au sens du Règlement Général sur la Protection des Données (RGPD).",
              "« Contenu » : l'ensemble des données, documents, images, informations renseignées ou téléversées par les utilisateurs sur la plateforme.",
            ]} />
          </Section>

          <Divider />

          {/* Article 2 */}
          <Section id="objet" number={2} title="Objet de la plateforme">
            <p>
              ZIRA est une solution de gestion de flotte de véhicules intégrant la géolocalisation GPS en temps
              réel. La plateforme offre notamment les fonctionnalités suivantes :
            </p>
            <BulletList items={[
              "Gestion des véhicules (fiches, documents, statuts, alertes d'expiration)",
              "Gestion des chauffeurs (profils, documents, affectations)",
              "Association chauffeur ↔ véhicule avec historisation des affectations",
              "Suivi GPS en temps réel : position, vitesse, direction, état moteur",
              "Historique des déplacements et relecture des trajets",
              "Tableaux de bord et rapports d'activité (PDF, Excel, CSV)",
              "Alertes et notifications (excès de vitesse, geofencing, expiration documents, déconnexion GPS)",
            ]} />
            <p>
              ZIRA est destinée exclusivement à un usage professionnel de gestion et de supervision de flottes
              de véhicules.
            </p>
          </Section>

          <Divider />

          {/* Article 3 */}
          <Section id="acces" number={3} title="Accès et création de compte">
            <SubSection title="3.1 Création de compte">
              <p>
                L'accès aux services de ZIRA est conditionné à la création d'un compte utilisateur. Le Propriétaire
                de flotte s'enregistre en fournissant des informations exactes, complètes et à jour. Il est seul
                responsable de l'exactitude des données renseignées.
              </p>
              <p>
                Le Propriétaire de flotte peut créer des sous-comptes avec différents niveaux de droits :
                Administrateur, Gestionnaire ou Observateur.
              </p>
            </SubSection>
            <SubSection title="3.2 Identifiants et sécurité">
              <p>
                Chaque utilisateur est responsable de la confidentialité de ses identifiants de connexion.
                Il s'engage à :
              </p>
              <BulletList items={[
                "Ne pas divulguer ses identifiants à des tiers non autorisés",
                "Utiliser un mot de passe robuste et le modifier régulièrement",
                "Notifier immédiatement l'Éditeur de toute utilisation non autorisée de son compte",
              ]} />
              <p>
                La plateforme utilise une authentification sécurisée par JWT/OAuth2 et un chiffrement des
                communications via TLS.
              </p>
            </SubSection>
            <SubSection title="3.3 Conditions d'accès">
              <p>
                L'utilisation de la plateforme est réservée aux personnes majeures (18 ans ou plus) ou, pour les
                personnes morales, à leurs représentants légaux habilités. L'Éditeur se réserve le droit de refuser
                ou de suspendre tout accès en cas de violation des présentes CGU.
              </p>
            </SubSection>
          </Section>

          <Divider />

          {/* Article 4 */}
          <Section id="obligations" number={4} title="Obligations et responsabilités des utilisateurs">
            <SubSection title="4.1 Usage loyal et licite">
              <p>
                L'utilisateur s'engage à utiliser la plateforme ZIRA de manière conforme aux lois et réglementations
                en vigueur, ainsi qu'aux présentes CGU. Il est notamment interdit de :
              </p>
              <BulletList items={[
                "Utiliser la plateforme à des fins de surveillance abusive, discriminatoire ou contraire à la dignité des personnes",
                "Tenter de contourner les mesures de sécurité ou d'accéder à des données appartenant à d'autres propriétaires de flotte",
                "Introduire des virus, logiciels malveillants ou tout code de nature à porter atteinte à la plateforme",
                "Effectuer de la rétro-ingénierie ou toute tentative de décompilation de la plateforme",
                "Revendre ou sous-licencier l'accès à la plateforme sans autorisation écrite préalable de l'Éditeur",
              ]} />
            </SubSection>
            <SubSection title="4.2 Géolocalisation et surveillance des chauffeurs">
              <p>
                Le Propriétaire de flotte s'engage à informer les chauffeurs de la mise en place du système de
                géolocalisation, conformément aux obligations légales applicables (notamment la réglementation
                relative à la protection des données personnelles des salariés). L'utilisation du système de
                tracking GPS est strictement limitée à des fins de gestion de flotte et de sécurité routière.
              </p>
            </SubSection>
            <SubSection title="4.3 Exactitude des données">
              <p>
                L'utilisateur est responsable de l'exactitude et de la mise à jour des informations saisies (données
                véhicules, données chauffeurs, documents). ZIRA ne peut être tenu responsable des conséquences liées
                à des données inexactes ou obsolètes renseignées par l'utilisateur.
              </p>
            </SubSection>
          </Section>

          <Divider />

          {/* Article 5 */}
          <Section id="donnees" number={5} title="Protection des données personnelles">
            <SubSection title="5.1 Responsable de traitement">
              <p>
                Dans le cadre de l'utilisation de la plateforme, l'Éditeur agit en tant que responsable de
                traitement pour les données collectées directement auprès des utilisateurs (données de compte,
                logs de connexion). Le Propriétaire de flotte agit en tant que responsable de traitement pour
                les données relatives à ses chauffeurs et véhicules, l'Éditeur intervenant comme sous-traitant.
              </p>
            </SubSection>
            <SubSection title="5.2 Données collectées">
              <p>La plateforme collecte et traite notamment les catégories de données suivantes :</p>
              <BulletList items={[
                "Données d'identification : nom, prénom, adresse e-mail, numéro de téléphone, photo",
                "Données professionnelles : numéro de permis de conduire, pièce d'identité, contrat de travail",
                "Données de géolocalisation : positions GPS, vitesses, trajets, historiques de déplacements",
                "Données techniques : logs de connexion, adresses IP, données d'utilisation",
                "Documents téléversés : carte grise, assurance, visite technique",
              ]} />
            </SubSection>
            <SubSection title="5.3 Finalités des traitements">
              <p>Les données sont traitées aux fins suivantes :</p>
              <BulletList items={[
                "Gestion de la flotte de véhicules et des affectations chauffeurs",
                "Suivi GPS en temps réel et historisation des trajets",
                "Génération de rapports d'activité et de tableaux de bord",
                "Envoi de notifications et alertes opérationnelles",
                "Amélioration de la sécurité et prévention des utilisations frauduleuses",
                "Respect des obligations légales et réglementaires",
              ]} />
            </SubSection>
            <SubSection title="5.4 Droits des personnes concernées">
              <p>
                Conformément au RGPD, chaque personne concernée dispose des droits suivants : accès, rectification,
                effacement, limitation du traitement, portabilité et opposition. Ces droits peuvent être exercés
                en contactant l'Éditeur à l'adresse :{" "}
                <a href="mailto:privacy@zira-app.com" style={{ color: "var(--blue-3)" }}>
                  privacy@zira-app.com
                </a>.
              </p>
            </SubSection>
            <SubSection title="5.5 Conservation des données">
              <p>
                Les données sont conservées pour la durée nécessaire à l'accomplissement des finalités pour
                lesquelles elles ont été collectées, augmentée des délais légaux de prescription. Les données
                de géolocalisation sont conservées pour une durée maximale de{" "}
                <span style={{ color: "var(--white-fleet)" }}>12 mois</span>.
              </p>
            </SubSection>
          </Section>

          <Divider />

          {/* Article 6 */}
          <Section id="propriete" number={6} title="Propriété intellectuelle">
            <p>
              L'ensemble des éléments constitutifs de la plateforme ZIRA — architecture, code source, design,
              interfaces, logos, marques, bases de données — sont la propriété exclusive de l'Éditeur ou de ses
              partenaires, et sont protégés par les lois applicables en matière de propriété intellectuelle.
            </p>
            <p>
              L'utilisateur bénéficie d'une licence d'utilisation non exclusive, non transférable et révocable,
              strictement limitée à l'usage personnel et professionnel de la plateforme dans le cadre des présentes
              CGU. Toute reproduction, représentation, modification ou exploitation non autorisée est formellement
              interdite.
            </p>
            <p>
              Les données et contenus renseignés par l'utilisateur restent sa propriété. En les téléversant sur
              la plateforme, il accorde à l'Éditeur une licence limitée permettant leur traitement dans le cadre
              de la fourniture du service.
            </p>
          </Section>

          <Divider />

          {/* Article 7 */}
          <Section id="disponibilite" number={7} title="Disponibilité et qualité du service">
            <SubSection title="7.1 Engagement de disponibilité">
              <p>
                L'Éditeur s'engage à mettre tout en œuvre pour assurer une disponibilité de la plateforme de{" "}
                <span style={{ color: "var(--white-fleet)" }}>99,9 %</span> (hors maintenances planifiées). La
                plateforme est conçue pour supporter un minimum de{" "}
                <span style={{ color: "var(--white-fleet)" }}>10 000 véhicules simultanés</span> avec une mise à
                jour des positions GPS inférieure ou égale à{" "}
                <span style={{ color: "var(--white-fleet)" }}>5 secondes</span>.
              </p>
            </SubSection>
            <SubSection title="7.2 Maintenances">
              <p>
                Des interventions de maintenance peuvent être réalisées, de préférence en dehors des heures de
                forte utilisation. L'Éditeur s'efforce d'informer les utilisateurs à l'avance de toute maintenance
                programmée susceptible d'affecter la disponibilité du service.
              </p>
            </SubSection>
            <SubSection title="7.3 Limitation de responsabilité">
              <p>
                L'Éditeur ne saurait être tenu responsable des interruptions de service dues à des causes extérieures
                (pannes réseau, défaillances des fournisseurs GPS, cas de force majeure). La plateforme est fournie
                « en l'état » et l'Éditeur ne garantit pas qu'elle sera exempte d'erreurs ou d'interruptions.
              </p>
            </SubSection>
          </Section>

          <Divider />

          {/* Article 8 */}
          <Section id="securite" number={8} title="Sécurité">
            <p>
              L'Éditeur met en œuvre les mesures de sécurité techniques et organisationnelles appropriées pour
              protéger les données contre toute perte, accès non autorisé, divulgation ou destruction. Ces mesures
              comprennent notamment :
            </p>
            <BulletList items={[
              "Authentification sécurisée par JWT / OAuth2",
              "Chiffrement des communications via TLS",
              "Isolation des données par propriétaire de flotte",
              "Journalisation des actions et audit de sécurité",
              "Sauvegardes automatiques régulières",
              "Infrastructure cloud avec haute disponibilité (Kubernetes, AWS/Azure/GCP)",
            ]} />
            <p>
              En cas de violation de données à caractère personnel, l'Éditeur s'engage à notifier les autorités
              compétentes et les utilisateurs concernés dans les délais prévus par la réglementation applicable.
            </p>
          </Section>

          <Divider />

          {/* Article 9 */}
          <Section id="tarification" number={9} title="Tarification et abonnements">
            <p>
              L'accès à la plateforme ZIRA est soumis à des conditions tarifaires définies dans les contrats
              commerciaux conclus entre l'Éditeur et les Propriétaires de flotte. Les modalités d'abonnement,
              de facturation et de résiliation sont précisées dans les Conditions Particulières applicables à
              chaque contrat.
            </p>
            <p>
              L'Éditeur se réserve le droit de modifier ses tarifs avec un préavis raisonnable. En cas de refus
              des nouveaux tarifs, l'utilisateur dispose de la faculté de résilier son abonnement.
            </p>
          </Section>

          <Divider />

          {/* Article 10 */}
          <Section id="resiliation" number={10} title="Résiliation et suspension">
            <SubSection title="10.1 Résiliation par l'utilisateur">
              <p>
                Le Propriétaire de flotte peut résilier son compte à tout moment en contactant le service client
                de l'Éditeur. La résiliation prend effet à l'issue de la période d'abonnement en cours. Les données
                sont conservées pendant{" "}
                <span style={{ color: "var(--white-fleet)" }}>30 jours</span> après résiliation, puis supprimées
                définitivement, sauf obligation légale contraire.
              </p>
            </SubSection>
            <SubSection title="10.2 Suspension ou résiliation par l'Éditeur">
              <p>
                L'Éditeur se réserve le droit de suspendre ou de résilier l'accès d'un utilisateur en cas de :
              </p>
              <BulletList items={[
                "Violation des présentes CGU",
                "Non-paiement des sommes dues",
                "Utilisation frauduleuse ou abusive de la plateforme",
                "Comportement susceptible de nuire à l'intégrité de la plateforme ou aux droits de tiers",
              ]} />
              <p>
                En cas de suspension, l'Éditeur notifiera l'utilisateur et lui accordera, sauf urgence, un délai
                raisonnable pour remédier au manquement constaté.
              </p>
            </SubSection>
          </Section>

          <Divider />

          {/* Article 11 */}
          <Section id="modifications" number={11} title="Modifications des CGU">
            <p>
              L'Éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs sont
              informés des modifications par e-mail ou notification in-app au moins{" "}
              <span style={{ color: "var(--white-fleet)" }}>15 jours</span> avant leur entrée en vigueur. La
              poursuite de l'utilisation de la plateforme après cette période vaut acceptation des nouvelles CGU.
            </p>
            <p>
              En cas de désaccord avec les modifications, l'utilisateur peut résilier son compte dans les conditions
              prévues à l'article 10.
            </p>
          </Section>

          <Divider />

          {/* Article 12 */}
          <Section id="droit" number={12} title="Droit applicable et règlement des litiges">
            <SubSection title="12.1 Droit applicable">
              <p>
                Les présentes CGU sont régies par le droit applicable dans le pays d'établissement de l'Éditeur,
                sans préjudice des dispositions impératives du pays de résidence de l'utilisateur lorsque celui-ci
                est un consommateur.
              </p>
            </SubSection>
            <SubSection title="12.2 Médiation et règlement amiable">
              <p>
                En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours
                contentieux. L'utilisateur peut adresser sa réclamation au service client :{" "}
                <a href="mailto:support@zira-app.com" style={{ color: "var(--blue-3)" }}>
                  support@zira-app.com
                </a>. À défaut de résolution amiable dans un délai de{" "}
                <span style={{ color: "var(--white-fleet)" }}>30 jours</span>, les parties pourront recourir à
                une procédure de médiation.
              </p>
            </SubSection>
            <SubSection title="12.3 Juridiction compétente">
              <p>
                À défaut de résolution amiable, tout litige relatif à l'interprétation ou à l'exécution des
                présentes CGU sera soumis aux juridictions compétentes conformément aux règles de droit applicable.
              </p>
            </SubSection>
          </Section>

          <Divider />

          {/* Article 13 */}
          <Section id="divers" number={13} title="Dispositions diverses">
            <SubSection title="13.1 Intégralité de l'accord">
              <p>
                Les présentes CGU, ainsi que les Conditions Particulières et la Politique de Confidentialité,
                constituent l'intégralité de l'accord entre l'utilisateur et l'Éditeur concernant l'utilisation
                de la plateforme ZIRA.
              </p>
            </SubSection>
            <SubSection title="13.2 Nullité partielle">
              <p>
                Si l'une des clauses des présentes CGU était déclarée nulle ou inapplicable, les autres clauses
                demeureront pleinement en vigueur et applicables.
              </p>
            </SubSection>
            <SubSection title="13.3 Non-renonciation">
              <p>
                Le fait pour l'Éditeur de ne pas se prévaloir d'un manquement de l'utilisateur à l'une quelconque
                des obligations des présentes CGU ne saurait être interprété comme une renonciation à se prévaloir
                d'un tel manquement à l'avenir.
              </p>
            </SubSection>
          </Section>

          <Divider />

          {/* Contact */}
          <section id="contact" className="scroll-mt-8">
            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--navy-2)", border: "1px solid var(--border)" }}
            >
              <h2
                className="text-sm font-bold uppercase tracking-widest mb-5"
                style={{ color: "var(--cyan)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Contact
              </h2>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: "var(--slate-2)" }}>
                Pour toute question relative aux présentes CGU ou à l'utilisation de la plateforme ZIRA,
                l'utilisateur peut contacter l'Éditeur aux coordonnées suivantes :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Email général", value: "contact@zira-app.com", href: "mailto:contact@zira-app.com" },
                  { label: "Support technique", value: "support@zira-app.com", href: "mailto:support@zira-app.com" },
                  { label: "Données personnelles", value: "privacy@zira-app.com", href: "mailto:privacy@zira-app.com" },
                  { label: "Site web", value: "www.zira-app.com", href: "#" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 px-4 py-3 rounded-xl"
                    style={{ background: "var(--navy-3)", border: "1px solid var(--border)" }}
                  >
                    <span className="text-xs" style={{ color: "var(--slate)" }}>{item.label}</span>
                    <a
                      href={item.href}
                      className="text-sm font-medium no-underline hover:opacity-80 transition-opacity"
                      style={{ color: "var(--blue-3)", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-12 pt-6 flex items-center justify-between text-xs" style={{ borderTop: "1px solid var(--border)", color: "var(--slate)" }}>
            <span>© 2025 ZIRA — Tous droits réservés</span>
            <Link href="/" className="no-underline hover:opacity-80 transition-opacity" style={{ color: "var(--slate-2)" }}>
              ← Retour à l'accueil
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
