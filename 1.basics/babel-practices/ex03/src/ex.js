//블록 스코프 변수(es6)
const users = [{
    no: 1,
    name: '마이콜',
    email:'michol@gamil.com'
},{
    no: 2,
    name: '둘리',
    email:'dooly@gamil.com'
}
];

//객체 분해(es6)
function print({no, name}){
    //템플릿 문자열(es6)
//    console.log(o.no +", "+ o.name +", "+ o.email);
    console.log(`${no}, ${name}, ${email}`);
}
//for..of(es6)
for(let user of users){
    print(user)
}