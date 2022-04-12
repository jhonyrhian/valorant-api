import "./BotaoCirculo.css"

export default function BotaoHome(props){
    return(
        <a href={props.link}><button>{props.children}</button></a>
    )
}