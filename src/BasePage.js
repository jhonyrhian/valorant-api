import axios from "axios"
import React from "react"

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