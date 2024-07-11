"use client"
import React, { useState } from "react";
import { ProjectProps } from "@/utilities/types";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const ProjectDetailsTabs: React.FC<ProjectProps> = ({ project }) => {

    const [selection, setSelection] = useState("development");

    return (
        <Tabs className="shadow-project-details flex flex-col">
            <TabList className="flex justify-around p-4 border-">
                <Tab>Development</Tab>
                <Tab>Design</Tab>
            </TabList>
            <TabPanel className="p-4">
                <h2>Development Tools</h2>
                <ul className="flex gap-4">
                    {(project.acf.development.tools) && (
                        project.acf.development.tools.map((tool) => (
                            <li key={tool.name}
                                className="text-secondary bg-primary px-2 py-1 w-fit">
                                {tool.name}
                            </li>
                        )
                        ))}
                </ul>
            </TabPanel>
            <TabPanel>Content for Tab 2</TabPanel>
        </Tabs>
        // <div className="flex w-full flex-col shadow-nav">
        //   <Tabs variant="underlined" color="default" aria-label="Options" selectedKey={selection} onSelectionChange={(value: any) => {
        //     setSelection(value);
        //   }} className="p-0 m-0">
        //     <Tab key="development" title="Development" className={selection == "development" ? "text-accent font-bold text-lg underline underline-offset-4 decoration-wavy" : "bg-secondary text-lg"}>
        //       <Card className="p-4 text-primary">
        //         <CardBody>
        //         <h2>Development Tools</h2>
        //         <ul className="flex gap-4">
        //             {(project.acf.development.tools) && (
        //                 project.acf.development.tools.map((tool) => (
        //                     <li key={tool.name}
        //                         className="text-secondary bg-primary px-2 py-1 w-fit">
        //                         {tool.name}
        //                     </li>
        //                 )
        //             ))}
        //         </ul>
        //         </CardBody>
        //       </Card>  
        //     </Tab>
        //     <Tab key="design" title="Design" className={selection == "design" ? "text-accent font-bold text-lg underline underline-offset-4 decoration-wavy" : "bg-secondary text-lg"}>
        //       <Card className="p-4">
        //         <CardBody className="text-primary">
        //           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        //         </CardBody>
        //       </Card>  
        //     </Tab>
        //   </Tabs>
        // </div>  
    );
}

export default ProjectDetailsTabs;
