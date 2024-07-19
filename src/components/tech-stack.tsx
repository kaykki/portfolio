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
        <section className='flex flex-col gap-6
                            laptop:col-span-2'>
            {/* Tech Stack */}
            <h2 className="text-2xl font-bold
                           mobile-lg:text-3xl
                           tablet:text-4xl
                           desktop:col-span-2 desktop:text-5xl">Tech Stack</h2>
            <Tabs className="shadow-project-details rounded-xl">
                <TabList className="flex justify-start rounded-t-xl bg-primary text-secondary">
                    {stackLabels.map((label) => (
                        <Tab key={label.number} onClick={() => setCurrentTab(label.number)}
                            className={`${currentTab === label.number ? "bg-accent hover:text-primary" : "bg-primary hover:text-accent"}
                                        px-2 py-2 text-center w-full focus:outline-none cursor-pointer rounded-t-xl
                                        mobile-lg:text-lg
                                        laptop:text-xl
                                        desktop:text-2xl desktop:py-4`}>
                            {label.name}
                        </Tab>
                    ))}
                </TabList>
                <TabPanel className={`${currentTab === 1 ? "bg-accent p-4" : "bg-secondary p-0"} rounded-b-xl`}>
                    <ul className="flex flex-wrap gap-4
                                   mobile-lg:text-lg
                                   laptop:text-xl
                                   desktop:text-2xl">
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
                <TabPanel className={`${currentTab === 2 ? "bg-accent p-4" : "bg-secondary p-0"} rounded-b-xl`}>
                    <ul className="flex flex-wrap gap-4
                                   mobile-lg:text-lg
                                   laptop:text-xl
                                   desktop:text-2xl">
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
                <TabPanel className={`${currentTab === 3 ? "bg-accent p-4" : "bg-secondary p-0"} rounded-b-xl`}>
                    <ul className="flex flex-wrap gap-4
                                   mobile-lg:text-lg
                                   laptop:text-xl
                                   desktop:text-2xl">
                        {(about.acf.design_tools) && (
                            about.acf.design_tools.map((tool) => (
                                <li key={tool.name}
                                    className="text-secondary bg-primary px-7 py-3 w-fit rounded-lg">
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