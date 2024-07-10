"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
import TypeWriter from "./typewriter";
import { useState, useEffect } from "react";

// navigation links array
const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Experiences", href: "/experiences" },
    { name: "About", href: "/about" }
]

export default function Header() {

    const [pageHeading, setPageHeading] = useState("");
    const [showHeading, setShowHeading] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        const currentNavLink = navLinks.find((link) => pathName.endsWith(link.href));

        if(currentNavLink && currentNavLink.name != "Home") {
            setPageHeading(currentNavLink.name);
            setShowHeading(true);
        } else {
            setShowHeading(false);
        }
    }, [pathName]);

    return (
        <header className="flex flex-col justify-between items-center ">
            <div className="fixed top-6 left-0 py-4 px-4 shadow-nav bg-primary flex items-center gap-4 rounded-r-lg">
                <Link href="/" title="Home">
                    <img src="/assets/icons/logo.svg" alt="Site Logo" className="h-[45px] w-[42px]" />
                </Link>
                {showHeading && <h1 className="block text-2xl font-bold text-secondary">{pageHeading}</h1>}
                
            </div>
            
            <nav className="h-main-nav fixed bottom-4 left-4 right-4">
                <ul className="h-full flex justify-center items-center shadow-nav
                          bg-secondary text-primary p-4 gap-4 
                            rounded-lg">
                    {navLinks.map((link) => {
                        const isActive = pathName.includes(link.name.toLowerCase());

                        return (
                            <li key={link.name}>
                                <Link href={link.href}
                                      className={isActive ? "font-bold text-accent text-sm underline underline-offset-4 decoration-wavy" : "text-sm"}
                                      title={link.name}>
                                      {link.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </nav>
        </header>
    )
}