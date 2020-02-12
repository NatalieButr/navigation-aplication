import React, {Component} from 'react';
import {Route, Switch} from "react-router";

import Header from "../components/Header";
import ArticleList from "../components/ArtilcePageContent/ArticlesList";
import ArticlePageContent from "../components/ArtilcePageContent";


let articles = new Array(4).fill(1).map((item, i) => item + i);

class ArticlesPage extends Component {



    render() {

        return(
            <>
                <Header />
                <Switch>
                    <Route exact path="/articles"   component={() => <ArticleList articles={articles}/>}  />
                    <Route       path="/articles/:id"  component={() => <ArticlePageContent articles={articles}/>} />
                </Switch>
            </>
            )
    }

}

export default ArticlesPage;