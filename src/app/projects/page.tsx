import { Projects } from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <article className="mt-8 flex flex-col gap-8">
      <h1 className="font-serif text-5xl tracking-wide decoration-border/75 decoration-2">
        my projects.
      </h1>
      <Projects />
    </article>
  );
};

export default ProjectsPage;
