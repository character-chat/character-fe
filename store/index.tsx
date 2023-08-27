import { configureStore } from "@reduxjs/toolkit";


interface Tag {
  tagId: string;
  tagName: string;
}

interface Character {
  characterId: number;
  name: string;
  time: string;
  avatar: string;
}

interface Article {
  id?: string;
  title?: string;
  content?: string;
  tag?: string[];
}

interface State {
  currentChatCharacter: string;
  currentMiddleBar: string;
  currentMainBox: string;
  currentCharacterList: Character[];
  history: any[];
  currentArticle: Article;
  articleList: Article[];
  currentChatList: any[];
  userInfo: {
    tagList: any[];
  };
  tagList: Tag[];
  professionalChat: any[];
}

const initialState: State = {
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
      characterId: 2,
      name: "xiangcheng",
      time: "last 6 seconds",
      avatar:
        "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRNug2nY7GDEG23c7HpAX6pWLWp3dfcQmTxGz50nGt_kAqGyAxoVPLw21v137iB7iAW",
    },
  ],
  history: [],
  currentArticle: {},
  articleList :[],
  currentChatList: [],
  userInfo: {tagList:[]},
  tagList: [],
  professionalChat: [],
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
    case "ADD_HISTORY":
      return {
        ...state,
        history: [...state.history, ...action.historyList],
      }
    case "DELETE_CHARACTER":
      return {
        ...state,
        currentCharacterList: state.currentCharacterList.filter(currentCharacter => currentCharacter.characterId !== action.payload)
      };
    case "SET_CURRENT_ARTICLE":
      return {
        ...state,
        currentArticle: action.currentArticle
      }
    case "SET_ARTICLE_LIST":
      return {
        ...state,
        articleList: action.articleList
      }
    case "ADD_ARTICLE":
      return {
        ...state,
        articleList: [...state.articleList, action.article]
      }
    case "SET_CURRENT_CHAT_LIST":
      return {
        ...state,
        currentChatList: action.currentChatList
      }
    case "ADD_CHAT_TO_CURRENT_CHAT_LIST":
      return {
        ...state,
        currentChatList: [...state.currentChatList,action.currentChat]
      }
    case "UPDATE_USER_INFO":
      return {
        ...state,
        userInfo: action.userInfo
      }
    case "ADD_TAG":
      return {
        ...state,
        tagList: [...state.tagList,action.tag]
      }
    case "SET_TAG_LIST":
      return {
        ...state,
        tagList: action.tagList
      }
    case "DELETE_TAG":
      return {
        ...state,
        tagList: state.tagList.filter(tag => tag.tagId !== action.tagId)
      }
    case "ADD_PROFESSIONAL_CHAT":
      return {
        ...state,
        professionalChat: [...state.professionalChat,action.professionalChat]
      }
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

export default store;
