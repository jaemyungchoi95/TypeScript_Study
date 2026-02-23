/**
 * Unkwown 타입 -> 타입스크립트에 존재하는 모든 타입들의 슈퍼타입이다.
 */

function unknownExam(){
    let a : unknown = 1;
    let c : unknown = "hello";
    let b : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;

    let unknownVar: unknown;

    // 다운캐스팅들은 전부 에러 발생
    // let num: number = unknownVar; // 에러 발생
    // let str: string = unknownVar; // 에러 발생
    // let bool: boolean = unknownVar; // 에러 발생
    
}

/**
 * Never 타입 -> 공집합
 * 모든 타입(집합)의 서브타입이다.
 */

function neverExam(){
    function neverFunc(): never {
        while(true){
        }
    }

    let num: number = neverFunc(); // 가능
    let str: string = neverFunc(); // 가능
    let bool: boolean = neverFunc(); // 가능

    // never 타입에 다른 타입 변수들을 넣으면 모두 에러 발생 (다운캐스팅이기 때문)
    // let never1: never = 10;
    // let never2: never = "hello";
    // let never3: never = true;

}

/**
 * Void 타입
 * void타입은 타입 계층의 중간에 위치한 평범한? 타입이다.
 */

function voidExam(){
    function voidFunc(): void {
        console.log("hi");
    }

    let voidVar: void = undefined;
};

/** 
 * any 타입
 */

function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar : never;

    anyVar = unknownVar;

    undefinedVar = anyVar;

    // neverVar = anyVar; // never 타입은 공집합이기 때문에 any 타입을 할당할 수 없다.
    // any 타입은 치트키 타입이지만 never 타입까지 다운캐스팅할 수는 없다.
}

