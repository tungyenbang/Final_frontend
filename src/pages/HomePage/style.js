import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 24px;
    justify-content: flex-start;
    height: 40px;
    margin-left: 8%;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: #9255FD;
        span {
            color: #fff;
        }
    }
    width: 100%;
    color: #9255FD;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`

export const WrapperProducts = styled.div`
    display: flex;
    gap: 100px;
    margin-top:30px;
    flex-wrap: wrap;
`