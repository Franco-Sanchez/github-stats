import styled from "@emotion/styled"

const StyledHeading1 = styled.h1`
    font-size: 32px;
    line-height: 40px;
    color: #000000;
    ${props => props.css ? props.css : ''}
`

const StyledHeading2 = styled.h2`
    font-size: 28px;
    line-height: 35px;
    color: #000000;
    ${props => props.css ? props.css : ''}
`

function Heading1({ children, css }) {
    return <StyledHeading1 css={css}>{children}</StyledHeading1>
}

function Heading2({ children, css }) {
    return <StyledHeading2 css={css}>{children}</StyledHeading2>
}

export { Heading1, Heading2 }