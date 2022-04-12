import React from "react";
import axios from "axios";
import {Helmet} from "react-helmet";

import BasePage from "./BasePage";
import LoadingScreen from "./LoadingScreen";

 import "./BaseEstilo.css"
import "./Selecao.css"
import Card from "./Card"

export default class Selecao extends React.Component {

    state={
        resposta: null
    }
    AgentsId = ["41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
                "5f8d3a7f-467b-97f3-062c-13acf203c006",
                "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
                "22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
                "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
                "add6443a-41bd-e414-f6ad-e58d267f4e95",
                "601dbbe7-43ce-be57-2a40-4abd24953621",
                "1e58de9c-4950-5125-93e9-a0aee9f98746",
                "bb2a4828-46eb-8cd1-e765-15848195d751",
                "8e253930-4c05-31dd-1b6c-968525494517",
                "eb93336a-449b-9c1b-0a54-a891f7921d69",
                "f94c3b30-42be-e959-889c-5aa313dba261",
                "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
                "569fdd95-4d10-43ab-ca70-79becc718b46",
                "6f2a04ca-43e0-be17-7f36-b3908627744d",
                "ded3520f-4264-bfed-162d-b080e2abccf9",
                "707eab51-4836-f488-046a-cda6bf494859",
                "7f94d92c-4234-0a36-9646-3a87eb8b5c89"]

    componentDidMount(){
        axios.get("https://valorant-api.com/v1/agents")
        .then((response)=>{
            var responsta = response.data.data
            this.setState({resposta: responsta})
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
            <div className="selecao_container">
                
                <h2>Select your agent</h2>
                <ul>
                    {this.state.resposta.filter((perso)=>{
                        return perso.isPlayableCharacter==true
                    }).map((dictAgents)=>{
                        return <Card><a href={"/agent/?agentid="+dictAgents.uuid }><img src={dictAgents.displayIcon}></img></a><p id="agentnome">{dictAgents.displayName}</p></Card>
                    })}
                </ul>
            </div>
        </BasePage>
    )}
}