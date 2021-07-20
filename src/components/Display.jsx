import React, {useState, useEffect} from "react"
import axios from "axios"

const Display = props => {
    const [results, setResults] = useState("")
    const [isError, setIsError] = useState(false)
    useEffect(()=>{
        console.log("fuckme")
        axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
        .then(response => {
            console.log(response.data)
            setResults(response.data)
            console.log(results.name)
            setIsError(false)
        })
        .catch(err => {
            console.log(`error: ${err}`)
            setIsError(true)
        })

    },[props.category, props.id, isError])
    
    return(
        <div>
            {isError
           ?<div>
               <img src = {"https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768"}/>
               <p>These are not the droids you are looking for</p>
           </div>
                :<div>{props.category=="people" 
                    ?<div>
                        <h1>{results.name}</h1>
                        <p>Height:{results.height}</p>
                        <p>{results.mass}</p>
                        <p>{results.hair_color}</p>
                        <p>{results.skin_color}</p>
                    </div>
                    :<div>
                        <h1>{results.name}</h1>
                        <p>{results.climate}</p>
                        <p>{results.terrain}</p>
                        {results.surface_water > 0 ? <p>True</p> : <p>False</p>}
                        
                        <p>{results.population}</p>
                    </div>
                }</div>
            }
        </div>
    )
}
export default Display