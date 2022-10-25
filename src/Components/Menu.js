import React from 'react';
import { useState } from 'react';
import Color from '/Users/sineadmccaffery/cs198-99/hw4-sineadmccaffery/src/Components/Color';

const Menu = (props) => { 

    const update = props.addPost;

    return (
      <div className="colorOptions">
        <Color color="green" handleClick ={update}/>
        <Color color="red" handleClick={update}/>
        <Color color="pink" handleClick={update}/>
        <Color color="blue" handleClick={update}/>
      </div>
    );
}

export default Menu;