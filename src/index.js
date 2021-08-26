import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import image from './picture/colorCycle.jpg'




class ColorList extends React.Component {
    render() {
        return (
            <div className="Color-list">
                <img src={image} height={100} width={100} alt="" />
                <h1 class="header">Color Button ... {this.props.name}</h1>
                <button class="button button1">Green</button>
                <button class="button button2">Blue</button>
                <button class="button button3">Red</button>
            </div >
        );
    }
}

const divStyle = {
    color: 'blue',
    backgroundImage: 'url(' + { image } + ')',
};

function HelloWorldComponent() {
    return <div style={divStyle}>Hello World!</div>;
}

// ========================================

ReactDOM.render(
    <ColorList />,
    document.getElementById('root')
);
