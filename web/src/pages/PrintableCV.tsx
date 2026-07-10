import { Link } from "react-router-dom";
import { LuArrowLeft, LuPrinter } from "react-icons/lu";
import { education, experience, languages, profile, projects, skillCategories } from "../data/cv";
import "./printable-cv.css";

export default function PrintableCV() {
  return (
    <div>
      <div className="pcv-toolbar">
        <button onClick={() => window.print()}>
          <LuPrinter size={15} /> Imprimir / Guardar como PDF
        </button>
        <Link to="/">
          <LuArrowLeft size={15} /> Volver al sitio
        </Link>
      </div>

      <div className="pcv-page">
        <div className="pcv-header">
          <div>
            <h1>{profile.name}</h1>
            <div className="pcv-subtitle">{profile.roles.join("  |  ")}</div>
          </div>
          <div className="pcv-contact">
            {profile.location}
            <br />
            {profile.phone}
            <br />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <br />
            <a href={profile.github} target="_blank" rel="noreferrer">
              {profile.githubLabel}
            </a>
            <br />
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedinLabel}
            </a>
          </div>
        </div>

        <div className="pcv-section-title">Perfil Profesional</div>
        <div className="pcv-perfil">
          <p>{profile.summary}</p>
        </div>

        <div className="pcv-section-title">Experiencia Laboral</div>
        {experience.map((job, i) => (
          <div key={job.title + job.period}>
            <div className="pcv-job">
              <div className="pcv-job-header">
                <span className="pcv-job-title">{job.title}</span>
                <span className="pcv-job-period">{job.period}</span>
              </div>
              <div className="pcv-job-company">{job.company}</div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="pcv-tags">
                {job.tags.map((tag) => (
                  <span key={tag} className="pcv-tag">
                    {tag}
                  </span>
                ))}
              </div>
              {job.caseStudySlug && (
                <p style={{ marginTop: 4, fontSize: 9.5, fontStyle: "italic", color: "#1565c0" }}>
                  Caso de estudio completo: cv-jose-espinoza.vercel.app/case/{job.caseStudySlug}
                </p>
              )}
            </div>
            {i < experience.length - 1 && <hr className="pcv-divider" />}
          </div>
        ))}

        <div className="pcv-section-title">Proyectos Destacados</div>
        {projects.map((project, i) => (
          <div key={project.title}>
            <div className="pcv-project">
              <div className="pcv-project-title">{project.title}</div>
              {project.description && <p>{project.description}</p>}
              {project.points && (
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              <div className="pcv-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="pcv-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {i < projects.length - 1 && <hr className="pcv-divider" />}
          </div>
        ))}

        <div className="pcv-section-title">Conocimientos Técnicos</div>
        <div className="pcv-skills-grid">
          {skillCategories.map((cat) => (
            <div className="pcv-skill-block" key={cat.label}>
              <div className="pcv-skill-label">{cat.label}</div>
              <p>{cat.items.join(", ")}</p>
            </div>
          ))}
        </div>

        <div className="pcv-section-title">Formación &amp; Idiomas</div>
        <div className="pcv-bottom-grid">
          <div>
            {education.map((item) => (
              <div className="pcv-edu-item" key={item.title}>
                <strong>{item.title}</strong>
                {item.institution} &middot; {item.period}
              </div>
            ))}
          </div>
          <div>
            {languages.map((lang) => (
              <div className="pcv-lang-item" key={lang.language}>
                <strong>{lang.language}:</strong> {lang.level}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
