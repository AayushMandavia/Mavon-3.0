import { PROJECTS, ALL_CATEGORIES } from "../../data/projects";
import { WorkHero } from "../../components/hero/WorkHero";
import { ProjectShowcase } from "../../components/showcase/ProjectShowcase";

export default function WorkPage() {
  return (
    <div className="flex flex-col w-full">
      <WorkHero projectCount={PROJECTS.length} />
      <ProjectShowcase projects={PROJECTS} categories={ALL_CATEGORIES} />
    </div>
  );
}
