import styled from "styled-components"

const CharacterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 80px;
background-color: #b9e769;
-webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
-moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
box-shadow: 0 0 10px rgb(0,153,184) inset,0 0 30px rgb(244,244,244);
`

const IamgeContainer = styled.div`
width: 45px;
height: 45px;
margin-right: 10px;
`
const Iamge = styled.img`
height: 100%;
width: 100%;
border-radius: 50%;
`

export const CharacterItem=({character})=>{
    const {name, img} = character
    return(
        <div>
            <CharacterContainer>
                <IamgeContainer>
                    <Iamge src={img}/> 
                </IamgeContainer>
                {name}
            </CharacterContainer>
            
        </div>
    )
}

export default CharacterItem