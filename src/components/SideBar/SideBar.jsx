
import styled from 'styled-components';
import CharacterBar from './components/CharacterBar/CharacterBar';

const SideBarContainer = styled.div`
width: 180px;
height: 600px;
border-right: 2px solid rgba(248,248,248,1);
// filter: blur(10px);
// -webkit-filter: blur(10px);
`

export const SideBar = ()=>{
    return(
        <SideBarContainer>
            <CharacterBar/>
        </SideBarContainer>
    )
}

export default SideBar;