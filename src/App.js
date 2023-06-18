import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

const App = () => {
<BrowserRouter>
    <Box sx={{backgroundColor: "#000"}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
         <Route path='/channel/:id' element={<ChannelDetail/>} />
      <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
</BrowserRouter>
}

export default App