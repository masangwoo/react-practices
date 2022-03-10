import React from 'react'

export const Clock01 = () => {

//   var time = new Date();

//   return (
//     <div>
//         <p>{time.toLocaleString('ko-KR')}</p>
//     </div>
//   )

    const date = new Date();
    let hours = date.getHours();
    const minutes = ('0'+date.getMinutes()).slice(-2);
    const seconds = ('0'+date.getSeconds()).slice(-2);
    const html = 
        "<span>"+
        ('0'+(hours>12?hours -12 : hours)).slice(-2)+
        " : "+
        ('0'+(minutes)).slice(-2)+
        " : "+
        ('0'+(seconds)).slice(-2)+
        " : "+
        (hours >12? 'PM' : 'AM')+
        "</span>";
    const o = {

    }
    return(
        /**
         * HTML 태그를 동적으로 생성하여
         */
        <div dangerouslySetInnerHTML={{__html:html}}/>
    )
}
export default Clock01