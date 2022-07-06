import BasePage from "./BasePage";
import {ImSpinner2} from 'react-icons/im'

import "./BaseEstilo.css"
import "./LoadingScreen.css"

export default function LoadingScreen(){
    return(
    <div className="loading">
        <p>Aguarde um instante...</p>
        <ImSpinner2 color='white' size='5rem' className="spinner" />
    </div>)
}