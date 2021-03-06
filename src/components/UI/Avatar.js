import defaultAvatar from '../../assets/images/default_avatar.png';
import styled from "@emotion/styled";

const StyledAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.measure}px;
    height: ${props => props.measure}px;
    border-radius: 50%;
    background-image: url(${props => props.src ? props.src : defaultAvatar});
    background-size: cover;
`

function Avatar({ src, measure }) {
    return <StyledAvatar src={src} measure={measure} />
}

export default Avatar;