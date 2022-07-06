import styled from 'styled-components';

const PickTable = styled.ul`

    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 370px;
    position: absolute;
    bottom: 0;


    li{
        border: 3px solid #fff;
        height: 50px;
        margin: -1px -1px;
    }

    img{
        width: 50px;
        position: relative;
        filter: brightness(30%) grayscale(70%);
        background-color: #000000aa;
        transition: 0.3s;
        /* opacity: 0.7; */
    }

        img:hover{
            filter: brightness(100%);
            cursor: pointer;
            opacity: 1.0;
        }

        img:active{
            filter: brightness(15%) grayscale(70%);
            cursor: pointer;
            transition: 0.13s;
        }

`

export default PickTable