import styled from "@emotion/styled";
import Icon from '../UI/Icon';

const StyledPagination = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 202px;
    height: 30px;
    gap: 4px;
    padding: 5px 0;

    li {
        color: #4F4F4F;
        padding: 1px 8px;
    }

    li.selected {
        color: white;
        width: 26px;
        height: 22px;
        border-radius: 50px;
        background-color: #2D9CDB;
    }
`

function Pagination() {
    return (
        <StyledPagination>
            <Icon type="previous" color="#828282" size="20" />
                <li className="selected">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                {/* Recorrer li con un arreglo */}
            <Icon type="next" color="#828282" size="20" />
        </StyledPagination>
    )
}

export default Pagination;