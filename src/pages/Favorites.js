import { css } from "@emotion/react";
import Pagination from "../components/containers/Pagination";
import NavBar from "../components/containers/NavBar";
import Card from "../components/containers/Card";
import Avatar from "../components/UI/Avatar";
import { Heading2 } from "../components/text/Heading";
import { Content, ContentSmall } from "../components/text/Content";
import Icon from "../components/UI/Icon";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { toggleFavorite } from "../helpers/favorites";

const StyledFavorites = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 16px 0 18% 0;

  & > .container-favorites {
    margin-top: 20px;
    display: grid;
    justify-items: center;
    row-gap: 16px;
  }
`;

function Favorites({ history, location }) {
  let [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const limit = 7;
  const currentPage = parseInt(location.search.slice(1).split("=")[1]) || 1;

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <StyledFavorites>
      <Heading2
        css={css`
          margin-left: 32px;
        `}
      >
        Favorites ({favorites.length})
      </Heading2>
      <div className="container-favorites">
        <Pagination
          total={favorites.length}
          limit={limit}
          page={currentPage}
          onSelectPage={(pageNum) => {
            history.push(`/favorites?page=${pageNum}`);
          }}
        />
        {favorites
          .slice((currentPage - 1) * limit, currentPage * limit)
          .map((favorite) => {
            return (
              <Card type="favorites" key={favorite.login}>
                <div className="info-user">
                  <Avatar src={favorite.avatar_url} measure="40" />
                  <div>
                    <Content>{favorite.name}</Content>
                    <ContentSmall>{favorite.login}</ContentSmall>
                  </div>
                </div>
                <Icon
                  onPress={() =>
                    toggleFavorite(favorites, favorite, setFavorites)
                  }
                  type="star"
                  color="#F2C94C"
                  size="22"
                />
              </Card>
            );
          })}
        <NavBar
          css={css`
            position: fixed;
            bottom: 0;
            width: 100%;
          `}
        />
      </div>
    </StyledFavorites>
  );
}

export default Favorites;
