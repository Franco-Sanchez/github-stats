import { css } from "@emotion/react";
import styled from "@emotion/styled";

const base = css`
    font-size: 20px;
    line-height: 25px;
`

const StyledInput = styled.input`
    width: 213px;
    height: 33px;
    background-color: #FFFFFF;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    outline: none;
    border: none;
    padding: 4px 8px;
    text-align: center;
    ${base}
    &::placeholder { 
        color: #BDBDBD;
        ${base}
    }
    &:focus {
        border: 1px solid #2D9CDB;
    }
`

function Input(props) {
    return <StyledInput {...props} />
}

export default Input;