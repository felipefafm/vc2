import React from "react"
import { PuffLoader } from "react-spinners"

const Loader=()=>{
    return(
        <div>
            <PuffLoader  color="yellow" aria-label="Loading"/>
        </div>
    )
}
export default Loader