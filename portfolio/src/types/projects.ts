interface Technologies {
    technology: string;
    _key: string;
}

export interface ProjectProps {
    description: string;
    image: string;
    technologies: Technologies[];
    title: string;
    url: string;
    _key: string;
}

export interface ProjectsProps {
    _updatedAt: string;
    _type: string;
    _rev: string;
    _id: string;
    _createdAt: string;
    url: string;
    title: string;
    button: string;
    projects: ProjectProps[];
}
