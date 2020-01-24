import React from 'react';
import { Link } from 'react-router-dom';

class ArticleListSingle extends React.Component {


    render() {
        const { item } = this.props;
        return (
          <Link to={`/articles/${item}`}> {item} Cтраница</Link>
        )
    }
}

export default ArticleListSingle;