import React from 'react'

export const Clock01 = () => {

//     var time = new Date();

//   return (
//     <div>
//         <p>{time.toLocaleString('ko-KR')}</p>
//     </div>
//   )

const date = new Date();

let hours = date.getHours();
let session = 'AM';
if(hours > 12){
    session = 'PM';
}
const minutes = ('0'+date.getMinutes()).slice(-2);
const seconds = ('0'+date.getSeconds()).slice(-2);

return(
    <div>{session} {hours} : {minutes} : {seconds}</div>
)
}
export default Clock01