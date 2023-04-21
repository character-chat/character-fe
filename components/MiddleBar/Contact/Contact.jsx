import ContactItem from "./components/ContactItem";

export const Contact = ({setCurrentChatCharacter}) => {
  const currentCharacterList = [
    {
      characterId: 1,
      name: "Elon Musk",
      time: "last 6 seconds",
      avatar:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
    },
    {
      characterId: '2',
      name: "xiangcheng",
      time: "last 6 seconds",
      avatar:
        "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRNug2nY7GDEG23c7HpAX6pWLWp3dfcQmTxGz50nGt_kAqGyAxoVPLw21v137iB7iAW",
    },
  ];
  return (
    <div className="sidebar border-end py-xl-4 py-3 px-xl-4 px-3">
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="nav-tab-contact"
          role="tabpanel"
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="mb-0 text-primary">Contact</h3>
            <div>
              <button
                className="btn btn-dark"
                type="button"
                data-toggle="modal"
                data-target="#InviteFriends"
              >
                Invite Friends
              </button>
            </div>
          </div>

          <div className="form-group input-group-lg search mb-3">
            <i className="zmdi zmdi-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>

          <ul className="chat-list">
            {currentCharacterList.map((currentCha) => (
              <ContactItem
                key={currentCha.id}
                currentCharacter={currentCha}
                setCurrentChatCharacter={setCurrentChatCharacter}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
