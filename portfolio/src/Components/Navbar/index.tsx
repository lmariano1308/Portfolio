import React from 'react';
import * as S from './style';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <S.NavbarWrapper>
            <S.Navbar>
                <S.Logo>
                    <Image src={Logo} width={140} height={55} alt={'logo'} quality={100} />
                </S.Logo>
                <S.Nav>
                    <S.NavList>
                        <NavLink text="Sobre mim" />
                        <NavLink text="Experiências" />
                        <NavLink text="Projetos" />
                        <NavLink text="Contato" />
                    </S.NavList>
                </S.Nav>
            </S.Navbar>
        </S.NavbarWrapper>
    );
};

export default Navbar;
