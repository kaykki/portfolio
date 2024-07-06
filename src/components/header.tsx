"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";

// navigation links array
const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Experiences", href: "/experiences" },
    { name: "About Me", href: "/about" }
]

export default function Header() {
    const pathName = usePathname();

    return (
        <header className="flex flex-col justify-between items-center p-4 h-5/6">
            <Link href="/">
                <img src="/assets/icons/logo.svg" alt="Site Logo" className="h-[95px]"/>
            </Link>
            <nav className="flex flex-col gap">
                {navLinks.map((link) => {
                    const isActive = pathName.startsWith(link.href);
                    return (
                        <Link href={link.href}
                            key={link.name}
                            className={isActive ? "font-bold mr-4 " : "text-blue-500 mr-4"}>
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </header>
    )
}