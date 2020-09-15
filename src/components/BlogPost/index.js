import React from 'react';
import PostForm from '../PostForm';
import Card from '../UI/Card';
import './style.css';

function BlogPost() {
    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                <span className="blogCategory">Featured</span>
                <PostForm />
                </div>
            </Card>
        </div>
    )
}

export default BlogPost
