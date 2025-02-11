import { projectSchema } from '@/lib/schemas';
import projectData from '@/data/projects.json';
import { ProjectCard } from '@/components/ProjectCard';

export const Projects = () => {
    const projects = projectSchema.parse(projectData).project;
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => {
                console.log(project);
                return <ProjectCard key={project.title} {...project} />;
            })}
        </section>
    );
};
