import { COLORS } from '@/utils/variables';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div<{ $width: string }>`
    width: ${({ $width }) => $width};
    position: relative;
    overflow: hidden;
`;

export const Content = styled(motion.div)``;

export const Box = styled(motion.div)`
    position: absolute;
    background-color: ${COLORS.DARKPRIMARY};
`;
