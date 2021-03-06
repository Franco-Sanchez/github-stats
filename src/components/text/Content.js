import styled from '@emotion/styled';

const StyledContent = styled.p`
    font-size: 16px;
    line-height: 20px;
    color: #333333;
`

const StyledContentBold = styled(StyledContent)`
    font-weight: bold;
    color: ${props => props.color ? props.color : '#333'};
`

const StyledContentLarge = styled(StyledContent)`
    font-size: 20px;
    line-height: 25px;
`

const StyledContentLargeBold = styled(StyledContentLarge)`
    font-weight: bold;
`

const StyledContentSmall = styled(StyledContent)`
    font-size: 12px;
    line-height: 15px;
`

function ContentLarge ({ children }) {
    return <StyledContentLarge>{children}</StyledContentLarge>
}

function ContentLargeBold({ children }) {
    return <StyledContentLargeBold>{children}</StyledContentLargeBold>
}

function Content({ children }) {
    return <StyledContent>{children}</StyledContent>
}

function ContentSmall({ children }) {
    return <StyledContentSmall>{children}</StyledContentSmall>
}

function ContentBold({ children, color }) {
    return <StyledContentBold color={color}>{children}</StyledContentBold>
}

export { ContentLarge, ContentLargeBold, Content, ContentSmall, ContentBold }