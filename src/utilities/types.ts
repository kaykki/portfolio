// Project Types
type Large = {
    source_url: string;
}

type Full = {
    source_url: string;
}

type Sizes = {
    large: Large;
    full: Full;
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

type Roles = {
    name: string;
}

type Features = {

    demo: {
        title: string;
        url: string;
        alt: string;
        type: string
    };
    explanation: string;
}

export type Project = {
    id: number;
    title: {
        rendered: string;
    };
    acf: {
        showcase: {
            project_preview: {
                url: string;
                type: string;
                alt: string;
            };
            project_overview: string;
            roles: Roles[];
            team_size: number;
        };
        development: {
            tools: Tools[];
            process: string;
            features: Features[];
            improvements: string;
        };
        design: {
            tools: Tools[];
            process: string;
            features: Features[];
            improvements: string;
        };
        ctas: CTAs[];
    };
    _embedded: Embedded;
};

export type FetchProjectsOptions = {
    query?: string;
}

// About

type Languages = {
    name: string;
}
type Frameworks = {
    name: string;
}
type Design = {
    name: string;
}

export type AboutPage = {
    id: number;
    acf: {
        intro_paragraph: string;
        languages: Languages[];
        frameworks: Frameworks[];
        design_tools: Design[];
    }
}


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

export type AboutPageProps = {
    about: AboutPage;
}