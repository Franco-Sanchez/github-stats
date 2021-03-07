import { css } from "@emotion/react";
import NavBar from "../components/containers/NavBar";
import Pagination from "../components/containers/Pagination";
import Card from "../components/containers/Card";
import { ContentBold, ContentSmall } from "../components/text/Content";
import { Heading2 } from "../components/text/Heading";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import GithubServices from '../services/githubServices';
import FooterRepos from "../components/containers/FooterRepos";

const StyledRepos = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 16px 0 18% 0;

  & > .container-repos {
    margin-top: 20px;
    display: grid;
    justify-items: center;
    row-gap: 16px;
  }
`;

function Repos({ match }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      const gh = new GithubServices();
      const repos = await gh.repos(match.params.username);
      setData(repos);
    }
    fetchRepos();
  },[])

  return (
    <StyledRepos>
      <Heading2
        css={css`
          margin-left: 32px;
        `}
      >
        Public Repos ({data.length})
      </Heading2>
      <div className="container-repos">
        <Pagination />
        {data.map(repo => {
          return (
            <Card type="repos" onPress={() => window.open(repo.html_url, '_blank')}>
              <ContentBold
                css={css`
                  color: #2d9cdb;
                `}
              >
                {repo.full_name.length <= 25 ?  repo.full_name : `${repo.full_name.slice(0, 25)}...`}
              </ContentBold>
              <ContentSmall>
                {repo.description}
              </ContentSmall>
              <FooterRepos language={repo.language} stars={repo.stargazers_count} forks={repo.forks_count} />
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
    </StyledRepos>
  );
}

export default Repos;
