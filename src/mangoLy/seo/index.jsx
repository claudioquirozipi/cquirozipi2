import React from 'react';
import MetaTags from 'react-meta-tags';



function Seo(props) {
    const {title, description, img, keywords} = props;
    return(
        <MetaTags> 
            {/* Title */}
            <title>{title}</title>
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
            {/* description */}
            <meta id="meta-description" name="description" content={description} />
            <meta name="twitter:description" content={description} />
            <meta property="og:description" content={description} />
            {/* image */}
            <meta id="og-image" property="og:image" content={img} />
            <meta name="twitter:image" content={img}/>
            {/* others */}            
            <meta name="keywords" content={keywords} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="" />
            <meta property="og:url" content="" />
            <meta property="og:type" content="article" />
        </MetaTags>
    );
}
export default Seo;