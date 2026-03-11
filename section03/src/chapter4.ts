/* 
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입, 교집합 타입, 튜플
 */

/* 
 * 1. 합집합 - Union 타입
 * 유니언타입으로 만들때 추가할 수 있는 타입의 개수는 제한이 없다. (무한대)
 */

let a: string | number | boolean | undefined | null | {}; // a는 string 또는 number 타입이 될 수 있다.
a = 1;
a = 'hello';

a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// 객체타입으로 유니온 타입 만들기
type Dog = {
    name: string;
    color: string;
}

type Persion = {
    name: string;
    language: string;
}

type Union1 = Dog | Persion; // Union1은 Dog 또는 Persion 타입이 될 수 있다.

let union1: Union1 = {
    name: '',
    color: '',
};

let union2: Union1 = {
    name: '',
    language: '',
};

let union3: Union1 = {
    name: '',
    color: '',
    language: '',
};

// let union4: Union1 = {
//     name: '',
// };

/* 
 * 2. 교집합 - Intersection 타입
 */

// 교집합으로 타입을 구성하면 왠만하면 거의 never 타입이 된다. (불가능한 타입이 된다.)
let variable: number & string; // variable은 string과 number 타입이 될 수 있다. (불가능한 타입)

type Intersection = Dog & Persion; // Intersection1은 Dog와 Persion 타입이 될 수 있다. (불가능한 타입)

let intersection1: Intersection = {
    name: '',
    color: '',
    language: '',
}