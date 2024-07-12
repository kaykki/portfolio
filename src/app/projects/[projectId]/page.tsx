import { Metadata } from "next";
import { Props, Project } from "@/utilities/types";
import ProjectDetailsTabs from "@/components/project-details-tabs";

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {

    const response = await fetch(`https://kayki.ca/portfolio/wp-json/wp/v2/projects/${params.projectId}?_embed`);
    if (!response.ok) {
        throw new Error(`Failed to fetch project with id ${params.projectId}`);
    }
    const project: Project = await response.json();

    return {
        title: `${project.title.rendered}`,
    };
};

export default async function ProjectDetails({
    params
}: {
    params: { projectId: string }
}) {
    const response = await fetch(`https://kayki.ca/portfolio/wp-json/wp/v2/projects/${params.projectId}?_embed`);
    if (!response.ok) {
        throw new Error(`Failed to fetch project with id ${params.projectId}`);
    }
    const project: Project = await response.json();




    return (
        <section className="flex flex-col gap-8">
            {project.acf.showcase.project_preview.type == "webm" &&
                <video autoPlay loop muted className="rounded-xl">
                    <source src={project.acf.showcase.project_preview.url}/>
                </video>
            }
            {project.acf.showcase.project_preview.type == "image" &&
                <img src={project.acf.showcase.project_preview.url} alt={project.acf.showcase.project_preview.alt} />
            }

            <div className="flex flex-col gap-4 
                            desktop:gap-4">
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl
                                   desktop:text-4xl">Overview</h2>
                    <p className="text-lg
                                  desktop:text-xl">{project.acf.showcase.project_overview}</p>
                    <p className="text-lg font-bold
                                  desktop:text-xl">Team size: <span className="font-normal">{project.acf.showcase.team_size}</span></p>
                    <p className="text-lg font-bold
                                  desktop:text-xl">Roles: {project.acf.showcase.roles.map((role, index) => (
                        <span key={role.name} className="font-normal">{role.name}{index < project.acf.showcase.roles.length - 1 && ", "}</span>
                    ))}</p>
                    <ul className="flex gap-4 justify-start my-6">
                        {(project.acf.ctas) && (project.acf.ctas.map((cta) => (
                            <li key={cta.links.title}>
                                <a href={cta.links.url}
                                    className="text-secondary bg-primary px-8 py-4 rounded-xl"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    {cta.links.title}
                                </a>
                            </li>
                        )))}
                    </ul>
                </div>

                <ProjectDetailsTabs project={project} />
            </div>


        </section>
    );
}