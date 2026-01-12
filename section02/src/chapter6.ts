// any -> 모든, 누구나 올 수 있음.
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num : number = 10;
num = anyVar; // any 타입은 모든 타입에 할당 가능

// 결국 any 타입은 타입스크립트의 타입 검사를 어떻게든 넘어가는 치트키같은 용도로 사용...
// 타입검사를 안하는 것과 다름이 없기 때문에 런타임 오류를 유발할 수 있다...

// unknown -> 아무거나 올 수 있음.
 let unknownVar: unknown;

 unknownVar = "";
 unknownVar = 1;
 unknownVar = () => {};

//  unknownVar.toUpperCase(); // unknown 타입은 any 타입과 다르게 바로 메서드 사용 불가

// typeof 를 통한 타입 정제 (타입 좁히기)
if (typeof unknownVar === "number") {
    num = unknownVar; // 타입 좁히기 후에야 사용 가능
}

// any 타입보다 unknown 타입을 사용하는 것이 더 안전하다.
// 적어도 아무 변수나 메서드에 값을 널을 수 없기 때문에 런타임 오류를 어느정도 방지할 수 있다.