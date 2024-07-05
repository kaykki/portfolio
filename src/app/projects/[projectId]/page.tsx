import { Metadata } from "next";
import Link from "next/link";

type Props = {
    params: {
        projectId: string;
    };
};

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Project: ${params.projectId}`,
    };
};
 


export default function ProjectDetails({
    params 
}: {
    params: { projectId: string }
}) {
    return (
        <Link href={`/projects/${params.projectId}`}></Link>
    );
}