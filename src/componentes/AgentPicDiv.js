import styled from 'styled-components'

const AgentPicDiv = styled.img`

    position: absolute;
    z-index: ${props =>{if(props.posicao == "BG"){return "-2"}else{return "-1"}}};
    width: ${props =>{if(props.posicao == "BG"){return "500px"}else{return "600px;"}}};
    bottom: ${props =>{if(props.posicao == "BG"){return "0"}else{return "50px"}}};
    left: ${props =>{if(props.posicao == "BG"){return "78px"}else{return "70px"}}};
    filter: ${props =>{if(props.posicao == "BG"){return "blur(1px) opacity(70%)"}}};
    

    &:hover{
        z-index: 5;
        transition: 0.4s;
    }

`

export default AgentPicDiv