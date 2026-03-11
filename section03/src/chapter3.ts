/*
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10; // 10은 10에 할당 가능

num1 = num2; // number는 10에 할당 가능 (업캐스팅이라서 할당 가능)

/*
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string; // 견종
};

let animal: Animal = {
    name: '기린',
    color: 'yellow',
};

let dog: Dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
};

animal = dog; // Animal은 Dog에 할당 가능 (업캐스팅이라서 할당 가능)
// dog = animal; // Dog는 Animal에 할당 불가능 (다운캐스팅이라서 할당 불가능)

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;      
    skill: string; // 기술 스택
};

let book: Book;

let programmingBook: ProgrammingBook = {
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    skill: 'reactjs',
};

book = programmingBook; // Book은 ProgrammingBook에 할당 가능 (업캐스팅이라서 할당 가능)
// programmingBook = book; // ProgrammingBook은 Book에 할당 불가능 (다운캐스팅이라서 할당 불가능)

/*
 * 초과 프로퍼티 검사 -> 객체 리터럴이 특정 타입에 할당될 때, 그 타입에 정의되지 않은 프로퍼티가 있으면 오류를 발생시키는 검사
 */

let book2: Book = {
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    // skill: 'reactjs',
};

let book3: Book = programmingBook; // 객체 리터럴이 아니기 때문에 초과 프로퍼티 검사 대상이 아님 (업캐스팅이라서 할당 가능)

function func(book: Book) {}

func({
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    // skill: 'reactjs', // 객체 리터럴이기 때문에 초과 프로퍼티 검사 대상임 (할당 불가능)
})

func(programmingBook); // 객체 리터럴이 아니기 때문에 초과 프로퍼티 검사 대상이 아님 (업캐스팅이라서 할당 가능)
// 변수를 만들어서 변수를 통해 전달하면 된다.

