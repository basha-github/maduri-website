import { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Header';

export default function Others() {
    const [data,setData]=useState([]);

    useEffect(()=>{ 
        axios.get("https://jsonfakery.com/photos/paginated")
        .then((result)=>{setData(result.data.data);

        });
    },[])
  return (
    <div>
    <div>
      <Header />
      </div>    
      
<div>

    {data.map((eachdata)=>(
        <div>
          <p>  {eachdata.caption}</p><br></br>
          <p>{eachdata.created_at}</p><br></br>
          <p><img src={eachdata.photo_url} height="100px" width="100px"/></p>
            <br></br>
        </div>
    )
    )}

</div>
    </div>
  )
}
