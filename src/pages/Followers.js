import { css } from '@emotion/react';
import Pagination from "../components/containers/Pagination";
import NavBar from '../components/containers/NavBar';
import Card from '../components/containers/Card';
import Avatar from '../components/UI/Avatar';
import { Content } from '../components/text/Content';

function Followers() {
    return (
        <section>
            <Pagination />
            <Card type="follow">
                <Avatar src="" measure="40" />
                <Content>LazyBwoy</Content>
            </Card>
            <NavBar css={css`
                position: fixed;
                bottom: 0;
                width: 100%;
            `} />
        </section>
    )
}

export default Followers;