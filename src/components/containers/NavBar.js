import Icon from "../UI/Icon";
import styled from "@emotion/styled";
import { useHistory, useLocation } from "react-router-dom";

const StyledNavBar = styled.div`
  height: 66px;
  display: flex;
  justify-content: center;
  padding: 8px 0;
  box-shadow: 0px -2px 0px rgba(0, 0, 0, 0.25);
  ${(props) => (props.css ? props.css : "")}

  .container__icons {
    width: 250px;
    display: flex;
    justify-content: space-between;
  }
`;

function NavBar({ css }) {
  const history = useHistory(null);
  const location = useLocation(null);
  const pages = ["home", "search", "favorites"];
  const redirectPages = {
      home: '/',
      search: '/search',
      favorites: '/favorites'
  }
  return (
    <StyledNavBar css={css}>
      <div className="container__icons">
        {pages.map((page) => {
          return (
            <Icon
              onPress={() => history.push(redirectPages[page])}
              key={page}
              type={page === "favorites" ? "star" : page}
              color={redirectPages[page] === location.pathname ? '#828282' : "#BDBDBD" }
              size="48"
            />
          );
        })}
      </div>
    </StyledNavBar>
  );
}

export default NavBar;