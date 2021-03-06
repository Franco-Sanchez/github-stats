import NavBar from "../components/containers/NavBar";
import Pagination from "../components/containers/Pagination";
import Card from '../components/containers/Card';
import { ContentBold, ContentSmall } from '../components/text/Content';

function Repos() {
    return (
        <section>
            <Pagination />
            <Card type="repos">
                <ContentBold color="#2D9CDB">gaearon/6to5</ContentBold>
                <ContentSmall>Turn ES6+ code into readable vanilla ES5 with source maps and more!</ContentSmall>
                <div></div>
            </Card>
            <NavBar />
        </section>
    )
}

export default Repos;