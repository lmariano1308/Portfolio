import React, { FC, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Props {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
}

const Reveal: FC<Props> = ({ children, width = 'fit-content' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
        if (!isInView) {
            mainControls.start('hidden');
        }
    }, [isInView]);

    return (
        <div
            style={{
                position: 'relative',
                width: width,
                overflow: 'hidden',
            }}>
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
                animate="visible"
                transition={{
                    duration: 0.5,
                    delay: 0.25,
                }}>
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
