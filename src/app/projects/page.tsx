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
        <section className="grid justify-center items-center gap-8
                            desktop:grid-cols-2
                            desktop-lg:grid-cols-3">
            {projects.map((project: Project) => (
                <ProjectCard project={project} key={project.id}/>
            ))}
        </section>
    );
}