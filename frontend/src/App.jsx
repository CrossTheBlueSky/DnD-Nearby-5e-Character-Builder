import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import BuildPage from './Build/BuildPage.jsx';
import StartPage from './Start/StartPage.jsx';
import ManagePage from './Manage/ManagePage.jsx';
import ShopPage from './Shop/ShopPage.jsx';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => setMessage(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <MantineProvider defaultColorScheme="dark">

    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/build" element={<BuildPage/>} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/manage" element={<ManagePage />} />
    </Routes>
    </MantineProvider>
  );
}

export default App;
