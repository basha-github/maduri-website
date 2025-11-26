import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

interface MyData{
caption:string,
created_at:string
photo_url:string
}


export default function Home() {
  const [name, setName] = useState<MyData[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonfakery.com/photos/simple-paginate")
      .then((result) => {
        setName(result.data.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <div>
        {name.map((eachname) => (
          <div>
            <p>{eachname.caption}</p>
            <br></br>
            <p> {eachname.created_at}</p>
            <br></br>
            <p>
              {" "}
              <img src={eachname.photo_url} height="100px" width="100px" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
