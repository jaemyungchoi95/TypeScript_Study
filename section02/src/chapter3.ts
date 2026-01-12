// object 타입
// :object 로 선언 시 그냥 객체다 라는 의미만 가지며, 구체적인 속성에 접근할 수 없다.
// 따라서 객체 리터럴 타입으로 선언하는 것이 좋다.
// 구조적 타입 시스템 (property-based type system)
let user: { 
    id?: number; // ? 는 선택적 속성으로, 해당 속성이 있어도 되고 없어도 된다는 의미 (optional property)
    name: string 
} = {
    id: 1,
    name: "이정환",
};

// object 타입을 사용할 경우 구체적인 속성에 접근할 수 없는 문제점이 발생한다.
// user.id; 이렇게 점 표기법으로 접근을 시도할 때 오류 발생: 'object' 타입에는 'id' 속성이 없습니다.
// 객체 리터럴 타입으로 선언하면 이러한 문제를 해결할 수 있다.

// optional property 예시
// user ={
//     name: "홍길동",
// }

let config:{
    readonly apiKey: string
} = {
    apiKey: "MY API KEY",
}

// config.apiKey = "hacked"; // 오류 발생: readonly 속성에 값을 할당할 수 없음