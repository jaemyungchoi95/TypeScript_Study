// 배열
let numArr: number[] = [1,2,3];

let strArr: string[] = ["hello", "im", "winterlood"];

let boolArr: Array<boolean> = [true, false, true]; // <> 를 이용하면 제네릭 문법임

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"]; // | 는 유니온타입이다.

// 다차원 배열의 타입을 정의하는 방법 / 차원의 수만큼 [] 를 붙여주면 된다.
let doubleArr: number[][] = [
    [1,2,3], 
    [4,5]
];

// 튜플 : 자바스크립트에는 없고 타입스크립트에만 있음.
// 길이와 타입이 고정된 배열
let tup1:[number, number] = [1, 2];
// tup1 = [1, 2, 3]; // error
// tup1 = ["1", "2"]; // error

let tup2:[number, string, boolean] = [3, "hello", true];
// tup2 = ["2", 1, true]; // 순서가 바뀌어도 error
// tup1 = [1]; // 길이가 맞지 않아도 error

tup1.push(1);
tup1.pop();
tup1.pop();
// 튜플은 고정길이이지만, push, pop 메서드는 사용 가능하다.

const users: [string, number][] = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "최아무개"], 튜플로 지정할 경우 순서와 타입이 맞아야 한다. 이 코드는 error
];
