import React from 'react';
import { Link } from 'react-router-dom';


import './styles.scss';

class ArticleListSingle extends React.Component {



    renderLink = () => {
        const { item } = this.props;
        return (
            <Link to={`/articles/${item}`}> {item} Cтраница</Link>
        )
    };
    renderBox = () => {
        const { item } = this.props;
        return (
            <div className='box-for-single'>
                <Link to={`/articles/${item}`}> {item} Cтраница</Link>
            </div>
        )
    }


    render() {
        const { singlePage } = this.props;

        let content;
        singlePage ? content = this.renderLink() : content = this.renderBox()
        return (
            <>
            {content}
            </>
        )
    }
}

export default ArticleListSingle;