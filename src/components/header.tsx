"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Project } from "@/utilities/types";
import TypeWriter from "./typewriter";
import { useState, useEffect } from "react";
import { log } from "console";

// navigation links array
const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects/" },
    { name: "About", href: "/pages/98/" }
]

export default function Header() {

    const [pageHeading, setPageHeading] = useState("");

    const pathName    = usePathname();
    const currentLink = navLinks.find((link) => pathName === link.href  );
    

    useEffect(() => {        
        const fetchData = async () => {
            const response = await fetch(`https://kayki.ca/portfolio/wp-json/wp/v2${pathName}?_embed`);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${pathName}`);
            }
            const data: Project = await response.json();

            // sets page heading
            if (data.title && data.title.rendered) {              
                setPageHeading(data.title.rendered);
            } else if (currentLink) {
                setPageHeading(currentLink.name)
            } else {
                setPageHeading("");
            }
        }
        fetchData();
    }, [pathName]);

    return (
        <header className="flex flex-col justify-between items-center ">

            {/* Fixed Heading */}
            <div className="fixed top-6 left-0 p-4 shadow-heading bg-primary flex items-center gap-4 rounded-r-lg z-20
                            tablet:px-6
                            desktop:px-8">
                <Link href="/" 
                      title="Home" 
                      className="transform hover:scale-105 transition duration-300 ease-in-out">
                    <img src="/assets/icons/logo.svg"
                         alt="Site Logo"
                         className="h-[45px] w-[42px] 
                                    tablet:h-[75px] tablet:w-[70]"/>
                </Link>
                {pageHeading &&
                    <h1 className="block text-2xl font-bold text-secondary lg:text-3xl">
                        <TypeWriter text={pageHeading} delay={75} />
                    </h1>
                }
            </div>

            {/* Main Navigation */}
            <nav className="h-main-nav fixed bottom-4 my-0 mx-auto
                            tablet:my-auto tablet:left-4 tablet:bottom-0 tablet:top-0 tablet:h-fit tablet:flex tablet:justify-center tablet:items-center">
                <ul className="h-fit flex justify-center items-center shadow-nav
                          bg-secondary text-primary p-4 gap-4 
                            rounded-lg
                            tablet:flex-col tablet:items-start tablet:shadow-none">
                    {navLinks.map((link) => {
                        const isActive = pathName.includes(link.name.toLowerCase());

                        return (
                            <li key={link.name} className="px-2 tablet:px-0">
                                <Link href={link.href}
                                    className={`${isActive || link.name == currentLink?.name ? "font-bold text-accent text-lg underline underline-offset-4 decoration-wavy tablet:text-2xl tablet:underline-offset-8" : "text-lg tablet:text-2xl"}
                                                hover:text-accent`}
                                    title={link.name}>
                                    {link.name}
                                </Link>
                            </li>)
                    })}
                </ul>
            </nav>
        </header>
    )
}