import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from "axios"
import Title from './Title';

function RepoDetails() {
    const {name} = useParams();
    const [repoData, setRepoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const title = useState("GoDaddy GitHub Repos Details")
    useEffect(()=>{
        const getRepoData = async()=>{
           try {
               const response = await axios(`https://api.github.com/repos/godaddy/${name}`);
               const apiData = response.data;
               setRepoData(apiData)
           } catch (error) {
               console.error('Error fetching repositories details:', error);
           }finally{
               setLoading(false);
           }
               
        }
        getRepoData()
   },[name])
   if (loading){
        return <h4>Loading...</h4>;
   } 
  if (!repoData){
    return <h4>Repository not found</h4>;
  } 
  return (
    <div>
    <Title title={title}/>
    <h3>Repo name: {repoData?.name}</h3>
    <p><strong>Repo Description:</strong> {repoData?.description}</p>
    <p>
      <strong>Language:</strong> {repoData?.language || 'N/A'}
    </p>
    <p>
      <strong>Forks:</strong> {repoData?.forks}
    </p>
    <p>
      <strong>Open Issues:</strong> {repoData?.open_issues}
    </p>
    <p>
      <strong>Watchers:</strong> {repoData?.watchers}
    </p>
    <button className='btn btn-primary'><a href={repoData?.html_url} target="_blank" rel="noopener noreferrer">
      Visit Repo on GitHub
    </a>
    </button>
    <br />
    <br />
    <button className='btn btn-success'><Link to="/">Back to Repo List</Link></button>
  </div>
  )
}

export default RepoDetails