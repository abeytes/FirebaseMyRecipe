import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import firebase from 'firebase'

import { projectFirestore } from '../../firebase/config'
//style
import "./recipe.css"


export default function Recipe() {
    const { id } = useParams( )
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setIsPending(true)
        projectFirestore.collection('recipe').doc(id).get().then((doc) => {
            if (doc.exists) {
                setIsPending(false)
                setData(doc.data())
            } else {
                setIsPending(false)
                setError("Data doesnt exit")
            }
            
        }).catch(err => {
            setError(err.message)
            setIsPending(false)
        })
            
        },[])
 

  return (
      <div className='recipe-wrapper'>
          {error && <p className='error'>{error}</p>}
          {isPending && <p className='loading'>Loadding...</p>}
          {data && (
              <div>
                  <h1>{data.title}</h1>
                  <p>{data.cookingTime} minutes</p>
                  <ol>{data.ingrident.map((val, key) => (<li key={key}>{val}</li>)
                      
                  )}</ol>
              </div>     
          )}
          
    </div>
  )
}

