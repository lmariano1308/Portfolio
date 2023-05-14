import React, { useState } from 'react';
import * as S from './style';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import NavLink from './NavLink';

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);
    return (
        <S.NavbarWrapper>
            <S.Navbar>
                <S.Logo>
                    <Image src={Logo} width={140} height={55} alt={'logo'} quality={100} />
                </S.Logo>
                <S.Nav>
                    <S.NavList>
                        <NavLink url="#about" text="Sobre mim" />
                        <NavLink url="#skills" text="Experiências" />
                        <NavLink url="#projects" text="Projetos" />
                        <NavLink url="#footer" text="Contato" />
                    </S.NavList>
                </S.Nav>
                <S.NavbarMobile>
                    <S.NavbarMobileListIcon onClick={() => setIsMenu(!isMenu)} />
                    <S.NavbarMobileBackground $active={isMenu}>
                        <S.NavbarMobileCloseIcon onClick={() => setIsMenu(!isMenu)} />
                        <S.NavbarMobileNav>
                            <S.NavbarMobileList>
                                <NavLink url="#about" text="Sobre mim" toggleMenu={() => setIsMenu(!isMenu)} />
                                <NavLink url="#skills" text="Experiências" toggleMenu={() => setIsMenu(!isMenu)} />
                                <NavLink url="#projects" text="Projetos" toggleMenu={() => setIsMenu(!isMenu)} />
                                <NavLink url="#footer" text="Contato" toggleMenu={() => setIsMenu(!isMenu)} />
                            </S.NavbarMobileList>
                        </S.NavbarMobileNav>
                    </S.NavbarMobileBackground>
                </S.NavbarMobile>
            </S.Navbar>
        </S.NavbarWrapper>
    );
};

export default Navbar;
