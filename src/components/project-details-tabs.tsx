"use client"
import React, { useState } from "react";
import { ProjectProps } from "@/utilities/types";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const ProjectDetailsTabs: React.FC<ProjectProps> = ({ project }) => {

    const [currentTab, setCurrentTab] = useState(1);

    return (
        <Tabs className="shadow-project-details flex flex-col rounded-xl text-secondary w-full">
            <TabList className="flex justify-around bg-primary rounded-t-xl">
                <Tab onClick={() => setCurrentTab(1)}
                    className={`${currentTab === 1 ? "bg-accent hover:text-primary underline underline-offset-8 decoration-primary decoration-wavy" : "bg-primary hover:text-accent"}
                     py-4 text-center w-full focus:outline-none cursor-pointer rounded-tl-lg
                     desktop:text-2xl desktop:py-4`}>
                    Development
                </Tab>
                <Tab onClick={() => setCurrentTab(2)}
                    className={`${currentTab === 2 ? "bg-accent hover:text-primary underline underline-offset-8 decoration-primary decoration-wavy" : "bg-primary hover:text-accent"}
                     py-4 text-center w-full focus:outline-none cursor-pointer rounded-tr-xl
                     desktop:text-2xl desktop:py-4`}>
                    Design
                </Tab>
            </TabList>

            {/* Development */}
            <TabPanel className={`${currentTab === 1 ? "bg-accent p-4" : "bg-secondary p-0"}
                      rounded-b-xl`}>
                <section className="flex flex-col gap-4 p-4 rounded-tr-lg">

                    {/* Process */}
                    <h2 className="font-bold text-2xl">Process:</h2>
                    <p>{project.acf.development.process}</p>

                    {/* Tools */}
                    <h2 className="font-bold text-2xl">Tools:</h2>
                    <ul className="flex flex-wrap gap-4">
                        {(project.acf.development.tools) && (
                            project.acf.development.tools.map((tool) => (
                                <li key={tool.name}
                                    className="text-secondary bg-primary px-6 py-2 w-fit rounded-lg">
                                    {tool.name}
                                </li>
                            )
                            ))}
                    </ul>

                    {/* Features */}
                    <h2 className="font-bold text-2xl">Features:</h2>
                    <ul className="flex flex-wrap gap-4">
                        {(project.acf.development.features) && (
                            project.acf.development.features.map((feature) => (
                                <li key={feature.demo.title}
                                    className="bg-primary rounded-lg">
                                    {(feature.demo.type == "image") && (
                                        <img src={feature.demo.url} alt={feature.demo.alt} className="rounded-t-lg"/>
                                    )} 
                                        
                                    {feature.demo.type == "webm"} {
                                        <video autoPlay loop muted className="rounded-t-lg">
                                            <source src={feature.demo.url}/>
                                        </video>
                                    }
                                    <p className="p-4">{feature.explanation}</p>
                                </li>)
                            ))}
                    </ul>

                    {/* Reflection */}
                    <h2 className="font-bold text-2xl">Reflection:</h2>
                    <p>{project.acf.development.improvements}</p>
                </section>
            </TabPanel>

            {/* Design */}
            <TabPanel className={`${currentTab === 2 ? "bg-accent p-4" : "bg-secondary p-0"}
                      rounded-b-xl`}>
                <section className="flex flex-col gap-4 p-4">

                    {/* Process */}
                    <h2 className="font-bold text-2xl">Process:</h2>
                    <p>{project.acf.design.process}</p>

                    {/* Tools */}
                    <h2 className="font-bold text-2xl">Tools:</h2>
                    <ul className="flex flex-wrap gap-4">
                        {(project.acf.design.tools) && (
                            project.acf.design.tools.map((tool) => (
                                <li key={tool.name}
                                    className="text-secondary bg-primary px-6 py-2 w-fit rounded-lg">
                                    {tool.name}
                                </li>
                            )
                            ))}
                    </ul>

                    {/* Features */}
                    <h2 className="font-bold text-2xl">Features:</h2>
                    <ul className="flex flex-wrap gap-4">
                        {(project.acf.design.features) && (
                            project.acf.design.features.map((feature) => (
                                <li key={feature.demo.title}
                                    className="bg-primary rounded-lg">
                                    {(feature.demo.type == "image") && (
                                        <img src={feature.demo.url} alt={feature.demo.alt} className="rounded-t-lg"/>
                                    )} 
                                        
                                    {feature.demo.type == "webm"} {
                                        <video autoPlay loop muted className="rounded-t-lg">
                                            <source src={feature.demo.url}/>
                                        </video>
                                    }
                                    <p className="p-4">{feature.explanation}</p>
                                </li>)
                            ))}
                    </ul>

                    {/* Reflection */}
                    <h2 className="font-bold text-2xl">Reflection:</h2>
                    <p>{project.acf.development.improvements}</p>
                </section>
            </TabPanel>
        </Tabs>
    );
}

export default ProjectDetailsTabs;