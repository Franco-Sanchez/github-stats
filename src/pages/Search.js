import { css } from "@emotion/react";
import NavBar from "../components/containers/NavBar";
import Card from "../components/containers/Card";
import { Heading2 } from "../components/text/Heading";
import Icon from "../components/UI/Icon";
import { Content, ContentLargeBold } from "../components/text/Content";
import Input from "../components/form/Input";
import { useState } from "react";
import Avatar from "../components/UI/Avatar";
import styled from "@emotion/styled";

const StyledSearch = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 32px 0 18% 0;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;

  & > .info-user {
    display: flex;
    column-gap: 4px;
  }

  & > .container-cards {
    display: grid;
    grid-template-columns: repeat(2, 140px);
    gap: 16px;
  }
`;

function Search({ history }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");

  const NoData = () => {
    return (
      <>
        <Icon type="github" size="120" />
        <ContentLargeBold>
          {loading ? "Retrieving user..." : "No users..."}
        </ContentLargeBold>
      </>
    );
  };

  const Profile = () => {
    return (
      <>
        <Avatar src="" measure="120" />
        <div className="info-user">
          <ContentLargeBold>Dan Abramov</ContentLargeBold>
          <Icon type="starLine" color="#828282" size="25" />
        </div>
        <Content
          css={css`
            text-align: center;
            width: 360px;
          `}
        >
          Working on @reactjs. Co-author of Redux and Create React App. Building
          tools for humans.
        </Content>
        <div className="container-cards">
          <Card
            type="default"
            onPress={() => history.push("/users/example/followers")}
          >
            <Icon type="followers" color="#2D9CDB" size="50" />
            <Heading2>64k</Heading2>
            <Content>followers</Content>
          </Card>
          <Card
            type="default"
            onPress={() => history.push("/users/example/followings")}
          >
            <Icon type="following" color="#F2994A" size="50" />
            <Heading2>171</Heading2>
            <Content>followings</Content>
          </Card>
          <Card
            type="default"
            onPress={() => history.push("/users/example/repos")}
          >
            <Icon type="repos" color="#219653" size="50" />
            <Heading2>249</Heading2>
            <Content>public repos</Content>
          </Card>
          <Card type="default">
            <Icon type="gists" color="#828282" size="50" />
            <Heading2>72</Heading2>
            <Content>public gists</Content>
          </Card>
        </div>
      </>
    );
  };

  return (
    <StyledSearch>
      <Input type="text" placeholder="username" />
      {!data && NoData()}
      {data && Profile()}
      <NavBar
        css={css`
          position: fixed;
          bottom: 0;
          width: 100%;
        `}
      />
    </StyledSearch>
  );
}

export default Search;
