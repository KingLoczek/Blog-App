import React from 'react';
import Card from '../UI/Card';
import "./style.css";

function Sidebar() {
    return (
        <div className="sidebarContainer">
            <Card>
                <div className="cardHeader">
                    <span>About Me</span>
                </div>
            </Card>
            <Card>
                <div className="cardHeader">
                    <span>Social Media</span>
                </div>
            </Card>
        </div>
    )
}

export default Sidebar
