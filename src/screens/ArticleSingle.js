import React, {Component} from 'react';
import Header from "../components/Header";
import Article from "../components/Article";
import ArticleList from "../components/ArticlesList";


class ArticleSingle extends Component {

    componentDidMount() {
        console.log('did mount articleSingle')
    }


    render() {
        return(
            <main className='article-single'>
                <ArticleList />
                <Article/>
            </main>
        )
    }

}

export default ArticleSingle;