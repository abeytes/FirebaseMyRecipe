import { projectFirestore } from '../../firebase/config';
import { useEffect, useState} from 'react'
//styles
import './home.css';

// Components
import RecipeList from '../../components/RecipeList';


const Home = () => {
      const [data, setData] = useState(null)
      const [isPending, setIsPending] = useState(false)
      const [error, setError] = useState(null)

    useEffect(() => {
        setIsPending(true)
        // projectFirestore.collection('recipe').get().then((snapshot) => { 
        const livesnap = projectFirestore.collection('recipe').onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError('no recipe data loaded')
                setIsPending(false)
            }
            else {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data() })
                   
                })
                setData(results)
                setIsPending(false)
              
            }
        
        }//.catch(err => {
        //     setError(err.message)
        //     setIsPending(false)
        // })
            ,(err) => {
                setError(err.message)
                setIsPending(false)
        })
        return () =>livesnap();
    },[])
    
    
    return (
        <div className='home-wrapper'>
            {error && <p>couldn't load {error}</p>}
            {isPending && <h1>Loadding</h1>}
            {data && <RecipeList data={data}/>}
        </div>
    );
}

export default Home;
