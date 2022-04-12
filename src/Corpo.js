import React from "react";
import axios from "axios";

import BasePage from "./BasePage";
import LoadingScreen from "./LoadingScreen";
import BotaoHome from "./BotaoHome"
import {BsHouseDoor} from "react-icons/bs";


// import "./BaseEstilo.css"
import "./Corpo.css"


export default class Corpo extends React.Component{



    state={
        resposta: null
    }
    AgentsId = {
        "Astra": "41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
        "Breach": "5f8d3a7f-467b-97f3-062c-13acf203c006",
        "Brimstone": "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
        "Chamber": "22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
        "Cypher": "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
        "Jett": "add6443a-41bd-e414-f6ad-e58d267f4e95",
        "Kayo": "601dbbe7-43ce-be57-2a40-4abd24953621",
        "Killjoy": "1e58de9c-4950-5125-93e9-a0aee9f98746",
        "Neon": "bb2a4828-46eb-8cd1-e765-15848195d751",
        "Omen": "8e253930-4c05-31dd-1b6c-968525494517",
        "Phoenix": "eb93336a-449b-9c1b-0a54-a891f7921d69",
        "Raze": "f94c3b30-42be-e959-889c-5aa313dba261",
        "Reyna": "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
        "Sage": "569fdd95-4d10-43ab-ca70-79becc718b46",
        "Skye": "6f2a04ca-43e0-be17-7f36-b3908627744d",
        "Sova": "ded3520f-4264-bfed-162d-b080e2abccf9",
        "Viper": "707eab51-4836-f488-046a-cda6bf494859",
        "Yoru": "7f94d92c-4234-0a36-9646-3a87eb8b5c89",

    }
    componentDidMount(){
        var agentid = new URLSearchParams(window.location.search).get("agentid")
        
        // axios.get("https://valorant-api.com/v1/agents/"+this.AgentsId.Yoru)
        axios.get("https://valorant-api.com/v1/agents/"+agentid)
        .then((response) => {
            var resposta = response.data.data
            
            this.setState({resposta: resposta})
        })
    }

    render() {
        if(this.state.resposta == null){
            return (
                <BasePage>
                    <LoadingScreen/>
                </BasePage>
            )
        }

    return (
        <BasePage>
            <div className="container">
                <div id="imagens">
                    <img src={this.state.resposta.fullPortraitV2} id="foto"></img>
                    <img src={this.state.resposta.fullPortraitV2} id="foto2"></img>
                    <img src={this.state.resposta.background} id="bg"></img>
                </div>

                <BotaoHome link="/selection"><BsHouseDoor color='white' size='3rem' /></BotaoHome>
                <div id="textos">
                <p id="nome">{this.state.resposta.displayName}</p>
                <p id="descricao">{this.state.resposta.description}</p>
                </div>
            </div>
        </BasePage>
    )}
}