import { css } from '@emotion/react';
import Pagination from "../components/containers/Pagination";
import NavBar from '../components/containers/NavBar';
import Card from '../components/containers/Card';
import Avatar from '../components/UI/Avatar';
import { Heading2 } from '../components/text/Heading';
import { Content } from '../components/text/Content';
import styled from '@emotion/styled';

const StyledFollowers = styled.section`
    width: 100vw;
    height: 100vh;
    padding: 4% 0 18% 0;

    & > .container-followers {
    margin-top: 20px;
    display: grid;
    justify-items: center;
    row-gap: 16px;
  }
` 

function Followers() {
    const followers = [1, 2, 3, 4, 5, 6, 7];
    return (
        <StyledFollowers>
            <Heading2 css={css`margin-left: 32px;`}>Followers (64,254)</Heading2>
            <div className="container-followers">
                <Pagination />
                {followers.map(_follower => {
                    return (
                    <Card type="follow">
                        <Avatar src="" measure="40" />
                        <Content>LazyBwoy</Content>
                    </Card>
                )
                })
                }
            </div>
            <NavBar css={css`
                position: fixed;
                bottom: 0;
                width: 100%;
            `} />
        </StyledFollowers>
    )
}

export default Followers;