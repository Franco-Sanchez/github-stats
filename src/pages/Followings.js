import { css } from "@emotion/react";
import NavBar from "../components/containers/NavBar";
import Pagination from "../components/containers/Pagination";
import Card from "../components/containers/Card";
import Avatar from "../components/UI/Avatar";
import { Content } from "../components/text/Content";
import styled from "@emotion/styled";
import { Heading2 } from "../components/text/Heading";
import { useEffect, useState } from "react";
import GithubServices from "../services/githubServices";

const StyledFollowings = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 16px 0 18% 0;

  & > .container-followings {
    margin-top: 20px;
    display: grid;
    justify-items: center;
    row-gap: 16px;
  }
`;

function Followings({ match, history, location }) {
  const [data, setData] = useState([]);
  const limit = 7;
  const currentPage = parseInt(location.search.slice(1).split("=")[1]) || 1;
  console.log(currentPage);

  useEffect(() => {
    async function fetchFollowing() {
      const gh = new GithubServices();
      const following = await gh.following(match.params.username);
      setData(following);
    }
    fetchFollowing();
  }, []);

  return (
    <StyledFollowings>
      <Heading2
        css={css`
          margin-left: 32px;
        `}
      >
        Followings ({data.length})
      </Heading2>
      <div className="container-followings">
        <Pagination
          total={data.length}
          limit={limit}
          page={currentPage}
          onSelectPage={(pageNum) => {
            history.push(`${location.pathname}?=${pageNum}`);
          }}
        />
        {data
          .slice((currentPage - 1) * limit, currentPage * limit)
          .map((following) => {
            return (
              <Card type="follow" key={following.login}>
                <Avatar src={following.avatar_url} measure="40" />
                <Content>{following.login}</Content>
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
