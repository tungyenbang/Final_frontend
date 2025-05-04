import { Col } from "antd"
import styled from "styled-components"

export const WrapperProducts = styled.div`
    display: flex;
    gap: 12px;
    margin-top:20px;
    flex-wrap: wrap;
`

export const WrapperNavbar = styled(Col)`
    background: #fff; 
    margin-right: 10px;
    padding: 10px;
    border-radius: 4px;
    height: fit-content;
    margin-top:20px;
    width: 200px;
`
export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 24px;
    justify-content: flex-start;
    height: 40px;
    margin-left: 8%;
`