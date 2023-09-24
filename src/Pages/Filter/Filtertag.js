import styles from "./FilterFeature.module.css";
import Card from "../Card/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const SwiperTag = ( { value }) =>{

    const [data, setData] = useState([]);

    const fetchData = async()=>{
      const result = await axios.get("https://qtify-backend-labs.crio.do/songs");

      if(value !== "All"){
        const filterResult = result.data.filter((item)=> item.genre.label === value);
        setData(filterResult);
        return;
      }
      setData(result.data);
    }

    useEffect(()=>{
      fetchData();
    },[])

    return (
        <div className={styles.scrollContainer}>
            <Swiper 
              navigation={true} 
              slidesPerView={6}
              modules={[Navigation]} 
              className="mySwiper"
              >
              {data.map((item)=>( 
                <SwiperSlide><Card data={item} inFilter/></SwiperSlide>
              ))}
            </Swiper> 
          </div>
    )

}
const Filtertag = () =>{
    const [value, setValue] = useState('All');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    return (
    <div className={styles.container}>
      <div className={styles.header}>Songs</div>
      <div className={styles.tagContainer}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="All" value="All" />
                <Tab label="Pop" value="Pop" />
                <Tab label="Rock" value="Rock" />
                <Tab label="Jazz" value="Jazz" />
                <Tab label="Blues" value="Blues" />
              </TabList>
            </Box>
            <TabPanel value="All"><SwiperTag value={"All"}/></TabPanel>
            <TabPanel value="Pop"><SwiperTag value={"Pop"}/></TabPanel>
            <TabPanel value="Rock"><SwiperTag value={"Rock"}/></TabPanel>
            <TabPanel value="Jazz"><SwiperTag value={"Jazz"}/></TabPanel>
            <TabPanel value="Blues"><SwiperTag value={"Blues"}/></TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
    )
}


export default Filtertag;