"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Project } from "@/utilities/types";
import TypeWriter from "./typewriter";
import { useState, useEffect } from "react";

// navigation links array
const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects/" },
    { name: "About", href: "/pages/98/" }
]

export default function Header() {

    const [pageHeading, setPageHeading] = useState("");

    const pathName = usePathname();
    const currentLink = navLinks.find((link) => pathName === link.href);


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
        <header id="pageHeader" className="flex flex-col justify-between items-center z-50">

            {/* Fixed Heading */}
            <div className={`fixed top-6 left-0 p-4 shadow-heading bg-primary flex items-center gap-4 rounded-r-lg z-20
                            tablet:px-6
                            desktop:px-8`}>
                <Link href="/"
                    title="Home"
                    className="transform hover:scale-105 transition duration-300 ease-in-out">

                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 301.5 356.2" className="h-[45px] w-[42px] tablet:h-[75px] tablet:w-[70px]">
                        <path className="fill-secondary" d="M0.2,8.6L0,172.9c0,0,9.7,80.7,93.2,79.4l0.2-166.9C93.4,85.4,77.9,5.8,0.2,8.6z" />
                        <path className="fill-secondary" d="M280.3,1.1c6.5-2.9,14.1,0.4,16.2,7.2c2.8,8.7,5.4,24.2,4.9,51.9c-1,54.9-102.4,86.3-145.8,114.7
	c-3.3,2.1-3,5.2,0.5,6.8c26.9,12.3,104.3,47.8,123.4,70.4c23.6,27.9,21.9,44,21.9,44l-0.1,28c0,7-1.2,14-3.8,20.6
	c-0.9,2.2-2,4.7-3.2,7.2c-2,3.9-6.8,5.4-10.6,3.4c-24.1-12.3-107.4-55.1-142-78.6c-5.7-3.9-10.7-8.6-14.9-14
	c-7.1-9.2-16.7-24.7-17.1-40.6l0.2-90c0,0-2-43.3,82.3-82.6c3.8-1.8,7.5-3.7,11.1-5.8C218.2,34.7,259.9,10.3,280.3,1.1L280.3,1.1z"
                        />
                    </svg>
                </Link>
                {pageHeading &&
                    <h1 className={`${pageHeading.length > 20 ? "text-xl tablet:max-w-[140px]" : "block text-2xl lg:text-3xl"} font-bold text-secondary`}>
                        <TypeWriter text={pageHeading} delay={75} />
                    </h1>
                }
            </div>

            {/* Main Navigation */}
            <nav className="h-main-nav fixed bottom-4 my-0 mx-auto z-20
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