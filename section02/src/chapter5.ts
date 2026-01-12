//enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN, // ADMIN = 0 같이 숫자를 구지 작성하지 않아도 자동으로 맨 위의 인덱스부터 부여된다.
    USER = 10, // 그리고 중간에만 숫자를 할당하면 그 다음부터는 자동으로 1씩 증가된 값이 할당된다.
    GUEST,
}

enum Language {
    korean = "ko",
    english = "en",
}

const user1 = {
    name: "kim",
    role: Role.ADMIN, // role : 0 이런식으로 직접 지정했었던 것을 직관적으로 표현 가능
    Language: Language.korean,  // Language : "ko" 이런식으로 직접 지정했던 것을 직관적으로 표현 가능
};      

const user2 = {
    name: "park",
    role: Role.USER,
    Language: Language.english,
};

const user3 = {
    name: "lee",
    role: Role.GUEST,
    Language: Language.korean,
};

console.log(user1, user2, user3);
