import React from 'react';
// Components
import Aside from './aside/Aside';
// Style
import { styled } from 'styled-components';


export default function ContainerWithLeftSideBar(
    {
        children
    }
) {
    // Render
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