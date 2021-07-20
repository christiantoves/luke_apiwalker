// import axios from 'axios'
import React, {useState} from 'react'
import { navigate } from '@reach/router'

const Form = props => {
    const [inputs, setInputs] = useState({
        category: "people",
        id: ""
      })
      
    const handleChange = e => {
        
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        // console.log(inputs)
    }
    
    const handleSubmit = e =>{
        e.preventDefault()
        navigate(`/${inputs.category}/${inputs.id}`)
        
    }

    return (
        <div>
        <form onSubmit = {handleSubmit}>
            <div>
                <h3>Search For:</h3>
                <select name = "category" onChange = {handleChange}>
                    <option value="people" >People</option>
                    <option value="planets">Planets</option>
                </select>
            </div>
            <div>
                <h3>ID:</h3>
                <input type="number" name="id" onChange = {handleChange}/>
                <button type = "submit">Search</button>
            </div>
        </form>
        </div>
    )
}
export default Form