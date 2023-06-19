import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';

import { Box } from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';


const ChannelDetail = () => {
  const[channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])
  const params = useParams();
  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${params.id}`)
    .then((data) => {
      setChannelDetail(data?.items[0])
    } )

    fetchFromAPI(`search?channelId=${params.id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data?.items)
      })

  }, [params.id]);

   return (
    <Box minHeight= "95vh">
     <Box>
      <div style={{backgroundColor: 'white', zIndex: 10, height: "300px"}}/>
      <ChannelCard channelDetail={channelDetail}>

      </ChannelCard>
     </Box>
    </Box>
  )
}

export default ChannelDetail