import Pagination from '../components/containers/Pagination';
import NavBar from '../components/containers/NavBar';
import Card from '../components/containers/Card';
import Avatar from '../components/UI/Avatar';
import { Content, ContentSmall } from '../components/text/Content';
import Icon from '../components/UI/Icon';

function Favorites() {
    return (
        <section>
            <Pagination />
            <Card type="favorites">
                <div className="info-user">
                    <Avatar src="https://avatars.githubusercontent.com/u/71898894?v=4" measure="40" />
                    <div>
                        <Content>Dan Abramov</Content>
                        <ContentSmall>gaearon</ContentSmall>
                    </div>
                </div>
                <Icon type="star" color="#F2C94C" size="22" />
            </Card>
            <NavBar />
        </section>
    )
}

export default Favorites;