import styled from "@emotion/styled";

const StyledAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.measure}px;
    height: ${props => props.measure}px;
    border-radius: 50%;
    background-image: url(${props => props.src});
    background-size: cover;
    background-color: #219653;
    p {
        font-size: ${props => props.size}px;
        color: #FFF;
        font-weight: bold;
    }
`

function Avatar({ src, measure, size, placeholder }) {
    return <StyledAvatar src={src} measure={measure} size={size}>{!src && <p>{placeholder}</p>}</StyledAvatar>
}

export default Avatar;