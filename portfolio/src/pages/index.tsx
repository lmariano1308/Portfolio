import Header from '@/Components/Header';
import client from '@/sanity';

interface HeaderProps {
    image: string;
    name: string;
    ocupation: string;
    summary: string;
    _createdAt: string;
    _id: string;
    _rev: string;
    type: string;
    _updatedAt: string;
}

export default function Home({ header }: { header: HeaderProps }) {
    return (
        <>
            <Header header={header} />
        </>
    );
}

export const getStaticProps = async () => {
    const header = await client.fetch(`*[_type == "header"][0]`);

    return {
        props: {
            header,
        },
    };
};
