import Link from "next/link";
import { ProjectProps, Tools } from "@/utilities/types";

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div className="w-[300px] h-[500px] shadow-projects rounded-lg">
            <Link href={`/projects/${project.id}`} title={project.title.rendered}>
                <div className="flex flex-col">
                    {/* Projects Featured Image */}
                    {project._embedded && project._embedded['wp:featuredmedia'] && project._embedded['wp:featuredmedia'][0] && (
                        <img
                            className="rounded-t-lg h-[200px] object-cover"
                            alt={project._embedded["wp:featuredmedia"][0].title.rendered}
                            src={project._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url}
                        />
                    )}

                    <div className="flex flex-col gap-4 p-4">
                        <h1 className="text-2xl font-bold">{project.title.rendered}</h1>
                        <p className="text-sm">{project.acf.showcase.project_overview.length > 20 ?
                            project.acf.showcase.project_overview.split(' ').slice(0, 12).join(' ') + '...' :
                            project.acf.showcase.project_overview
                        }</p>

                        {/* Development Tools */}
                        <ul className="flex gap-4">
                            {Array.isArray(project.acf.development.tools) && (
                                project.acf.development.tools.map((tool: Tools) => (
                                    <li key={tool.name}
                                        className="text-secondary bg-primary px-3 py-1 w-fit rounded-lg">
                                        {tool.name}
                                    </li>
                            )))}
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProjectCard;