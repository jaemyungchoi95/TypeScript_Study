// void
// void -> 공허
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello"; // 오류 발생: 'void' 타입은 값을 반환할 수 없습니다.
};

// 반환 타입이 void인 함수는 값을 반환하지 않습니다. undefined나 null을 명시적으로 반환할 수도 있지만, 일반적으로는 아무것도 반환하지 않습니다.
// function func2(): null {
// function func2(): undefined {
function func2(): void {
    console.log("hello");
};

// let a: void;
// a = 1;
// a = "hello";
// a = {};
// a = undefined;
// a = null; // null과 undefined는 void 타입에 할당할 수 있습니다. (strictNullChecks 옵션이 켜져 있지 않은 경우)

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error();
}

// let a: never;
// a = 1;
// a = "hello";
// a = {};
// a = undefined; // void와 달리 never 타입에는 어떤 값도 할당할 수 없습니다. undefined도 null도 담을 수가 없다.
// a = null;