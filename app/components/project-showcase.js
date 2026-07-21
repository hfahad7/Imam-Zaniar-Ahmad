import Image from 'next/image';

import { siteContent } from '../../lib/site-content';

export default function ProjectShowcase({ compact = false }) {
  return (
    <div className={`project-showcase${compact ? ' project-showcase--compact' : ''}`}>
      {siteContent.projects.map((project, index) => (
        <article
          key={project.name}
          className={`project-story project-story--${project.slug}`}
        >
          <div className="project-story__visual">
            <Image
              src={project.image}
              alt={`${project.name} logo`}
              width={project.imageWidth}
              height={project.imageHeight}
              sizes="(max-width: 820px) 72vw, 24vw"
              className="project-logo"
              unoptimized
            />
          </div>

          <div className="project-story__copy">
            <div className="project-story__meta">
              <span>0{index + 1}</span>
              <p>{project.role} &middot; {project.domain}</p>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.href} target="_blank" rel="noreferrer noopener">
              {project.linkText} <span aria-hidden="true">&nearr;</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
