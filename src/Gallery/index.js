import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import './image-gallery.css';

export default class GalleryComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            infinite: true,
            showBullets: true,
            thumbnailPosition: 'right'
        }
     
    }
    componentDidMount(){
        
    }
    render() {

        const images = [
            {
              original: process.env.PUBLIC_URL + '/images/1.jpg',
              thumbnail: process.env.PUBLIC_URL + '/images/1_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/2.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/2_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/3.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/3_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/4.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/4_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/5.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/5_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/6.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/6_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/7.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/7_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/8.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/8_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/9.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/9_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/10.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/10_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/11.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/11_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/12.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/12_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/13.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/13_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/14.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/14_thumb.png'
            },
            {
                original: process.env.PUBLIC_URL + '/images/15.jpg',
                thumbnail: process.env.PUBLIC_URL + '/images/15_thumb.png'
            }
          ];

        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-12">
                            <br/>
                        <div class="alert alert-dismissible alert-primary">
                            <h4><FontAwesomeIcon icon = {faImage}/> Gallery</h4>
                            <small>Sorry for tooking all this pictures but I hope you like it! </small>
                        </div>
                    </div>

                    <ImageGallery 
                        items={images}  
                        lazyLoad={false}
                        infinite={this.state.infinite}
                        showBullets={this.state.showBullets}
                        thumbnailPosition={this.state.thumbnailPosition}
                    />
                </div>
            </div>
        )
    }
}
