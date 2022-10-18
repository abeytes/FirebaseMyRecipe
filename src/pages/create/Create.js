import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";

import "./create.css";

const Create = () => {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngrident, setNewIngrident] = useState('')
    const [ingrident, setIngrident] = useState([])
    const ingridentInput = useRef
    const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const doc = { title, ingrident, cookingTime, method }
        
        try {
            await projectFirestore.collection('recipe').add(doc)
            history.push('/')
        } catch (err) {
            console.log(err)
        }
    } 
    const handleAdd = (e) => {
        e.preventDefault()
        const ing = newIngrident.trim()
        if (ing && !ingrident.includes(ing)) {
            setIngrident(prevIngrident =>[...prevIngrident, ing])
        }
        setNewIngrident('')
    }
  

    return (
        <div className="create">
            <h2>Add a new User</h2>

            <form  onSubmit={handleSubmit} className="forms">
                <label>
                    <span>Recipe</span>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />  
                </label>
                <label >
                    <span>Ingrident</span>
                    <div div className = "ingridentAdd" >
                        <input
                            type="text"
                            onChange={(e) => setNewIngrident(e.target.value)}
                            value={newIngrident}
                        />
                        <button
                            className="btn" onClick={handleAdd} >Add</button>
                    </div>
                    <p className="List">List : {ingrident.map(item => (<em key={item}>-{item} </em>))}</p>
                </label>
                <label>
                    <span>Cooking Time</span>
                    <input
                        type="number"
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                         requierd
                    />   
                </label>
                <button className="btn">Submit</button>
            </form>
           
        </div>
    );
}

export default Create;
