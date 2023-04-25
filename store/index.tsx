import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  currentChatCharacter: "",
  currentMiddleBar: "",
  currentMainBox: "",
  currentCharacterList: [
    {
      characterId: 1,
      name: "Elon Musk",
      time: "last 6 seconds",
      avatar:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
    },
    {
      characterId: "2",
      name: "xiangcheng",
      time: "last 6 seconds",
      avatar:
        "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRNug2nY7GDEG23c7HpAX6pWLWp3dfcQmTxGz50nGt_kAqGyAxoVPLw21v137iB7iAW",
    },
  ],
  history: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_CURRENT_CHAT_CHARACTER":
      return {
        ...state,
        currentChatCharacter: action.payload,
      };
    case "UPDATE_CURRENT_MIDDLEBAR":
      return {
        ...state,
        currentMiddleBar: action.payload,
      };
    case "UPDATE_CURRENT_MAINBOX":
      return {
        ...state,
        currentMainBox: action.payload,
      };
    case "UPDATE_HISTORY":
      return {
        ...state,
        history: action.payload,
      };
    case "DELETE_CHARACTER":
      return {
        ...state,
        currentCharacterList: state.currentCharacterList.filter(currentCharacter => currentCharacter.characterId !== action.payload)
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

export default store;
