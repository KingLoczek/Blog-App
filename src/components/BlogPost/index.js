import React from 'react';
import Card from '../UI/Card';
import './style.css';
import Prog from '../../blogpictures/prog1.png';

function BlogPost() {
    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                <span className="blogCategory">Featured</span>
                <h1 className="postTitle">Can anyone start programming?</h1>
                <span className="postedBy">posted on September 11, 2020 by Konrad Zarzecki </span>
                </div>
                <div className="postImage">
                    <img src={Prog} alt="PostImage"/>
                </div>
            </Card>
        </div>
    )
}

export default BlogPost
