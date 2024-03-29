import { useState } from "react";
import Header from "./components/Header"
import Content from "./components/Content"



const ArticlePreView = ({article,isComeFromChat}) => {
    return(
        <div className={`main px-xl-5 px-lg-4 px-3`} style={{overflow: 'auto'}}>
            <Header article={article} isComeFromChat={isComeFromChat}/>
            <Content content={article?.content}/>
        </div>
    )
}

export default ArticlePreView