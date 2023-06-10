import React from 'react'
import { styled } from 'styled-components';
import Header from './header/Header';
import Aside from './aside/Aside';

export default function ContainerWithLeftSideBar(
    {
        children
    }
) {
    return (
        <ContainerWithLeftSideBarStyled>
            <Aside />

            <div>
                {children}
            </div>
        </ContainerWithLeftSideBarStyled>
    )
}


const ContainerWithLeftSideBarStyled = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
`;