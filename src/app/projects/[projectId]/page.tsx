import { Metadata } from "next";
import { Props, Project } from "@/utilities/types";
import ProjectDetailsTabs from "@/components/project-details-tabs";

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {

    const response = await fetch(`https://kayki.ca/portfolio/wp-json/wp/v2/projects/${params.projectId}?_embed`);
    if(!response.ok) {
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
    if(!response.ok) {
        throw new Error(`Failed to fetch project with id ${params.projectId}`);
    }
    const project: Project = await response.json();    
    
    return (
        <section className="flex flex-col gap-6">
            <img src={project._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} 
                 alt="" />
            <div className="flex flex-col gap-4
                            tablet:flex-row">
                <h2 className="font-bold text-2xl">Overview:</h2>
                <p className="text-lg">{project.acf.showcase.project_overview}</p>
            </div>
            
            <ul className="flex gap-4">
                {(project.acf.ctas) && (project.acf.ctas.map((cta) => (
                    <li key={cta.links.title}>
                        <a href={cta.links.url} className="text-secondary bg-primary px-2 py-1 w-fit" rel="noopener noreferrer">
                            {cta.links.title}
                        </a>   
                    </li>
                )))}
            </ul>
            <section>
                <ProjectDetailsTabs project={project} />
            </section>
            
        </section>
    );
}