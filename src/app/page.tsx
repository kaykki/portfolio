import Link from "next/link";
import { Project } from "@/utilities/types";
import { fetchProjects } from "@/utilities/apiCalls";
import ProjectCard from "@/components/project-card";
import ToContentButton from "@/components/to-content-button";

export default async function Home() {
    const projects = await fetchProjects({query:"&per_page=3"});
    return (
        <section className="flex flex-col justify-center items-center gap-8">
            <div className="h-[calc(100vh-64px)] mx-auto my-0
                            flex flex-col items-center justify-center gap-8 
                            tablet:items-start tablet:h-screen tablet:mx-0">
                <h2 className="w-[250px] text-left font-bold text-6xl
                               mobile-lg:w-11/12 mobile-lg:text-8xl
                               tablet:text-8xl tablet:text-left
                               laptop:text-9xl
                               desktop:text-[13rem]
                               desktop-lg:w-10/12">
                    Kaki Kagatan
                </h2>
                
                    <p className="w-[250px] text-xl text-left
                                  mobile-lg:w-11/12
                                  laptop:text-4xl">Front-End Web Developer</p>
                <div className="flex flex-col gap-4 items-center justify-center w-full
                                mobile-lg:flex-row
                                tablet:flex-row tablet:justify-start">

                    <Link href={'/projects'} 
                          className="w-[200px] bg-primary text-secondary px-4 py-2 text-center rounded-lg shadow-buttons 
                                   hover:bg-accent transform hover:scale-95 transition duration-300 ease-in-out
                                     mobile-lg:w-2/5
                                     desktop:py-4 desktop:text-2xl">
                        View my work
                    </Link>
                    <Link href={'/pages/98'} 
                          className="w-[200px] bg-secondary px-4 py-2 text-center rounded-lg shadow-buttons
                                     hover:bg-accent hover:text-secondary transform hover:scale-95 transition duration-300 ease-in-out
                                     mobile-lg:w-2/5
                                     desktop:py-4 desktop:text-2xl">
                        Get to know me
                    </Link>
                    <ToContentButton />
                </div>
            </div>

            <section className="mx-auto my-0 flex flex-col gap-8
                                tablet:mx-0">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold laptop:text-4xl">Featured Project</h2>
                    <Link href={"/projects"} 
                          className="text-secondary bg-primary px-3 py-2 w-fit rounded-lg
                                     hover:bg-accent hover:scale-95 transition duration-300 ease-in-out
                        ">View All</Link>
                </div>
                {/* flex flex-row flex-wrap items-center justify-center gap-8 mx-0 my-auto */}
                <section id="main"
                         className="grid gap-12 mb-4 scroll-m-48
                                    tablet:mb-8 tablet:justify-center tablet:items-center tablet:scroll-m-24
                                    desktop:grid-cols-2 desktop:justify-between
                                    desktop-lg:grid-cols-3">
                    {projects.map((project: Project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </section>
            </section>
        </section>
    );
}
