export interface Exp {
    period: string;
    company: string;
    experience: string;
    description: string;
    _key: string;
}

interface Skills {
    skill: string;
    _key: string;
}

export interface SkillsProps {
    _id: string;
    _rev: string;
    _createdAt: string;
    _updatedAt: string;
    experience: Exp[];
    experience_title: string;
    skills_list: Skills[];
    skills_title: string;
    subtitle: {
        paragraph: string;
    }[];
    title: string;
}
