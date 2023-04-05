import styled from "styled-components";
import CharacterBar from "./components/CharacterBar/CharacterBar";

const SideBarContainer = styled.div`
  width: 180px;
  height: 600px;
  border-right: 1px solid rgba(248, 248, 248, 0.5);
  // filter: blur(10px);
  // -webkit-filter: blur(10px);
`;

export const SideBar = ({ mockData, setCurrentCharacter, reLoadHistory }) => {
  return (
    // <SideBarContainer>
    //     <CharacterBar mockData={mockData} setCurrentCharacter={setCurrentCharacter} reLoadHistory={reLoadHistory}/>
    // </SideBarContainer>
    <div className="navigation navbar justify-content-center py-xl-4 py-md-3 py-0 px-3">
      <a href="index.html" title="Postman" className="brand">
        <img src="assets/images/chat.svg" width="46" height="46" />
      </a>

      <div
        className="nav flex-md-column nav-pills flex-grow-1"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          className="mb-xl-3 mb-md-2 nav-link"
          data-toggle="pill"
          href="#nav-tab-user"
          role="tab"
        >
          <img
            src="assets/images/user.png"
            className="avatar sm rounded-circle"
            alt="user avatar"
          />
        </a>
        <a
          className="mb-xl-3 mb-md-2 nav-link"
          data-toggle="pill"
          href="#nav-tab-chat"
          role="tab"
        >
          <i className="zmdi zmdi-comment-alt"></i>
        </a>
        <a
          className="mb-xl-3 mb-md-2 nav-link"
          data-toggle="pill"
          href="#nav-tab-phone"
          role="tab"
        >
          <i className="zmdi zmdi-phone"></i>
        </a>
        <a
          className="mb-xl-3 mb-md-2 nav-link active"
          data-toggle="pill"
          href="#nav-tab-contact"
          role="tab"
        >
          <i className="zmdi zmdi-account-circle"></i>
        </a>
        <a
          className="mb-xl-3 mb-md-2 nav-link d-none d-sm-block"
          data-toggle="pill"
          href="#nav-tab-pages"
          role="tab"
        >
          <i className="zmdi zmdi-layers"></i>
        </a>
      </div>

      <div
        className="nav flex-md-column nav-pills flex-grow-2"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          className="mt-xl-3 mt-md-2 nav-link light-dark-toggle"
          href="javascript:void(0);"
        >
          <i className="zmdi zmdi-brightness-2"></i>
          <input className="light-dark-btn" type="checkbox" />
        </a>
        <a
          className="mt-xl-3 mt-md-2 nav-link d-none d-sm-block"
          href="settings.html"
          role="tab"
        >
          <i className="zmdi zmdi-settings"></i>
        </a>
      </div>

      <button type="submit" className="btn sidebar-toggle-btn shadow-sm">
        <i className="zmdi zmdi-menu"></i>
      </button>
    </div>
  );
};

export default SideBar;
