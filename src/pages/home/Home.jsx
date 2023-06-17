import React, { useEffect } from 'react';
// Style
import { css, styled } from 'styled-components';
// Layout
import ContainerWithLeftSideBar from '../../layout/ContainerWithLeftSideBar';
// Assets
import { img } from './assets/img';


const blocks = [];
for (let i = 1; i <= 8; i++) {
    let content = `content-${i}`;
    let src = Object.entries(img)[i - 1][1];
    blocks.push(<div key={i} className={content}><img src={src} /></div>);
}


export default function Home() {
    // Hook
    useEffect(() => {
        document.title = "Lucky Store"
    }, [])


    // Render
    return (
        <ContainerWithLeftSideBar>
            <HomeStyled>
                <div className="right">{blocks}</div>
            </HomeStyled>
        </ContainerWithLeftSideBar>
    )
}

const HomeStyled = styled.main`
.right {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 20px;
    grid-template-areas:
        'content_1 content_1 content_3 content_4'
        'content_2 content_2 content_3 content_4'
        'content_5 content_6 content_7 content_7'
        'content_5 content_6 content_8 content_8';

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(8, 1fr);
        grid-template-areas:
        'content_1 content_1'
        'content_2 content_2'
        'content_3 content_4'
        'content_3 content_4'
        'content_5 content_6'
        'content_5 content_6'
        'content_7 content_7'
        'content_8 content_8';
    }

    ${gridAreas()}

    >div {
        border-radius: 15px;
        overflow: hidden;

        >img {
            height: 100%;
            width: 100%;
            object-position: center;
            object-fit: cover;
        }
    }
}
`;


function gridAreas() {
    let styles = '';

    for (let i = 1; i <= 8; i++) {
        styles += `
         .content-${i} {
            grid-area: content_${i};
         }
       `
    }

    return css`${styles}`;
}