import React from 'react';

/* TODO: Translate the below class component to a functional component! */
//class Color extends React.Component {

const Color = (props) => {

     return (
        <button onClick={() => this.props.handleClick(this.props.color)}>Post {this.props.color}</button>
     );
}

export default Color;