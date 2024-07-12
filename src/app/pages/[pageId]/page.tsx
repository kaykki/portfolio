import { Metadata } from "next"
import { AboutPage } from "@/utilities/types";
import TechStack from "@/components/tech-stack";

export const metadata: Metadata = {
    title: "About Me"
}

export default async function About() {
    const response = await fetch('https://kayki.ca/portfolio/wp-json/wp/v2/pages/98');
    const data: AboutPage = await response.json();

    console.log(data);


    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">About Myself!</h2>
            <p>{data.acf.intro_paragraph}</p>
            <h2 className="text-2xl font-bold">Tech Stack</h2>
            <TechStack about={data}/>
        </section>

    )
}