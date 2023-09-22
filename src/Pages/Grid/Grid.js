import styles from "./Grid.module.css";
import Card from "../Card/Card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Grid() {
    const [collapse, setCollapse] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async()=>{
      const result = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
      console.log({ result });
      setData(result.data);
    }

    useEffect(()=>{
      fetchData();
    },[])

    return (
      <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.album}>Top Album</div>
            {collapse ? <button className={styles.Button}>collapse</button> : <button>show all</button>}
        </div>
        <div className={styles.grid}>
          {data.map((item)=>( 
          <Card data={item}/>
          ))}
        </div>
      </div>
    );
  }