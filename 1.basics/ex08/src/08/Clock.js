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

    return(
        /**
         * comment01 : 컴포넌트 안이기 때문에 자바스크립트 구문이 가능하다.
         */
         <div 
          /**
         * comment02 : 여기서도 다중행 주석이 가능한데 비추
         */
            className='clock'
            title='시계'
         >
         {('0'+(hours>12?hours -12 : hours)).slice(-2)}
         {" : "}
         {
             /**
              * comment03 : 이 주석을 추천..이런 방식으로 표현식이 실행되는 블록안에서 주석을 달아야 한다.
              */
         }
         {('0'+(minutes)).slice(-2)}
         {" : "}
         {
             /**
              * JSX는 HTML이 아니다! <!-- --> 주석은 사용할 수 없다.
              */
         }
         {('0'+(seconds)).slice(-2)}
         {"  "}

         //comment04 : JSX안에서 이 주석을 사용하면 그대로 화면에 나온다.
         {hours >12? 'PM' : 'AM'}
     </div>
    )
}
export default Clock01