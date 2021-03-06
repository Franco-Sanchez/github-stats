import { css } from '@emotion/react';
import logo from '.././assets/images/gh.png';
import NavBar from "../components/containers/NavBar";
import Button from "../components/UI/Button";
import { Heading1 } from '../components/text/Heading';
import styled from '@emotion/styled';


const StyledHome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10%;
    width: 100vw;
    height: 100vh;
    padding: 16% 0 18% 0;
`

function Home({ history }) {
    return (
        <StyledHome>
            <Heading1 css={css`
                width: 264px;
                text-align: center;
            `}>Welcome to Github Users</Heading1>
            <img src={logo} />
            <Button onClick={ () => history.push('/search')}>Continue</Button>
            <NavBar css={css`
                position: fixed;
                bottom: 0;
                width: 100%;
            `} />
        </StyledHome>
    )
}

export default Home;