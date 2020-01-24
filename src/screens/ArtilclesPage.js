import React, {Component} from 'react';
import Header from "../components/Header";
import ArticleList from "../components/ArticlesList";
import {Route, Switch} from "react-router";
import ArticleSingle from "./ArticleSingle";


class ArtilclesPage extends Component {


    render() {
        return(
            <>
                <Header />
                <Switch>
                    <Route exact path="/articles"  component={ArticleList} />
                    <Route       path="/articles/:id"  component={ArticleSingle} />
                </Switch>
            </>
            )
    }

}

export default ArtilclesPage;