import styled from "styled-components";

// var cores = ["#111111","#2b75ff","#ff2277","#00ba47","#f2aa02"]

const StyledCheckbox = styled.label`
    
    margin: 0;
    margin-left: 30px;
    width: 3.3rem;
    height: 1.8rem;
    background-color: red;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.4s;
    position: relative;

    p{
        font-family: arial;
        font-weight: 700;
        position: absolute;
        top: -70%;
    }

    .texto2D{
        left: 4px;
        margin-right: 3px;
    }
    .texto3D{
        left: 25px;
        margin-left: 3px;
    }

    input{
        margin: 0;
        width: 3.3rem;
        height: 1.8rem;
        cursor: pointer;
        appearance: none;
        border-radius: 50px;
        position: absolute;
        background-color: red;
        transition: 0.4s;
        margin: 0;
    }

    span{
        z-index: 1;
        height: 1.4em;
        width: 1.4em;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        top: 14.1%;
        left: 3px;
        transform: scale(1.1);
        transition: 0.43s;
    }

    input:checked + span{
        background-color: #fff;
        /* left: 54%; */
        left: 26px;
    }

`

export default StyledCheckbox