import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Navi from '../Navi';
import Title from '../Title';

function Hero(_props) {
    return (
        <div>
         <Card>
             <div style={{padding:'50px 0'}}>
                <Title />
             </div>
          <Navi />
         </Card>
        </div>
    )
}

export default Hero
