import Image from 'next/image';
import { useSanityImage } from '@/Hooks/useSanityImage';

interface Props {
    src: string;
    alt: string;
    quality?: number;
}

export const SanityImage = ({ src, alt, quality }: Props) => {
    const imageUrl = useSanityImage({ src, quality });

    if (!imageUrl) return null;

    return <Image src={imageUrl} alt={alt} fill />;
};
