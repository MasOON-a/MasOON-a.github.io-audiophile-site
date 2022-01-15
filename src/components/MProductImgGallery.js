import React from 'react';

export default function ProductImgGallery (props) {
    let { imgGallery1, imgGallery2, imgGallery3 } = props.srcs;

    const styles1 = {
        backgroundImage: 'url(' + imgGallery1 + ')',
    }
    const styles2 = {
        backgroundImage: 'url(' + imgGallery2 + ')',
    }
    const styles3 = {
        backgroundImage: 'url(' + imgGallery3 + ')',
    }

    return(
        <div className="product-gallery">
            <div className="img-cont-one">
                <div style={ styles1 }></div>
                <div style={ styles2 }></div>
            </div>
            <div style={ styles3 }></div>
        </div>
    )

}