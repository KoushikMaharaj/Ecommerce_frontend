/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/alt-text */
//import './home.css'
import React from 'react';
import Scrolling from './carousel'


class Home extends React.Component {
    render() {
        return <div className="container">
            <div className="jumbotron text-center" id='box'>
                <h1 id='header'>Welcome to Custom PCs</h1>
                <p>Build your own dream PC with us</p>
                <marquee direction="right">10% discount on First Order</marquee>
            </div>
            <Scrolling></Scrolling>
        </div>
    }
}



export default Home;