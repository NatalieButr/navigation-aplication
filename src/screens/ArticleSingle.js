import React, {Component} from 'react';

import ArticlePageContent from "../components/ArtilcePageContent";


class ArticleSingle extends Component {

    componentDidMount() {
        console.log('did mount articleSingle')
    }


    render() {
        const {articles} = this.props;
        return(
           <ArticlePageContent articles={articles}/>
        )
    }

}

export default ArticleSingle;