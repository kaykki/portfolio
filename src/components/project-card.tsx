import Link from "next/link";
import Image from "next/image";
import { ProjectProps, Tools } from "@/utilities/types";

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {

    const imageSrc = project._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;

    return (
        <Link href={`/projects/${project.id}`} title={project.title.rendered}
            className="flex flex-col max-w-[500px] max-h-[600px] shadow-projects z-10 rounded-lg
                    hover:scale-105 transition duration-300 ease-in-out">

            {/* Projects Featured Image */}
            {project._embedded && project._embedded['wp:featuredmedia'] && project._embedded['wp:featuredmedia'][0] && (
                <img
                    className="rounded-t-lg h-[150px] object-cover relative z-0
                                       mobile-lg:h-[300px]
                                       desktop-lg:h-[350px]"
                    alt={project._embedded["wp:featuredmedia"][0].title.rendered}
                    src={(project._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url)}
                />
            )}

            <div className="flex flex-col gap-4 p-4">
                <h2 className="text-2xl font-bold">{project.title.rendered}</h2>

                {/* Development Tools */}
                <ul className="flex flex-wrap gap-1 justify-start items-start">
                    {Array.isArray(project.acf.development.tools) && (
                        project.acf.development.tools.slice(0, 3).map((tool: Tools) => (
                            <li key={tool.name}
                                className="
                                        text-secondary bg-accent px-2 py-1 rounded-lg text-xs
                                        mobile-lg:text-base mobile-lg:px-4 mobile-lg:py-2
                                        tablet:px-6 tablet:py-2
                                        laptop:text-sm laptop:px-4">
                                {tool.name}
                            </li>
                        )))}
                </ul>

                <p className="text-sm
                                      mobile-lg:text-lg">{project.acf.showcase.project_overview.length > 20 ?
                        project.acf.showcase.project_overview.split(' ').slice(0, 20).join(' ') + '...' :
                        project.acf.showcase.project_overview
                    }</p>
            </div>
        </Link>
    );
}

export default ProjectCard;