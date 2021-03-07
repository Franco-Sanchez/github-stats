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

function Pagination({ total, limit, page, onSelectPage }) {
    const pages = Math.ceil(total / limit);
    const listItems = [];

    if(pages > 1 && page > 1) {
        listItems.push(<Icon key="left" type="previous" color="#828282" size="20" onPress={() => onSelectPage(page - 1)}/>)
    } else {
        listItems.push(<Icon key="left" type="previous" color="#828282" size="20" />)
    }

    for(let i = 1; i <= pages; i++) {
        const className = i === page ? 'selected' : '';
        listItems.push(<li key={i} className={className} onClick={() => onSelectPage(i)}>{i}</li>)
    }

    if(pages > 1 && page < pages) {
        listItems.push(<Icon key="right" type="next" color="#828282" size="20" onPress={() => onSelectPage(page + 1)} />)
    } else {
        listItems.push(<Icon key="right" type="next" color="#828282" size="20" />)
    }

    return (
        <StyledPagination>
            {listItems}
        </StyledPagination>
    )
}

export default Pagination;