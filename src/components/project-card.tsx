import Link from "next/link";
import { ProjectProps, Tools } from "@/utilities/types";

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div className="max-w-[400px] max-h-[600px] shadow-projects rounded-lg">
            <Link href={`/projects/${project.id}`} title={project.title.rendered}>
                <div className="flex flex-col">
                    {/* Projects Featured Image */}
                    {project._embedded && project._embedded['wp:featuredmedia'] && project._embedded['wp:featuredmedia'][0] && (
                        <img
                            className="rounded-t-lg h-[200px] object-cover"
                            alt={project._embedded["wp:featuredmedia"][0].title.rendered}
                            src={(project._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url)}
                        />
                    )}

                    <div className="flex flex-col gap-4 p-4">
                        <h2 className="text-2xl font-bold">{project.title.rendered}</h2>

                        {/* Development Tools */}
                        <ul className="flex gap-2 justify-start items-start">
                            {Array.isArray(project.acf.development.tools) && (
                                project.acf.development.tools.slice(0, 3).map((tool: Tools) => (
                                    <li key={tool.name}
                                        className="
                                        text-secondary bg-accent px-2 py-1 w-auto rounded-lg text-xs
                                        tablet:px-3 tablet:py-2">
                                        {tool.name}
                                    </li>
                            )))}
                        </ul>
                        
                        <p className="text-sm">{project.acf.showcase.project_overview.length > 20 ?
                            project.acf.showcase.project_overview.split(' ').slice(0, 12).join(' ') + '...' :
                            project.acf.showcase.project_overview
                        }</p>                        
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProjectCard;