import Icon from '../UI/Icon';
import styled from '@emotion/styled';

const StyledNavBar = styled.div`
    height: 66px;
    display: flex;
    justify-content: center;
    padding: 8px 0;
    box-shadow: 0px -2px 0px rgba(0, 0, 0, 0.25);
    ${props => props.css ? props.css : ''}

    .container__icons {
        width: 250px;
        display: flex;
        justify-content: space-between;
    }
`

function NavBar({ css }) {
    return (
        <StyledNavBar css={css}>
            <div className="container__icons">
                <Icon type="home" color="#BDBDBD" size="48" />
                <Icon type="search" color="#BDBDBD" size="48" />
                <Icon type="star" color="#BDBDBD" size="48" />
            </div>
        </StyledNavBar>
    )
}

export default NavBar;