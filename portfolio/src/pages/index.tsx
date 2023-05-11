import About from '@/Components/About';
import Header from '@/Components/Header';
import { AboutProps } from '@/Components/types/about';
import { HeaderProps } from '@/Components/types/header';
import client from '@/sanity';

export default function Home({ header, about }: { header: HeaderProps; about: AboutProps }) {
    return (
        <>
            <Header header={header} />
            <About about={about} />
        </>
    );
}

export const getStaticProps = async () => {
    const header = await client.fetch(`*[_type == "header"][0]`);
    const about = await client.fetch(`*[_type == "about"][0]`);

    return {
        props: {
            header,
            about,
        },
    };
};
