import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  // console.log(videoId, snippet);
  // console.log(snippet?.thumbnails?.high?.url)
  return (
    <Card sx={{ border: "none", width: { xs: "100%", sm: "300px", md: "320px" }, boxShadow: "none", borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180, border: 0, borderRadius: 0 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "90px" }}>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle1" className="title" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" className='title' fontWeight="bold" color="gray">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            <CheckCircle sx={{fontSize: 12, color: "gray", ml: "5px"}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard;