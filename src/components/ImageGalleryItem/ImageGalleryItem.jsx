import React, { Component } from 'react'
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';




export default class ImageGalleryItem extends Component {

    state = {
        bigImage: null
    }

    componentDidMount() {
        this.setState({
            bigImage: this.props.largeImage,
        })
    }


    handleClick = () => {
        const { bigImage } = this.state;
        const { openModal, getBigImg } = this.props;
        
        openModal();
        getBigImg('bigImage', bigImage);
    }

    render() {
        const { url } = this.props;
        return (
            <li className={css.galleryItem}>
                <img
                    onClick={this.handleClick}
                    className={css.gallaryImage}
                    src={url}
                    alt=""
                />
            </li>
        )
    }
}
