import axios from "axios"
import React from "react"

export default function BasePage (props) {
    return(
        <div>
            <div>
                {props.children}
            </div>
        </div>
    )
}