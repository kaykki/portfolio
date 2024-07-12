"use client";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AboutPageProps } from '@/utilities/types';
import { useState } from 'react';

const stackLabels = [
    { name: "Languages", number: 1 },
    { name: "Frameworks", number: 2 },
    { name: "Design", number: 3 }
]

const TechStack: React.FC<AboutPageProps> = ({ about }) => {

    const [currentTab, setCurrentTab] = useState(1);

    return (
        <section>
            <Tabs className="shadow-project-details">
                <TabList className="flex justify-start rounded-t-lg bg-primary text-secondary">
                    {stackLabels.map((label) => (
                        <Tab key={label.number} onClick={() => setCurrentTab(label.number)}
                            className={`${currentTab === label.number ? "bg-accent hover:text-primary" : "bg-primary hover:text-accent"}
                                        px-2 py-1 text-center w-full focus:outline-none cursor-pointer`}>
                            {label.name}
                        </Tab>
                    ))}
                </TabList>
                <TabPanel className={`${currentTab === 1 ? "bg-accent p-4" : "bg-secondary p-0"}`}>
                    <ul className="flex flex-wrap gap-4">
                        {(about.acf.languages) && (
                            about.acf.languages.map((language) => (
                                <li key={language.name}
                                    className="text-secondary bg-primary px-7 py-3 w-fit rounded-lg">
                                    {language.name}
                                </li>
                            )
                            ))}
                    </ul>
                </TabPanel>
                <TabPanel className={`${currentTab === 2 ? "bg-accent p-4" : "bg-secondary p-0"}`}>
                    <ul className="flex flex-wrap gap-4">
                        {(about.acf.frameworks) && (
                            about.acf.frameworks.map((framework) => (
                                <li key={framework.name}
                                    className="text-secondary bg-primary px-7 py-3 w-fit rounded-lg">
                                    {framework.name}
                                </li>
                            )
                            ))}
                    </ul>
                </TabPanel>
                <TabPanel className={`${currentTab === 3 ? "bg-accent p-4" : "bg-secondary p-0"}`}>
                    <ul className="flex flex-wrap gap-4">
                        {(about.acf.design_tools) && (
                            about.acf.design_tools.map((tool) => (
                                <li key={tool.name}
                                    className="text-secondary bg-primary px-4 py-2 w-fit rounded-lg">
                                    {tool.name}
                                </li>
                            )
                            ))}
                    </ul>
                </TabPanel>
            </Tabs>
        </section>
    )
}

export default TechStack;