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
// box-shadow: rgb(0 0 0 / 25%) 0px 30px 60px -12px,rgb(0 0 0 / 30%) 0px 18px 36px -18px;
box-shadow: 0 0 10px rgba(222,222,222,0.4) inset,0 0 30px rgba(244,244,244,0.7);
`

function App() {
  const[currentCharacter,setCurrentCharacter] = useState({id: 1, name: "Elon Musk",img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",history:[]})
  const [currentChatHistory, setCurrentHistory] = useState([{historyId:1,question:"hello",answer:"hello",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'}]);

    const reLoadHistory=(id)=>{
      if(id===1){
        setCurrentHistory([
          {historyId:1,question:"hello",answer:"hello",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
          {historyId:1,question:"how are you",answer:"i am fine",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
          {historyId:1,question:"how are you again",answer:"not",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'}])
      }
      else {
        setCurrentHistory([
          {historyId:1,question:"hello",answer:"hello",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
          {historyId:1,question:"how are you",answer:"i am fine",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
          {historyId:1,question:"how are you again",answer:"not",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
          {historyId:1,question:"how old are you",answer:"23",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
          {historyId:1,question:"really?",answer:".....",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},])
      }
    }

//   useEffect(()=>{
//     seCurrentHistory([
//     {historyId:1,question:"hello",answer:"hello",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
//     {historyId:1,question:"how are you",answer:"i am fine",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'},
//     {historyId:1,question:"how are you again",answer:"not",createdTime: '2023-02-1 14:00',updateTime: '2023-02-01 14:01'}])
// },[])

  const mockData = [
    {id: 1,
    name: "Elon Musk",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"},
    {id: 2,
    name: "Sam Altman",
    img: "https://i.insider.com/63d93b280a08ae0018a62b4f"},
    {id: 3,
    name: "Thomas",
    img: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRNug2nY7GDEG23c7HpAX6pWLWp3dfcQmTxGz50nGt_kAqGyAxoVPLw21v137iB7iAW"},
    {id: 4,
    name: "TJ",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/T._J._Miller_by_Gage_Skidmore.jpg/440px-T._J._Miller_by_Gage_Skidmore.jpg"}]
  
  return (
    <div className="App">
      <AppWrapper>
      <SideBar mockData={mockData} setCurrentCharacter={setCurrentCharacter} reLoadHistory={reLoadHistory}/>
      <ChatBox currentCharacter={currentCharacter} currentChatHistory={currentChatHistory} seCurrentHistory={setCurrentHistory}/>
      </AppWrapper>
    </div>
  );
}

export default App;
