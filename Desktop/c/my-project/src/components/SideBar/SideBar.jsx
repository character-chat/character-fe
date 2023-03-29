
import styled from 'styled-components';
import CharacterBar from './components/CharacterBar/CharacterBar';

const SideBarContainer = styled.div`
width: 180px;
height: 600px;
border-right: 1px solid rgba(248,248,248,0.5);
// filter: blur(10px);
// -webkit-filter: blur(10px);
`

export const SideBar = ({mockData, setCurrentCharacter, reLoadHistory})=>{
    return(
        <SideBarContainer>
            <CharacterBar mockData={mockData} setCurrentCharacter={setCurrentCharacter} reLoadHistory={reLoadHistory}/>
        </SideBarContainer>
    )
}

export default SideBar;