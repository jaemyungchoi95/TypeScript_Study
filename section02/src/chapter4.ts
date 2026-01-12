// 타입 별칭

type User = {
    id: number;
    name: string;
    nickName: string;
    birth: string;
    bio: string;
    location: string;
};
// 사용간 주의할 점은 같은 스코프 내에 동일한 이름의 타입 별칭을 여러 번 선언할 수 없다는 것이다.
// 'User' 식별자가 중복되었습니다.ts(2300) 오류 발생.
// type User = {};

// 하나를 지정하는데는 문제없지만 여러 개의 곳에서 동일한 타입을 사용해야 할 때 매번 작성하는 것은 비효율적이다.
// 따라서 타입 별칭(type alias)을 사용하여 재사용 가능한 타입을 정의할 수 있다.
let user: {
    id: number;
    name: string;
    nickName: string;
    birth: string;
    bio: string;
    location: string;
} = {
    id: 1,
    name: "이정환",
    nickName: "winterlood",
    birth: "1995-01-10",
    bio: "안녕하세요",
    location: "Seoul",
};

// 타입 별칭을 사용하면 위의 user와 같이 길게 타입을 일일히 작성하지 않아도 된다.
let user2: User = {
    id: 2,
    name: "홀길동",
    nickName: "winterlood",
    birth: "1995-01-10",
    bio: "안녕하세요",
    location: "Seoul",
};

// 인덱스 시그니처

// type CountryCodes = {
//     Korea: string,
//     UnitedState: string,
//     UnitedKingdom: string,
// };
// 위와 같이 특정 속성 이름을 미리 정해놓고 타입을 지정할 수도 있지만, 그렇게 하면 타입스크립트를 쓰는 이유가...
// 인덱스 시그니처(index signature)를 사용하면 동적으로 속성 이름을 지정할 수 있다.

type CountryCodes = {
    // [key: string] 은 임의의 문자열 키를 의미하며, 해당 키에 대한 값은 string 타입이어야 한다는 의미
    [key: string]: string; 
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: 'us',
    UnitedKingdom: 'uk',
};

type ContryNumberCodes = {
    [key: string]: number;
    // 특정 속성을 명시적으로 지정할 수도 있다. 그런데 반드시 인덱스 시그니처의 타입과 일치해야 한다.
    Korea: number; 
};

// let contryNumberAndStringCodes: ContryNumberCodes = {
    // Korea: "ko",
//     UnitedState: 840,
//     UnitedKingdom: 826,
// };