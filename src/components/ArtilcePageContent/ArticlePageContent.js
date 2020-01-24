import React from 'react';
import { withRouter } from 'react-router'

import './styles.scss';
import ArticleList from "./ArticlesList";
import Article from "./Article";


class ArticlePageContent extends React.Component {



    render() {

        const id = this.props.match.params.id;
        const {articles} = this.props;

        return (
            <main>
                <ArticleList singlePage={true} articles={articles}/>
                <Article article={articles[parseInt(id)-1]}/>
            </main>
        )
    }
}

export default withRouter(ArticlePageContent);