
import React from 'react';

// Local icons: no external icon-library imports needed.
function Glyph({ children, size = 16 }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontSize: size,
        lineHeight: 1,
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
}

const ArrowDownRight = (props) => <Glyph {...props}>↘</Glyph>;
const ArrowUpRight = (props) => <Glyph {...props}>↗</Glyph>;
const Github = (props) => <Glyph {...props}>GH</Glyph>;
const Linkedin = (props) => <Glyph {...props}>in</Glyph>;
const Mail = (props) => <Glyph {...props}>✉</Glyph>;
const MapPin = (props) => <Glyph {...props}>●</Glyph>;
const Menu = (props) => <Glyph {...props}>☰</Glyph>;
const Code2 = (props) => <Glyph {...props}>{'</>'}</Glyph>;
const Users = (props) => <Glyph {...props}>♧</Glyph>;
const Lightbulb = (props) => <Glyph {...props}>✦</Glyph>;
const Sparkles = (props) => <Glyph {...props}>✧</Glyph>;
const X = (props) => <Glyph {...props}>×</Glyph>;

const profile = {
  name: 'Zainab Abdul Qayoom',
  role: 'Computer Science Student · Developer · Community Builder',
  location: 'Jamshoro, Pakistan',
  email: 'gondalzainab34@gmail.com',
  github: 'https://github.com/zainab-abdul-qayoom',
  linkedin: 'https://www.linkedin.com/in/zainababdulqayoom',
};

const projects = [
  {
    number: '01',
    name: 'CampusLoop',
    type: 'Student Community Platform',
    description:
      'A student-focused platform concept for sharing skills, discovering campus gigs, and connecting students with opportunities.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'SQLite'],
    mark: 'CL',
    className: 'peach',
  },
  {
    number: '02',
    name: 'MUET Point Tracker',
    type: 'Campus Mobility',
    description:
      'A campus transport experience concept featuring routes, estimated arrival information, and service alerts.',
    stack: ['React', 'Node.js', 'SQLite', 'Leaflet', 'OpenStreetMap'],
    mark: '↗',
    className: 'lavender',
  },
  {
    number: '03',
    name: 'AI Notes Summarizer',
    type: 'AI / Productivity',
    description:
      'A tool designed to turn study notes into more digestible summaries using a language model API.',
    stack: ['Python', 'Streamlit', 'Groq API', 'Llama 3'],
    mark: '✳',
    className: 'lime',
  },
  {
    number: '04',
    name: 'Chez Gourmet Smart Canteen',
    type: 'Web Application',
    description:
      'A smart canteen ordering concept focused on QR-based ordering and smoother queue management.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    mark: 'CG',
    className: 'blue',
  },
  {
    number: '05',
    name: 'Harvard CS50x Expense Tracker',
    type: 'Learning Project',
    description:
      'A personal finance tracker built while practicing backend fundamentals, data persistence, and web application structure.',
    stack: ['Python', 'Flask', 'SQLite'],
    mark: '$',
    className: 'yellow',
  },
  {
    number: '06',
    name: 'PyFlow Code-to-Flowchart',
    type: 'AI / Developer Tools',
    description:
      'An AI-assisted concept exploring how code can be represented as a visual flowchart to support understanding.',
    stack: ['Python', 'AI APIs', 'Prompt Engineering'],
    mark: '⌘',
    className: 'pink',
  },
];

