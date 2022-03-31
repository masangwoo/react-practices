import fs from 'fs';
import update from 'react-addons-update';
let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}
let updateOrder = update(state.order, {
    //해당 패스의 값 변경 1
    recieve:{
        $set : '부산시 해운대구 우동'
    },
    //해당 패스의 값 변경 2
    payment: {
        method:{
            $set : 'Mobile'
        }
    },
    products:{
        0:{
            amount:{
                $set: 5
            }
        },
        $push:[{
            "no": "c002-003",
            "name": "블루양말",
            "price": 2000,
            "amount": 1
        }]
    }
})

console.log(state.order, 
            updateOrder);



