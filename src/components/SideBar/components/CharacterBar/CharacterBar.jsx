import styled from "styled-components"
import CharacterItem from "./components/CharacterItme"

const CharacterBarContainer = styled.div`
width: 180px;
height: 100%;
padding: 0;
margin: 0;
// background-color: pink;
// filter: blur(10px);
// -webkit-filter: blur(10px);
// z-index: -2;
`
export const CharacterBar = ()=>{
    const mockData = [
        {id: 1,
        name: "Elon Musk",
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"},
        {id: 2,
        name: "Sam Altman",
        img: "https://i.insider.com/63d93b280a08ae0018a62b4f"}]
    return(
        <CharacterBarContainer>
            {mockData.map(character => {
                console.log(character)
                return(<CharacterItem key={character.id}  character={character}/>)
            })}
        </CharacterBarContainer>
    )
}

export default CharacterBar