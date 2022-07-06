import styled from 'styled-components'

const TextWrapperStyled = styled.div`

    position: absolute;
    top: 120px;
    right: 0;
    z-index: -2;
    font-family: 'Archivo Black', sans-serif;
    font-size: 27px;
    width: 760px;
    padding-right: 16px;
    margin-right: 16px;

    button{
        margin: 20px 50px;
    }

    .nome{
        display: inline;
        font-family: 'VALORANT', sans-serif;
        font-size: 60px;
        font-weight: 900;
    }

    .descricao{
    line-height: 35px;
    }

`

export default TextWrapperStyled