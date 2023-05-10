import { useState, useEffect } from 'react';
import client from '@/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

interface Props {
    src: string;
    width?: number;
    height?: number;
    quality?: number;
}

export const useSanityImage = ({ src, width, height, quality }: Props) => {
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        if (!src) return;

        const imageBuilder = builder.image(src);

        if (width) {
            imageBuilder.width(width);
        }

        if (height) {
            imageBuilder.height(height);
        }

        if (quality) {
            imageBuilder.quality(quality);
        }

        setImageUrl(imageBuilder.url());
    }, [src, width, height, quality]);

    return imageUrl;
};
