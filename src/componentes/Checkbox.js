
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import StyledCheckbox from './StyledCheckbox'

export default function Checkbox(props){
    if(props.indice == '1'){
        return(
            <StyledCheckbox onChange={props.onChangeFunction}>
                <input checked type="checkbox"/>
                <span/>
                <p className="texto3D">3D</p>
                <p className="texto2D">2D</p>
            </StyledCheckbox>
        )
    }
    else{
        return(
            <StyledCheckbox onChange={props.onChangeFunction}>
                <input type="checkbox"/>
                <span/>
                <p className="texto3D">3D</p>
                <p className="texto2D">2D</p>
            </StyledCheckbox>
        )
    }
}