const experiences = [
  {
    date: 'AUG 2026 — PRESENT',
    role: 'Director of Technical Operations',
    org: 'CS Tech Club · MUET',
    text: 'Support event delivery through technical setup, logistics, coordination with speakers and volunteers, and on-the-day execution.',
    tag: 'TECH LEADERSHIP',
  },
  {
    date: 'APR 2026 — PRESENT',
    role: 'PEF MUET Ambassador',
    org: 'PEF · MUET',
    text: 'Promote student opportunities and help connect engineering students with entrepreneurship and professional development.',
    tag: 'STUDENT OUTREACH',
  },
  {
    date: 'JUN 2026 — PRESENT',
    role: 'ICSC Ambassador',
    org: 'Remote',
    text: 'Support awareness, outreach, and community building around student competitions and learning opportunities.',
    tag: 'COMMUNITY',
  },
  {
    date: 'APR 2026 — PRESENT',
    role: 'Departmental Ambassador',
    org: 'Women Wheel’z',
    text: 'Contribute to representation and outreach initiatives through a student-focused ambassador program.',
    tag: 'ADVOCACY',
  },
  {
    date: 'JUL — AUG 2026',
    role: 'Web Developer Intern',
    org: 'ORBIT-I',
    text: 'Worked on EventoraX using React, TypeScript, Vite, and Tailwind CSS; built reusable UI components and form validation, and collaborated through Git/GitHub.',
    tag: 'WEB DEVELOPMENT',
  },
  {
    date: 'JUN — AUG 2026',
    role: 'Creative Design & Marketing Associate',
    org: 'SkillTech · Volunteer',
    text: 'Created event posters, certificates, volunteer cards, and promotional materials to support community initiatives.',
    tag: 'CREATIVE COMMUNICATION',
  },
];

