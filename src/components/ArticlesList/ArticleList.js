import React from 'react';
import ArticleListSingle from "./ArticleListSingle";



let articles = new Array(10).fill(1).map((item, i) => item + i);
console.log(articles)
class ArticleList extends React.Component {


    render() {
        return (
            <div className='article-list'>
                {articles.map((item,i) => <ArticleListSingle key={i} item={item}/>)}
            </div>
        )
    }
}

export default ArticleList;