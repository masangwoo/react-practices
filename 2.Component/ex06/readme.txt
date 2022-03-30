1. immutability : 컴포넌트 상태의 불변성
    1) 절대로 컴포넌트의 상태를 직접 조작하지 않는다.
    2) 컴포넌트 상태를 불변으로 다루어라.
    3) setState이나 useState에서 반호나해주는 함수를 사용해서 상태를 조작한다.

2. Violation Example : Class Component
this.state.emails = [{}, {}, {}];
let emails = this.state.emails;
emails.push({});

3. 상태를 불변성으로 유지해야 하는 이유
    1) this.state를 직접 조작하는 것은 React 상태관리를 우회하는것(리액트 프로그래밍 모델에 반하는 것)
    2) 성능 개선의 여지가 없어진다.
        - 객체의 변경 유무 검사 시 객체의 동질성 비교는 고비용
        - 객체의 변경 유무 검사 시 객체의 동일성 비교는 저비용(object1 === object2)
    3) 결론은 변경하지말고 대체하면 된다.

How I :
1. 비파괴 배열 메소드 및 연산자 : map. filter, reduce, concat, ... (ES6 spread 연산자 활용)
2. src/01 참고