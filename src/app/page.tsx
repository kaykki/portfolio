import Link from "next/link";

export default function Home() {
    return (
        <section className="flex flex-col items-start justify-center gap-4">
            <div className="h-[calc(100vh-200px)] mx-auto my-0
                            flex flex-col items-center justify-center gap-4 
                            tablet:items-start tablet:h-screen tablet:mx-0">
                <h2 className="font-bold text-7xl laptop:text-9xl">
                    Kaki Kagatan
                </h2>
                <p className="font-bold text-2xl">Front-End Developer</p>

                <div className="text-secondary flex flex-col gap-4 items-center justify-center w-full
                                tablet:flex-row tablet:justify-start">
                    <Link href={'/about'} className="w-[200px] bg-primary px-4 py-2 text-center rounded-lg">Get to know me</Link>
                    <Link href={'/projects'} className="w-[200px] bg-primary px-4 py-2 text-center rounded-lg">View my work</Link>
                </div> 
            </div>
            
            <section className="mx-auto my-0">
                <h2 className="text-2xl font-bold">Featured Project</h2>
            </section>
        </section>
    );
}
