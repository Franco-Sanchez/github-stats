import { css } from '@emotion/react';
import NavBar from "../components/containers/NavBar";
import Card from '../components/containers/Card';
import { Heading2 } from '../components/text/Heading';
import Icon from '../components/UI/Icon';
import { Content } from '../components/text/Content'; 

function Search() {
  return (
    <section>
        <div>
            <Card type="default">
                <Icon type="followers" color="#2D9CDB" size="50"/>
                <Heading2>64k</Heading2>
                <Content>followers</Content>
            </Card>
            <Card type="default">
                <Icon type="following" color="#F2994A" size="50" />
                <Heading2>171</Heading2>
                <Content>followings</Content>
            </Card>
            <Card type="default">
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
        <NavBar css={css`
            position: fixed;
            bottom: 0;
            width: 100%;
        `} />
    </section>
  );
}

export default Search;
