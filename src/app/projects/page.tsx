import ProjectCard from "@/components/project-card";
import { Project } from "@/utilities/types";
import { fetchProjects } from "@/utilities/apiCalls";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects"
}

export default async function Projects() {
    const projects = await fetchProjects();

    return (
        <section className="flex flex-wrap gap-8 items-center justify-center">
            {projects.map((project: Project) => (
                <ProjectCard project={project} key={project.id}/>
            ))}
        </section>
    );
}