import { css } from "@emotion/react";
import NavBar from "../components/containers/NavBar";
import Pagination from "../components/containers/Pagination";
import Card from "../components/containers/Card";
import { ContentBold, ContentSmall } from "../components/text/Content";
import { Heading2 } from "../components/text/Heading";
import styled from "@emotion/styled";

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

function Repos({ history }) {
  const repos = [1, 2, 3, 4, 5];
  return (
    <StyledRepos>
      <Heading2
        css={css`
          margin-left: 32px;
        `}
      >
        Public Repos (249)
      </Heading2>
      <div className="container-repos">
        <Pagination />
        {repos.map((_repo) => {
          return (
            <Card type="repos">
              <ContentBold
                css={css`
                  color: #2d9cdb;
                `}
              >
                gaearon/6to5
              </ContentBold>
              <ContentSmall>
                Turn ES6+ code into readable vanilla ES5 with source maps and
                more!
              </ContentSmall>
              <div></div>
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
