export const updateCurrentChatCharacter = (currentChatCharacter) => {
  return {
    type: "UPDATE_CURRENT_CHAT_CHARACTER",
    payload: currentChatCharacter,
  };
};

export const updateCurrentMiddleBar = (currentMiddleBar) => {
  return {
    type: "UPDATE_CURRENT_MIDDLEBAR",
    payload: currentMiddleBar,
  };
};

export const updateCurrentMainBox = (currentMainBox) => {
  return {
    type: "UPDATE_CURRENT_MAINBOX",
    payload: currentMainBox,
  };
};


export const updateHistory = (history) => {
  return {
    type: "UPDATE_HISTORY",
    payload: history,
  };
};

export const addHistory = (historyList) => {
  return{
    type: "ADD_HISTORY",
    historyList: historyList
  }
}

export const deleteCharacter = (characterId) => {
  return {
    type: "DELETE_CHARACTER",
    payload: characterId,
  };
};

export const updateCurrentArticle = (currentArticle)=>{
  return {
    type: "SET_CURRENT_ARTICLE",
    currentArticle: currentArticle
  }
}

export const updateArticleList = ((articleList)=>{
  return {
    type: "SET_ARTICLE_LIST",
    articleList: articleList
  }
})

export const addArticleList = ((article)=>{
  return {
    type: "ADD_ARTICLE",
    article: article
  }
})

export const updateCurrentChatList = (currentChatList)=>{
  return {
    type: "SET_CURRENT_CHAT_LIST",
    currentChatList: currentChatList
  }
}

export const addChatList = (currentChat)=>{
  return {
    type: "ADD_CHAT_TO_CURRENT_CHAT_LIST",
    currentChat: currentChat
  }
}

export const updateUserInfo=(userInfo)=>{
  return {
    type: "UPDATE_USER_INFO",
    userInfo: userInfo
  }
}

export const addTag = (tag)=>{
  return {
    type: "ADD_TAG",
    tag: tag
  }
}

export const updateTagList = (tagList)=>{
  return {
    type: "SET_TAG_LIST",
    tagList: tagList
  }
}

export const addProfessionalChat = (professionalChat)=>{
  return {
    type: "ADD_PROFESSIONAL_CHAT",
    professionalChat: professionalChat
  }
}

export const updateProfessionalChatList = (professionalChatList)=>{
  return {
    type: "UPDATE_PROFESSIONAL_CHAT",
    professionalChatList: professionalChatList
  }
}

export const deleteTag = (tagName)=>{
  return {
    type: "DELETE_TAG",
    tagName: tagName
  }
}

export const updateIsCheckArticle = (isCheckArticle)=> {
  return {
    type: "UPDATE_IS_CHECK_ARTICLE",
    isCheckArticle: isCheckArticle
  }
}

export const updateGroupChatList = (groupChatList)=>{
  return {
    type: "UPDATE_GROUP_CHAT_LIST",
    groupChatList: groupChatList
  }
}


export const addGroupChatList = (groupChatList)=>{
  return {
    type: "ADD_GROUP_CHAT_LIST",
    groupChatList: groupChatList
  }
}