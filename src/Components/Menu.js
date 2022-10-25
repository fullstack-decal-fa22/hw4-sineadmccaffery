import React from 'react';
/* Add any imports you think you might need here! */

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