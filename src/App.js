import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import axios from 'axios';
import ChatBox from './components/ChatBox';
import styled from 'styled-components';

const AppWrapper = styled.div`
display: flex;
width: 900px;
box-shadow: rgb(50 50 93 / 25%) 0px 30px 60px -12px,rgb(0 0 0 / 30%) 0px 18px 36px -18px;
`

function App() {
  
  return (
    <div className="App">
      <AppWrapper>
      <SideBar/>
      <ChatBox/>
      </AppWrapper>
    </div>
  );
}

export default App;
