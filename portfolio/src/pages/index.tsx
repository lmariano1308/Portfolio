import About from '@/Components/About';
import Header from '@/Components/Header';
import Skills from '@/Components/Skills';
import { AboutProps } from '@/Components/types/about';
import { HeaderProps } from '@/Components/types/header';
import { SkillsProps } from '@/Components/types/skills';
import client from '@/sanity';

export default function Home({
    header,
    about,
    skills,
}: {
    header: HeaderProps;
    about: AboutProps;
    skills: SkillsProps;
}) {
    console.log(skills);
    return (
        <>
            <Header data={header} />
            <About data={about} />
            <Skills data={skills} />
        </>
    );
}

export const getStaticProps = async () => {
    const header = await client.fetch(`*[_type == "header"][0]`);
    const about = await client.fetch(`*[_type == "about"][0]`);
    const skills = await client.fetch(`*[_type == "skills"][0]`);

    return {
        props: {
            header,
            about,
            skills,
        },
    };
};
