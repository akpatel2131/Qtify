import styles from "./Grid.module.css";
import Card from "../Card/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


export default function Grid({ title, url}) {
    const [collapse, setCollapse] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async()=>{
      const result = await axios.get(url);
      setData(result.data);
    }

    useEffect(()=>{
      fetchData();
    },[])

    return (
      <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.album}>{title}</div>
            {collapse ? <button className={styles.Button} onClick={()=> setCollapse(false)}>show all</button> : <button className={styles.Button}onClick={()=> setCollapse(true)}>collapse</button>}
        </div>
        {collapse ?  (
          <div className={styles.scrollContainer}>
            <Swiper 
              navigation={true} 
              slidesPerView={7}
              modules={[Navigation]} 
              className="mySwiper"
              >
              {data.map((item)=>( 
                <SwiperSlide><Card data={item}/></SwiperSlide>
              ))}
            </Swiper> 
          </div>
        ): (
        <div className={styles.grid}>
          {data.map((item)=>( 
          <Card data={item}/>
          ))}
        </div>
        )}
      </div>
    );
  }