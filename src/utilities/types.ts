type Large = {
    source_url: string;
}

type Sizes = {
    large: Large;
}

type MediaDetails = {
    sizes: Sizes;
}

type FeaturedMedia = {
    media_details: MediaDetails;
    title: {
        rendered: string;
    }
}

type Embedded = {
    'wp:featuredmedia': FeaturedMedia[];
}

export type Tools = {
    name: string;
}

type Link = {
    title: string;
    url: string;
}

type CTAs = {
    links: Link;
}


export type Project = {
    id: number;
    title: {
        rendered: string;
    };
    acf: {
        showcase: {
            project_preview: object;
            project_overview: string;
        };
        development: {
            tools: Tools[];
        };
        design: {
            tools: Tools[];
        };
        ctas: CTAs[];
    };
    _embedded: Embedded;
};

// Props
export type Props = {
    params: {
        projectId: string;
    };
}

export type ProjectProps = {
    project: Project;
}

export type TypeWriterProps = {
    text: string;
    delay?: number;
}