import React from 'react'

const Clock01 = () => {
   var hours = Date.prototype.getHours();
   var minutes = Date.prototype.getMinutes();
   var sec = Date.prototype.getSeconds();
   var ampm = hours >= 12 ? 'pm' : 'am';
   hours = hours % 12;
   hours = hours ? hours : 12; // the hour '0' should be '12'
   minutes = minutes < 10 ? '0'+minutes : minutes;
   let strTime = ampm + hours + ':' + minutes + ':' + sec +' ';

    return (
        <div>{strTime}</div>
    );
}

export default Clock01