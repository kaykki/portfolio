import { Metadata } from "next";
import Link from "next/link";

type Props = {
    params: {
        projectId: string;
    };
};

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Project: ${params.projectId}`,
    };
};

type CTA = {
    title: string;
    url: string;
    target: string;
}

type CTAs = {
    github: CTA;
    live_site: CTA;
}

type Project = {
    id: number;
    title: {
        rendered: string;
    };
    acf: {
        showcase: {
            project_preview: object;
            project_overview: string;
        };
        development: object;
        design: {
            process: string;
            design_tools: [{
                name: string;
            }]
        };
        ctas: CTAs[];
    }
};
 


export default async function ProjectDetails({
    params 
}: {
    params: { projectId: string }
}) {
    const response = await fetch(`https://kayki.ca/portfolio/wp-json/wp/v2/projects/${params.projectId}?_embed`);
    const projects = await response.json();

    

    return (
        <section>
            <img src={projects._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} alt="" />
            
            {/* {projects.map((project: Project) => (
                <div key={project.id}>
                    <h1 className="text-2xl font-bold">{project.title.rendered}</h1>
                    <p>{project.acf.showcase.project_preview}</p>
                    <p>{project.acf.showcase.project_overview}</p>


                    <h1>CTAs</h1>
                    {Array.isArray(project.acf.ctas) ? (
                        project.acf.ctas.map((ctaGroup: CTAs, index: number) => (
                            <div key={index}>
                                <p>
                                    <a href={ctaGroup.github.url} target={ctaGroup.github.target}>
                                        {ctaGroup.github.title}
                                    </a>
                                </p>
                                <p>
                                    <a href={ctaGroup.live_site.url} target={ctaGroup.live_site.target}>
                                        {ctaGroup.live_site.title}
                                    </a>
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No CTAs available</p>
                    )}
                </div>

            ))} */}
        </section>
    );
}