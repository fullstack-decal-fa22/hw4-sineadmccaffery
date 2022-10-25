import React from 'react';
/* Add any imports you think you might need here! */

const Menu = ({update}) => { 

    return (
      <div className="colorOptions">
          <Color color="green" handleClick ={update}></Color>
          <Color color="red" handleClick={update}></Color>
          <Color color="pink" handleClick={update}></Color>
          <Color color="blue" handleClick={update}></Color>
      </div>
    );
}

export default Menu;