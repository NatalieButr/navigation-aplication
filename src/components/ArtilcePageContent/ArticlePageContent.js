import React from 'react';



class ArticlePageContent extends React.Component {


    render() {
        return (
            <div className='article-list'>
                {articles.map((item,i) => <ArticleListSingle key={i} item={item}/>)}
            </div>
        )
    }
}

export default ArticlePageContent;