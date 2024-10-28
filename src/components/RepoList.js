import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import Title from './Title';

function RepoList() {
    const [repoData, setRepoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const title = useState("GoDaddy GitHub Repos List")
    
    useEffect(()=>{
         const getRepoData = async()=>{
            try {
                const response = await axios("https://api.github.com/orgs/godaddy/repos");
                const apiData = response.data;
                setRepoData(apiData)
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }finally{
                setLoading(false);
            }
                
         }
         getRepoData()
    },[])
    if(loading){
        return <h4>Data Loading.....</h4>
    }
  return (
    <div>
       <Title title={title}/>
        <ul>
        {
            repoData.length>0 ? repoData.map((res)=>(
                <li key={res.id}>
                    <Link to={`/repo/${res.name}`}>{res.name}</Link>
                </li>
            )):""
        }
        </ul>
    </div>
  )
}

export default RepoList