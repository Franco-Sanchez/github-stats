import styled from "@emotion/styled"

const StyledHeading1 = styled.h1`
    font-size: 32px;
    line-height: 40px;
    color: #000000; 
`

const StyledHeading2 = styled.h2`
    font-size: 28px;
    line-height: 35px;
    color: #000000;
`

function Heading1({ children }) {
    return <StyledHeading1>{children}</StyledHeading1>
}

function Heading2({ children }) {
    return <StyledHeading2>{children}</StyledHeading2>
}

export { Heading1, Heading2 }