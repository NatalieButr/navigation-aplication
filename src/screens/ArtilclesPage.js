import React, {Component} from 'react';
import Header from "../components/Header";
import ArticleList from "../components/ArtilcePageContent/ArticlesList";
import {Route, Switch} from "react-router";
import ArticleSingle from "./ArticleSingle";


let articles = new Array(10).fill(1).map((item, i) => item + i);

class ArtilclesPage extends Component {


    render() {
        return(
            <>
                <Header />
                <Switch>
                    <Route exact path="/articles"   component={() => <ArticleList articles={articles}/>}  />
                    <Route       path="/articles/:id"  component={() => <ArticleSingle articles={articles}/>} />
                </Switch>
            </>
            )
    }

}

export default ArtilclesPage;