import { css } from "@emotion/react";
import NavBar from "../components/containers/NavBar";
import Pagination from "../components/containers/Pagination";
import Card from "../components/containers/Card";
import Avatar from "../components/UI/Avatar";
import { Content } from "../components/text/Content";
import styled from "@emotion/styled";
import { Heading2 } from "../components/text/Heading";

const StyledFollowings = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 16px 0 18% 0;

  & > .container-followings {
    margin-top: 20px;
    display: grid;
    justify-items: center;
    row-gap: 16px;
  }
`;

function Followings({ history }) {
  const followings = [1, 2, 3, 4, 5, 6, 7];
  return (
    <StyledFollowings>
      <Heading2
        css={css`
          margin-left: 32px;
        `}
      >
        Followings (171)
      </Heading2>
      <div className="container-followings">
        <Pagination />
        {followings.map((_following) => {
          return (
            <Card type="follow">
              <Avatar src="" measure="40" />
              <Content>LazyBwoy</Content>
            </Card>
          );
        })}
      </div>
      <NavBar
        css={css`
          position: fixed;
          bottom: 0;
          width: 100%;
        `}
      />
    </StyledFollowings>
  );
}

export default Followings;
