import  { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header';

export default function Product() {

    const[data,setData]=useState([]);

    useEffect(()=>{

        axios.get("https://jsonfakery.com/photos/paginated")
        .then((result)=>{setData(result.data.data);

        });
    },[]);


  return (
    <div>
       <div>
<Header />

       </div>
    
    {data.map((eachdata)=>(
        <div>
           <p> {eachdata.caption};<br></br></p>
           <p> {eachdata.id};<br></br></p>
            <img src={eachdata.photo_url}height="100px" width="100px"/>
            <br></br>
        </div>

    )
)}
  </div>
  
  )
}
