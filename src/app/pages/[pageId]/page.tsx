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
        <section className="flex flex-col gap-6
                            desktop:grid desktop:grid-cols-2 desktop:gap-x-16">
            <img src={data.acf.portrait.url} 
                 alt={data.acf.portrait.url} 
                 className="rounded-lg
                            desktop:col-start-2 desktop:col-end-3"/>
            {/* About Myself */}
            <section className="flex flex-col gap-4
                                desktop:col-start-1 desktop:col-end-2 desktop:row-start-1 desktop:row-end-2 desktop:self-center">
                <h2 className="text-2xl font-bold
                            mobile-lg:text-3xl
                            tablet:text-4xl
                            desktop:text-5xl
                            ">About Myself!</h2>
                <p className="text-lg
                            mobile-lg:text-xl
                            desktop:text-2xl
                            ">{data.acf.intro_paragraph}</p>
            </section>

            
            <TechStack about={data}/>
        </section>

    )
}