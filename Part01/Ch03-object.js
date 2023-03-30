// 객체 생성
const obj1 = new Object();
const obj2 = {};
const obj3 = {name: '박수현', job: 'Student'};

console.log(obj1);  // {}
console.log(obj2);  // {}
console.log(obj3);  // { name: '박수현', job: 'Student' }

////////////////////////////////////////////////////////////
// 객체 값 추가/삭제

let obj = {name: '박수현', job: 'Student'};

// 추가
obj['email'] = 'psh@mail.com';
obj.phone = '01012345678';

console.log(obj);   // { name: '박수현', job: 'Student', email: 'psh@mail.com', phone: '01012345678'}

// 삭제
delete obj.phone;

console.log(obj);   // { name: '박수현', job: 'Student', email: 'psh@mail.com' }

////////////////////////////////////////////////////////////
// 객체 값 존재여부 파악

obj = {name: '박수현', job: 'Student'};

obj['email'] = 'psh@mail.com';

console.log('email' in obj);    // true
console.log('phone' in obj);    // false

////////////////////////////////////////////////////////////
// 객체 키와 값 추출

obj = {name: '박수현', job: 'Student'};

obj['email'] = 'psh@mail.com';

console.log(Object.keys(obj));  // [ 'name', 'job', 'email' ]
console.log(Object.values(obj));    // [ '박수현', 'Student', 'psh@mail.com' ]

////////////////////////////////////////////////////////////
// 객체 순회

obj = {name: '박수현', job: 'Student'};

obj['email'] = 'psh@mail.com';

// for in
for(let key in obj){
    console.log(key, obj[key]);
}