import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects"
}

type Large = {
    source_url: string;
}

type Sizes = {
    large: Large;
}

type MediaDetails = {
    sizes: Sizes;
}

type FeaturedMedia = {
    media_details: MediaDetails;
    title: {
        rendered: string;
    }
}

type Embedded = {
    'wp:featuredmedia': FeaturedMedia[];
}

type Tools = {
    name: string;
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
        development: {
            tools: Tools[];
        };
    };
    _embedded: Embedded;
};

export default async function Projects() {
    const response = await fetch("https://kayki.ca/portfolio/wp-json/wp/v2/projects?_embed");
    const projects = await response.json();

    console.log(projects);
    return (
        <section>
            {projects.map((project: Project) => (
                <div className="p-4" key={project.id}>
                    <Link href={`/projects/${project.id}`}>
                        
                        {/* Projects Featured Image */}
                        {project._embedded && project._embedded['wp:featuredmedia'] && project._embedded['wp:featuredmedia'][0] ? (
                            <img
                                alt={project._embedded["wp:featuredmedia"][0].title.rendered}
                                src={project._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url}
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                        
                        <h1 className="text-2xl font-bold">{project.title.rendered}</h1>

                        {/* Development Tools */}
                        <ul className="flex gap-4">
                            {Array.isArray(project.acf.development.tools) ? (
                                project.acf.development.tools.map((tool: Tools) => (
                                    <li key={tool.name}
                                        className="text-secondary bg-primary p-4 w-fit"
                                    >{tool.name}</li>
                                ))
                            ) : (
                                <li>No Tools Found</li>
                            )}
                        </ul>
                        
                    </Link>
                </div>
            ))}
        </section>
    );
}