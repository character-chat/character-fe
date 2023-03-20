import axios from "axios";
import { useState } from "react";
import ChatContent from "./components/ChatContent.jsx/ChatContent";
import styled from "styled-components";
import ChatInput from "./components/ChatInput";


const ChatBoxContainer = styled.div`
width: 740px;
height: 600px;
display: flex;
flex-direction: column;
align-items: center;
`


export const ChatBox =()=>{
    const [content,setContent] = useState([])

    const mockResponse = [
        {id:1,response: 'hello'},
        {id:2,response: 'thanks!'},
        {id:3,response: 'hello'},
        {id:4,response: 'thanks!'},
        {id:5,response: 'hello'},
        {id:2,response: 'thanks!'},
        {id:1,response: 'hello'},
        {id:2,response: 'thanks!'},
        {id:1,response: 'hello'},
        {id:2,response: 'thanks!'},
        {id:1,response: 'hello'},
        {id:2,response: 'thanks!'}
    ]


    const sendRequest = (input)=>{
        console.log(input)
        const API_KEY = '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';
        const API_URL = 'https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-1.3B';
        const headers = { 'Authorization': `Bearer ${API_KEY}`,'Content-Type': 'application/json'}
        const data = { 
        "inputs": input,
        "options": {
        "model": "EleutherAI/gpt-neo-1.3B",
        "temperature": 0.5,
        "max_length": 50
    } };
      axios.post(API_URL, data, { headers })
      .then(responseRes => {setContent(preState=> [...preState,{id: 1,response:responseRes.data[0].generated_text}])})
      .catch(error => {setContent(preState=> [...preState,{id: 1,response:error.message}])})
    }

    return(
        <ChatBoxContainer>
            <ChatContent mockResponse={content}/>
            <ChatInput sendRequest={sendRequest}/>
        </ChatBoxContainer>
    )
}

export default ChatBox;