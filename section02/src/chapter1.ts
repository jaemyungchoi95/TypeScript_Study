// number
let num1: number = 123; // : number 를 타입주석 혹은 타입어노테이션이라고 부른다.
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5: number = NaN; // Not a Number
let num6: number = Infinity;
let num7: number = -Infinity;

// 이렇게 number 타입으로 지정된 변수에는 숫자형태가 아닌 값을 할당할 수 없다.
// num1 = "hello"; // 오류 발생
// 당연히 숫자 형태의 함수는 문제가 없다.
// num1.toFixed(2); 이런 메서드는 가능.

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello ${num1}`; // 백틱을 이용한 템플릿 문자열도 입력 가능

// str1 = 123; 오류 발생
// str1.toFixed(2); // 오류 발생

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// bool1 = 123; // 오류 발생
// bool1.toFixed(2); // 오류 발생

// null
let null1: null = null;

// null1 = 123; // 오류 발생
// null1.toFixed(2); // 오류 발생

// undefined
let unde1: undefined = undefined;

// undefined와 null 마저도 타입스크립트에서는 각각의 타입으로 존재한다.
// 만약 임시로 넣을 값을 지정할때는 null을 넣어줄 수 있다.
// let numA: number = null; // --strictNullChecks 옵션이 켜져있다면 오류 발생 (기본적으로는 켜져있음.)

// 리터럴 타입 : 값 자체로 타입을 정의한 것
// 리터럴 -> 값
let lit1: 123 = 123; // 123이라는 값만 가질 수 있다.
let strA: "hello" = "hello"; // "hello" 라는 값만 가질 수 있다.
let boolA: true = true; // true 라는 값만 가질 수 있다.

// lit1 = 456; // 오류 발생
// strA = "world"; // 오류 발생
// boolA = false; // 오류 발생

// 타입스크립트의 타입 시스템은 매우 엄격하다.
// 엄격한 타입 시스템 덕분에 코드 작성시점에 많은 오류를 잡아낼 수 있다.
// 하지만 너무 엄격해서 불편할 때도 있다.
// 그럴때는 타입 단언(Type Assertion)이나 타입 캐스팅(Type Casting)을 이용해서
// 개발자가 직접 타입을 지정해줄 수도 있다.
