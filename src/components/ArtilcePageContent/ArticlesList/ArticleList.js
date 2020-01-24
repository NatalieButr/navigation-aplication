import React from 'react';
import ArticleListSingle from "./ArticleListSingle";


import './index.scss';


class ArticleList extends React.Component {


    render() {
        const { singlePage, articles} = this.props;

        return (
            <div className={`article-boxes ${singlePage ? 'list' : ''}`}>
                {articles.map((item,i) => <ArticleListSingle singlePage={singlePage} key={i} item={item}/>)}
            </div>
        )
    }
}

export default ArticleList;