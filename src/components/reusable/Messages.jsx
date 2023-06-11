import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../assets/theme';

export default function Messages({ errors, success }) {
    return (
        <MessagesStyled>
            {errors && (<div className="errors">{errors}</div>)}
            {success && (<div className="success">{success}</div>)}
        </MessagesStyled>
    )
}


const MessagesStyled = styled.div`
    .errors,
    .success {
        margin-bottom: ${theme.spacing.md};
    }

    .errors {
        color: ${theme.colors.red}
    }

    .success {
        color: ${theme.colors.green}
    }
`;