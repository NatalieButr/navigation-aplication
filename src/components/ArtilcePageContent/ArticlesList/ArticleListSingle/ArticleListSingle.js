import React from 'react';
import { Link, NavLink } from 'react-router-dom';


import './styles.scss';

class ArticleListSingle extends React.Component {



    renderLink = () => {
        const { item } = this.props;
        return (
            <NavLink to={`/articles/${item}`} activeClassName="active"> {item} Cтраница</NavLink>
        )
    };
    renderBox = () => {
        const { item } = this.props;
        return (
            <div className='box-for-single'>
                <Link to={`/articles/${item}`} > {item} Cтраница</Link>
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