import { Metadata } from "next";
import { fetchProjectById } from "@/utilities/apiCalls";
import { Tools } from "@/utilities/types";
import { Props } from "@/utilities/types";
import { useState } from "react";
import { Tab, Tabs } from "@nextui-org/tabs";

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Project: ${params.projectId}`,
    };
};

export default async function ProjectDetails({
    params
}: {
    params: { projectId: string }
}) {
    
    const project = await fetchProjectById(params.projectId);

    return (
        <section>
            <img src={project._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} alt="" />
            <section>
                <h2>Development Tools</h2>
                <ul className="flex gap-4">
                    {(project.acf.development.tools) && (
                        project.acf.development.tools.map((tool: Tools) => (
                            <li key={tool.name}
                                className="text-secondary bg-primary px-2 py-1 w-fit">
                                {tool.name}
                            </li>
                        )
                    ))}
                </ul>
            </section>
            
            <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="photos" title="Photos">
          <p>1</p> 
        </Tab>
        <Tab key="music" title="Music">
          <p>2</p> 
        </Tab>
        <Tab key="videos" title="Videos">
          <p>3</p> 
        </Tab>
      </Tabs>
    </div> 


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