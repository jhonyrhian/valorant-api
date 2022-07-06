import styled from 'styled-components'

const AgentIcon = styled.img`

        width: 50px;
        position: relative;
        filter: brightness(30%) grayscale(70%);
        filter: ${(props)=>{if(props.selecionado == '1'){return 'brightness(100%) grayscale(70%)'}}};
        background-color: #000000aa;
        transition: 0.3s;

        &:hover{
            filter: brightness(100%);
            cursor: pointer;
            opacity: 1.0;
        }

        &:active{
            filter: brightness(15%) grayscale(70%);
            cursor: pointer;
            transition: 0.13s;
        }

`

export default AgentIcon