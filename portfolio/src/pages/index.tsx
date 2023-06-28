import About from '@/Components/About';
import Header from '@/Components/Header';
import Projects from '@/Components/Projects';
import Skills from '@/Components/Skills';
import Footer from '@/Components/Footer';
import client from '@/sanity';
import { AboutProps } from '@/types/about';
import { HeaderProps } from '@/types/header';
import { SkillsProps } from '@/types/skills';
import { ProjectsProps } from '@/types/projects';
import { FooterProps } from '@/types/footer';
import { SocialProps } from '@/types/social';
import Navbar from '@/Components/Navbar';
import Reveal from '@/Components/UI/Reveal';

export default function Home({
    header,
    about,
    skills,
    projects,
    footer,
    social,
}: {
    header: HeaderProps;
    about: AboutProps;
    skills: SkillsProps;
    projects: ProjectsProps;
    footer: FooterProps;
    social: SocialProps;
}) {
    return (
        <>
            <Navbar />
            <Reveal width="100%">
                <Header data={header} socialData={social} />
            </Reveal>
            <Reveal width="100%">
                <About data={about} />
            </Reveal>
            <Reveal width="100%">
                <Skills data={skills} />
            </Reveal>
            <Reveal width="100%">
                <Projects data={projects} />
            </Reveal>
            <Reveal width="100%">
                <Footer data={footer} />
            </Reveal>
        </>
    );
}

export const getStaticProps = async () => {
    const header = await client.fetch(`*[_type == "header"][0]`);
    const about = await client.fetch(`*[_type == "about"][0]`);
    const skills = await client.fetch(`*[_type == "skills"][0]`);
    const projects = await client.fetch(`*[_type == "projects"][0]`);
    const footer = await client.fetch(`*[_type == "footer"][0]`);
    const social = await client.fetch(`*[_type == "social"][0]`);

    return {
        props: {
            header,
            about,
            skills,
            projects,
            footer,
            social,
        },
    };
};
