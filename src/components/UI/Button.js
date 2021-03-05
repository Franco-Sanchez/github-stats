import styled from '@emotion/styled';

const StyledButton = styled.button`
    padding: 8px 16px;
    background-color: #2D9CDB;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #2DB2DB;
    }
`

function Button(props) {
    return <StyledButton {...props} />
}

export default Button;