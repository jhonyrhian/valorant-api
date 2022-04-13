import axios from "axios"
import React from "react"

import "./BaseEstilo.css"

export default function BasePage (props) {
    return(
        <div>
            <div>
                <main>
                    {props.children}
                </main>
            </div>
        </div>
    )
}