const awards = [
  [
    '01',
    'Top Performer',
    'NCEAC–HEC Generative AI Application Developer Program',
    '2026',
  ],
  [
    '02',
    'Best Performer — Entrepreneurship',
    'D3 Digital Dream Dynamo · Entrepreneurship Blueprint Training',
    '2026',
  ],
  [
    '03',
    '1st Place — E-poster Competition',
    'Strategic Youth Paradigm · NUMS',
    '2026',
  ],
  [
    '04',
    'Certificate of Recognition',
    'IEEE Smart Cities & IEEE ComSoc event hosting',
    '2026',
  ],
];

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span className="label-dot" />
      {children}
    </div>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);

  const links = [
    ['About', '#about'],
    ['Work', '#work'],
    ['Experience', '#experience'],
    ['Recognition', '#recognition'],
  ];

  return (
    <header className="header">
      <a className="wordmark" href="#home" aria-label="Go to top">
        ZA<span>.</span>
      </a>

      <nav className={open ? 'nav nav-open' : 'nav'}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function App() {
  return (
    <div id="home" className="site-shell">
      <Header />

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse" />
              OPEN TO LEARNING &amp; COLLABORATION
            </div>

            <h1>
              Building with
              <br />
              <span>curiosity.</span>
              <br />
              Leading with purpose.
            </h1>

            <p className="hero-intro">
              I’m <strong>Zainab Abdul Qayoom</strong> — a Computer Science
              student exploring the intersection of technology, creativity,
              and student community building.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="text-link" href="#contact">
                Get in touch <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <MapPin size={14} />
                {profile.location}
              </span>
              <span className="meta-divider" />
              <span>MUET · Class of 2029</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract portfolio illustration">
            <div className="art-topline">
              <span>PERSONAL PORTFOLIO</span>
              <span>2026 — 2029</span>
            </div>
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-sun" />
            <div className="art-star">✳</div>
            <div className="art-card card-code">
              <Code2 size={17} />
              <span>build / learn / repeat</span>
            </div>
            <div className="art-card card-community">
              <Users size={17} />
              <span>people first</span>
            </div>
            <div className="art-monogram">
              Z<span>A</span>
            </div>
            <div className="art-bottomline">
              <span>TECH + PEOPLE</span>
              <span>01 / 04</span>
            </div>
          </div>

          <div className="hero-side-note">
            DESIGNING MY NEXT CHAPTER <span>↘</span>
          </div>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="container about-grid">
            <div>
              <SectionLabel>01 / A LITTLE ABOUT ME</SectionLabel>
              <h2>
                Curious by nature.
                <br />
                <em>Community-minded</em>
                <br />
                by choice.
              </h2>
            </div>

            <div className="about-body">
              <p className="lead">
                I’m studying Computer Science at Mehran University of
                Engineering and Technology (MUET), where I’m learning to turn
                ideas into useful digital experiences.
              </p>

              <p>
                Beyond code, I enjoy bringing people together around learning,
                entrepreneurship, and technology. Through student clubs,
                ambassador initiatives, volunteering, and event support, I’m
                building the communication and leadership skills that help
                good ideas reach more people.
              </p>

              <div className="values-grid">
                <div className="value-card">
                  <span className="value-icon">
                    <Code2 size={19} />
                  </span>
                  <b>Build</b>
                  <small>Thoughtful digital experiences</small>
                </div>

                <div className="value-card">
                  <span className="value-icon">
                    <Users size={19} />
                  </span>
                  <b>Connect</b>
                  <small>People, ideas, opportunities</small>
                </div>

                <div className="value-card">
                  <span className="value-icon">
                    <Lightbulb size={19} />
                  </span>
                  <b>Explore</b>
                  <small>New tools and possibilities</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="work-section section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <SectionLabel>02 / SELECTED PROJECTS</SectionLabel>
                <h2>
                  Things I’ve been
                  <br />
                  <em>working on.</em>
                </h2>
              </div>
              <p>
                A growing collection of projects, experiments, and ideas.
                Project links can be added as repositories and live demos are
                published.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((p) => (
                <article className="project-card" key={p.number}>
                  <div className={`project-visual ${p.className}`}>
                    <span className="project-number">
                      {p.number} / PROJECT
                    </span>
                    <div className="project-mark">{p.mark}</div>
                    <span className="project-type">{p.type}</span>
                  </div>

                  <div className="project-info">
                    <div className="project-title-row">
                      <h3>{p.name}</h3>
                      <span className="project-arrow">
                        <ArrowUpRight size={17} />
                      </span>
                    </div>
                    <p>{p.description}</p>
                    <div className="stack">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="work-footnote">
              <Sparkles size={16} />
              More experiments are in progress. Visit my GitHub to follow along.
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section section-pad">
          <div className="container">
            <div className="section-heading experience-heading">
              <div>
                <SectionLabel>03 / EXPERIENCE</SectionLabel>
                <h2>
                  Learning by
                  <br />
                  <em>showing up.</em>
                </h2>
              </div>
              <p>
                Leadership, volunteering, and development experiences that keep
                me learning beyond the classroom.
              </p>
            </div>

            <div className="experience-list">
              {experiences.map((e, i) => (
                <article className="experience-item" key={e.role}>
                  <div className="experience-index">0{i + 1}</div>
                  <div className="experience-main">
                    <div className="experience-date">{e.date}</div>
                    <h3>{e.role}</h3>
                    <div className="experience-org">{e.org}</div>
                    <p>{e.text}</p>
                  </div>
                  <div className="experience-tag">{e.tag}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="recognition" className="recognition-section section-pad">
          <div className="container recognition-grid">
            <div>
              <SectionLabel>04 / RECOGNITION</SectionLabel>
              <h2>
                Small wins.
                <br />
                <em>Big motivation.</em>
              </h2>
              <p className="recognition-intro">
                A few milestones that encourage me to keep learning,
                contributing, and taking on new challenges.
              </p>
            </div>

            <div className="awards-list">
              {awards.map(([n, title, org, year]) => (
                <div className="award-row" key={n}>
                  <span className="award-no">{n}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{org}</p>
                  </div>
                  <span className="award-year">{year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="container skills-inner">
            <span className="skills-label">CURRENT TOOLKIT</span>
            <div className="skill-chips">
              {[
                'JavaScript',
                'React',
                'Python',
                'C++',
                'Java',
                'HTML & CSS',
                'Node.js',
                'Flask',
                'SQL / SQLite',
                'Git & GitHub',
                'Streamlit',
                'AI APIs',
                'Figma / Canva',
                'Photoshop',
              ].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="container contact-box">
            <div className="contact-orbit">✳</div>
            <SectionLabel>05 / WHAT’S NEXT?</SectionLabel>
            <h2>
              Have an idea?
              <br />
              <em>Let’s make it happen.</em>
            </h2>
            <p>
              I’m always happy to connect with people who care about
              technology, student opportunities, and meaningful community
              projects.
            </p>

            <a
              className="button button-dark contact-button"
              href={`mailto:${profile.email}`}
            >
              Say hello <Mail size={17} />
            </a>

            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ArrowUpRight size={13} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} />
              </a>
              <a href={`mailto:${profile.email}`}>
                <Mail size={17} /> Email <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="wordmark" href="#home">
            ZA<span>.</span>
          </a>
          <span>Made with curiosity, in Pakistan.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
