import { Metadata } from "next"
import { AboutPage } from "@/utilities/types";
import TechStack from "@/components/tech-stack";

export const generateStaticParams = async () => {
    const response = await fetch('https://kayki.ca/portfolio/wp-json/wp/v2/pages');
    const pages = await response.json();
  
    return pages.map((page: { id: number }) => ({
        pageId: page.id.toString(),
    }));
};

export const metadata: Metadata = {
    title: "About Me"
}

export default async function About() {
    const response = await fetch('https://kayki.ca/portfolio/wp-json/wp/v2/pages/98');
    const data: AboutPage = await response.json();

    return (
        <section className="flex flex-col gap-4">

            {/* About Myself */}
            <h2 className="text-2xl font-bold
                           mobile-lg:text-3xl
                           tablet:text-4xl">About Myself!</h2>
            <p className="text-lg
                          mobile-lg:text-xl
                          desktop:text-2xl">{data.acf.intro_paragraph}</p>

            {/* Tech Stack */}
            <h2 className="text-2xl font-bold
                           mobile-lg:text-3xl
                           tablet:text-4xl">Tech Stack</h2>
            <TechStack about={data}/>
        </section>

    )
}