import { css } from "@emotion/react";
import NavBar from "../components/containers/NavBar";
import Card from "../components/containers/Card";
import { Heading2 } from "../components/text/Heading";
import Icon from "../components/UI/Icon";
import { Content, ContentLargeBold } from "../components/text/Content";
import Input from "../components/form/Input";
import { useEffect, useState } from "react";
import Avatar from "../components/UI/Avatar";
import styled from "@emotion/styled";
import GithubServices from "../services/githubServices";
import { getFavorite, toggleFavorite } from '../helpers/favorites';

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

const getLocationQuery = (location) => {
  const values = location.search.slice(1);
  const value = values.split("=")[1];
  return value || "";
};

function Search({ history, location }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [query, setQuery] = useState(getLocationQuery(location));
  let [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const noUser = () => {
    setData(null);
    setLoading(false);
  };

  useEffect(() => {
    let timerID;
    if (query === "") {
      noUser();
      history.push(`/search`);
    } else {
      setLoading(true);
      async function fetchProfile() {
        const gs = new GithubServices();
        const profile = await gs.profile(query);
        if (profile.message === "Not Found") {
          noUser();
        } else {
          setData(profile);
          setLoading(false);
        }
        history.push(`/search?username=${query}`);
      }
      timerID = setTimeout(fetchProfile, 1000);
    }
    return () => clearTimeout(timerID);
  }, [query]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

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
    const cards = [
      {
        color: "#2D9CDB",
        content: "followers",
        info: "followers",
        type: "followers",
      },
      {
        color: "#F2994A",
        content: "following",
        info: "following",
        type: "followings",
      },
      {
        color: "#219653",
        content: "public repos",
        info: "public_repos",
        type: "repos",
      },
      {
        color: "#828282",
        content: "public gists",
        info: "public_gists",
        type: "gists",
      },
    ];

    return (
      <>
        <Avatar src={data.avatar_url} measure="120" />
        <div className="info-user">
          <ContentLargeBold>{data.name}</ContentLargeBold>
          <Icon
            onPress={() => toggleFavorite(favorites, data, setFavorites)}
            type={getFavorite(favorites, data) ? 'star' : "starLine"}
            color={getFavorite(favorites, data) ? '#F2C94C' : "#828282"}
            size="25"
          />
        </div>
        <Content
          css={css`
            text-align: center;
            width: 360px;
          `}
        >
          {data.bio}
        </Content>
        <div className="container-cards">
          {cards.map((card) => {
            return (
              <Card
                key={card.type}
                type="default"
                onPress={() =>
                  card.type !== "gists"
                    ? history.push(`users/${query}/${card.type}`)
                    : ""
                }
              >
                <Icon type={card.type} color={card.color} size="50" />
                <Heading2>{data[card.info]}</Heading2>
                <Content>{card.content}</Content>
              </Card>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <StyledSearch>
      <Input
        value={query}
        type="text"
        placeholder="username"
        onChange={(e) => setQuery(e.target.value)}
      />
      {!data && <NoData />}
      {data && <Profile />}
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
