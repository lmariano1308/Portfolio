import React, { useState } from 'react';
import * as S from './style';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import NavLink from './NavLink';

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);
    return (
        <S.Nav>
            {/* <S.Logo>
                <Image src={Logo} width={140} height={55} alt={'logo'} quality={100} />
            </S.Logo> */}
            <NavLink url="#about" text="Sobre mim" />
            <NavLink url="#skills" text="Experiências" />
            <NavLink url="#projects" text="Projetos" />
            <NavLink url="#footer" text="Contato" />
        </S.Nav>
    );
};

export default Navbar;
