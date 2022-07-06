import React from "react";
import axios from "axios";
import {useState, useEffect} from "react"
import PickTable from "../componentes/PickTable"
import AgentPicDiv from "../componentes/AgentPicDiv"
import TextWrapperStyled from "../componentes/TextWrapperStyled"
import Checkbox from "../componentes/Checkbox"

import BasePage from "../BasePage";
import LoadingScreen from "../LoadingScreen";

import "../Selecao.css"



// import "../Selecao.css"

import Card from "../Card"

export default function AgentPicker(){

    const [resposta, setResposta] = useState(null)
    const [indice, setIndice] = useState('0')
    const [img, setImg] = useState('')
    const [img3D, setImg3D] = useState('')
    const [foto, setFoto] = useState('')
    const [imgBG, setImgBG] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')

    var AgentsId = ["41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
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

    useEffect(()=>{
        if(resposta == null){
        axios.get("https://valorant-api.com/v1/agents")
        .then((response)=>{
            // var resposta = response.data.data
            setResposta(response.data.data)
            console.log(resposta)
        })}
    })

        function defineAgente(foto, foto3D, BG, nome, descricao){
            if(indice == '0'){
                setFoto(foto)
            }else{
                setFoto(foto3D)
            }
            setImg(foto)
            setImg3D(foto3D)
            setImgBG(BG)
            setNome(nome)
            setDescricao(descricao)
        }

        function trocaDimensao(){
            if(indice == '0'){
                setFoto(img3D)
                setIndice('1')
                console.log("3D")
            }else{
                setFoto(img)
                setIndice('0')
                console.log("2D")
            }
        }
       

        if(resposta == null){
            return (
                <BasePage>
                    <LoadingScreen/>
                </BasePage>
            )
        }
    return (
        <BasePage>
        <Checkbox indice={indice} onChangeFunction={trocaDimensao}></Checkbox>
            <div className="selecao_container">
                
                <h2>Select your agent</h2>
                <AgentPicDiv nome={nome} src={foto} ></AgentPicDiv>
                <AgentPicDiv posicao= "BG" src={imgBG} ></AgentPicDiv>
                <TextWrapperStyled>
                    <p className="nome">{nome}</p>
                    <p className="descricao">{descricao}</p>
                </TextWrapperStyled>
                <PickTable>
                {resposta.filter((perso)=>{
                        return perso.isPlayableCharacter==true
                    }).map((dictAgents)=>{
                        // return <Card ><a onClick={()=>{setImg(dictAgents.fullPortraitV2);setImgBG(dictAgents.background)}} /*href={"/agent/?agentid="+dictAgents.uuid}*/><img src={dictAgents.displayIcon}/></a></Card>
                        // return <Card ><img src={dictAgents.displayIcon} onClick={()=>{setImg(dictAgents.fullPortraitV2);setImgBG(dictAgents.background)}}/></Card>
                        return <Card ><img src={dictAgents.displayIcon}      onClick={()=>{defineAgente(dictAgents.fullPortraitV2, dictAgents.fullPortrait, dictAgents.background, dictAgents.displayName, dictAgents.description)}}/></Card>
                    })}
                </PickTable>
            </div>
        </BasePage>
    )}
