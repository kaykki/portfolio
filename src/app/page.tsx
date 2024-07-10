import Link from "next/link";
import TypeWriter from "@/components/typewriter";

export default function Home() {
    return (
        <section className="flex flex-col items-start justify-center gap-4">
            <h2 className="font-bold text-7xl">
                <TypeWriter text="Kaki Kagatan" />
            </h2>
            <p className="font-bold text-2xl">Front-End Developer</p>

            <div className="text-secondary flex flex-col gap-4 items-center justify-center w-full">
                <Link href={'/about'} className="w-[200px] bg-primary px-4 py-2 text-center rounded-lg">Get to know me</Link>
                <Link href={'/projects'} className="w-[200px] bg-primary px-4 py-2 text-center rounded-lg">View my work</Link>
            </div> 
        </section>
    );
}
