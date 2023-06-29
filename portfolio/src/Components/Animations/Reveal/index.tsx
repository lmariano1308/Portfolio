import React, { FC, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Box, Container } from './style';

interface Props {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
}

const Reveal: FC<Props> = ({ children, width = 'fit-content' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
            slideControls.start('visible');
        }
    }, [isInView]);

    return (
        <Container ref={ref} $width={width}>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 75,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                    duration: 0.5,
                    delay: 0.25,
                }}>
                {children}
            </motion.div>
            <Box
                variants={{
                    hidden: {
                        left: 0,
                    },
                    visible: {
                        left: '100%',
                    },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{
                    duration: 0.5,
                    ease: 'easeIn',
                }}
                style={{
                    top: 5,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1,
                }}
            />
        </Container>
    );
};

export default Reveal;
