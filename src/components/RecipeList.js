import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
//style
import './recipelist.css';
import Trash from '../asset/Trash.svg'

export default function RecipeList({ data }) {
    
    const handleClick = (id) => {
        projectFirestore.collection('recipe').doc(id).delete()
}
  return (
      <div className="wrapper">
       {data.map(val => (
                <div key={val.id} className='card-container'>
                    <h1>{val.title}</h1>
                    <p>{val.cookingTime}</p>
               <p>{val.ingrident}</p>           
               <div className="recipe-link"><Link to={`/recipe/${val.id}`} >Clike here</Link></div>
               < img className="deletsvg"
                   src={Trash}
                   onClick={() => handleClick(val.id)}
               />
                </div>
       ))}
      </div>
  )
}
