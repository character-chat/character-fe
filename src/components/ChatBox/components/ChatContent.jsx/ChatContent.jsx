import ChatContentItem from "./ChatContentItem";
import styled from "styled-components";

const ChatContentContainer = styled.div`
width: 600px;
height: 450px;
background-color: rgba(246,246,246,0.8);
margin-bottom: 10px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
overflow: scroll;
overflow-x: hidden;
`

export const ChatContent = ({mockResponse})=>{
    return(
        <ChatContentContainer>
            {mockResponse.map(responseObj=>{
                return(<ChatContentItem key={responseObj.id} responseObj={responseObj}/>)})}
        </ChatContentContainer>
    )

}

export default ChatContent;