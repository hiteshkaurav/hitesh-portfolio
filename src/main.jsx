import React from "react";
import { createRoot } from "react-dom/client";
import {
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  ExternalLink,
  GraduationCap,
  Linkedin,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const certifications = [
  "AZ-305 Designing Microsoft Azure Infrastructure Solutions",
  "AZ-204 Developing Solutions for Microsoft Azure",
  "AZ-900 Microsoft Azure Fundamentals",
];

const strengths = [
  "Cloud solution design",
  "Enterprise IT delivery",
  "Azure platform development",
  "Infrastructure modernization",
  "Cross-functional collaboration",
  "Continuous learning",
];

const timeline = [
  {
    icon: BriefcaseBusiness,
    label: "Current Role",
    title: "Infosys",
    body: "IT professional contributing to enterprise technology programs and cloud-oriented delivery.",
  },
  {
    icon: GraduationCap,
    label: "Education",
    title: "Institute of Engineering & Technology",
    body: "Engineering education completed from 2011 to 2015.",
  },
  {
    icon: Award,
    label: "Recognition",
    title: "IBM Code Rally Winner",
    body: "Recognized by IBM in March 2015 for Code Rally achievement.",
  },
];

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <div className="heroBackdrop" aria-hidden="true" />
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="#top" aria-label="Hitesh Kaurav home">
            HK
          </a>
          <div className="navLinks">
            <a href="#expertise">Expertise</a>
            <a href="#credentials">Credentials</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroContent" id="top">
          <div className="heroText">
            <p className="eyebrow">
              <MapPin size={16} aria-hidden="true" />
              Bengaluru, Karnataka, India
            </p>
            <h1 id="page-title">Hitesh Kaurav</h1>
            <p className="heroLead">
              Results-driven IT professional with 10 years of experience across
              enterprise technology delivery, cloud platforms, and Azure-focused
              solution development.
            </p>
            <div className="heroActions">
              <a className="button primary" href="https://in.linkedin.com/in/hitesh-kaurav" target="_blank" rel="noreferrer">
                <Linkedin size={18} aria-hidden="true" />
                View LinkedIn
              </a>
              <a className="button secondary" href="#credentials">
                <ShieldCheck size={18} aria-hidden="true" />
                Credentials
              </a>
            </div>
          </div>

          <aside className="profilePanel" aria-label="Profile highlights">
            <div className="profileMark" aria-hidden="true">
              <Cloud size={34} />
            </div>
            <dl>
              <div>
                <dt>Experience</dt>
                <dd>10 years</dd>
              </div>
              <div>
                <dt>Organization</dt>
                <dd>Infosys</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Azure & enterprise IT</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="introBand" aria-label="Professional snapshot">
        <div className="sectionInner introGrid">
          <div>
            <p className="sectionKicker">Professional Snapshot</p>
            <h2>Cloud-ready technology delivery with a practical enterprise lens.</h2>
          </div>
          <p>
            Hitesh brings a steady, delivery-focused technology background with
            public credentials across Microsoft Azure infrastructure, solution
            development, and fundamentals. This portfolio keeps the public
            profile concise, verifiable, and ready to expand with project
            details when available.
          </p>
        </div>
      </section>

      <section className="sectionInner" id="expertise">
        <div className="sectionHeader">
          <p className="sectionKicker">Expertise</p>
          <h2>Areas of Strength</h2>
        </div>
        <div className="strengthGrid">
          {strengths.map((item) => (
            <article className="strengthCard" key={item}>
              <CheckCircle2 size={21} aria-hidden="true" />
              <span>{item}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="credentialsBand" id="credentials">
        <div className="sectionInner credentialsLayout">
          <div>
            <p className="sectionKicker">Credentials</p>
            <h2>Microsoft Azure certifications</h2>
            <p>
              Public LinkedIn profile information lists Azure credentials across
              architecture, development, and fundamentals.
            </p>
          </div>
          <div className="certList">
            {certifications.map((item) => (
              <article className="certCard" key={item}>
                <ShieldCheck size={22} aria-hidden="true" />
                <span>{item}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionInner">
        <div className="sectionHeader">
          <p className="sectionKicker">Background</p>
          <h2>Experience, Education, and Recognition</h2>
        </div>
        <div className="timeline">
          {timeline.map(({ icon: Icon, label, title, body }) => (
            <article className="timelineItem" key={label}>
              <div className="timelineIcon">
                <Icon size={22} aria-hidden="true" />
              </div>
              <div>
                <p>{label}</p>
                <h3>{title}</h3>
                <span>{body}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contactBand" id="contact">
        <div className="sectionInner contactLayout">
          <div>
            <p className="sectionKicker">Contact</p>
            <h2>Connect with Hitesh</h2>
            <p>
              For current role details, network updates, and professional
              contact, use the verified LinkedIn profile.
            </p>
          </div>
          <a className="button primary" href="https://in.linkedin.com/in/hitesh-kaurav" target="_blank" rel="noreferrer">
            <ExternalLink size={18} aria-hidden="true" />
            Open LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <span>Hitesh Kaurav</span>
        <span>Professional portfolio built from public profile information.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
