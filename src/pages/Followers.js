import { css } from "@emotion/react";
import Pagination from "../components/containers/Pagination";
import NavBar from "../components/containers/NavBar";
import Card from "../components/containers/Card";
import Avatar from "../components/UI/Avatar";
import { Heading2 } from "../components/text/Heading";
import { Content } from "../components/text/Content";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import GithubServices from "../services/githubServices";

const StyledFollowers = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 16px 0 18% 0;

  & > .container-followers {
    margin-top: 20px;
    display: grid;
    justify-items: center;
    row-gap: 16px;
  }
`;

function Followers({ match }) {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchFollowers() {
      const gs = new GithubServices();
      const followers = await gs.followers(match.params.username)
      setData(followers);
    }
    fetchFollowers();
  }, []);

  return (
    <StyledFollowers>
      <Heading2
        css={css`
          margin-left: 32px;
        `}
      >
        Followers ({data.length})
      </Heading2>
      <div className="container-followers">
        <Pagination />
        {data.map((follower) => {
          return (
            <Card type="follow" key={follower.login}>
              <Avatar src={follower.avatar_url} measure="40" />
              <Content>{follower.login}</Content>
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
    </StyledFollowers>
  );
}

export default Followers;
