// 배열 생성
const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);

console.log(arr1);  // []
console.log(arr2);  // []
console.log(arr3);  // [1, 2, 3, 4, 5]
console.log(arr4);  // [ <5 empty items> ]

// 특정한 값으로 배열 초기화
const arr5 = new Array(5).fill(5);
const arr6 = Array.from(Array(5), function(v, i){
    return i + 1;
});    // (초기화할 배열, 함수)

console.log(arr5);  // [5, 5, 5, 5, 5]
console.log(arr6);  // [1, 2, 3, 4, 5]

////////////////////////////////////////////////////////////
// 편의성 함수

let arr = [1, 2, 3, 4, 5];

// length - 길이
// 배열을 임의로 줄이거나 늘리기 (권장 x)
// console.log(arr.length);    // 5
// arr.length = 3;
// console.log(arr);   // [1, 2, 3]
// arr.length = 10;
// console.log(arr);   // [ 1, 2, 3, <7 empty items> ]

// join - 문자열로 변환
console.log(arr.join(", "));    // 1, 2, 3, 4, 5

// reverse - 배열의 순서를 반대로 (기존 배열에 영향 O)
console.log(arr.reverse()); // [5, 4, 3, 2, 1]
console.log(arr);   // [5, 4, 3, 2, 1]

// concat - 두 배열 합치기
console.log(arr.concat([6, 7, 8, 9, 10]));  // [5, 4, 3, 2, 1, 6, 7, 8, 9, 10]

////////////////////////////////////////////////////////////
// 배열의 요소 추가 및 삭제

arr = [1, 2, 3, 4, 5, 6];

// push, pop - 뒤에 요소 추가/삭제
arr.push(7);
arr.push(7, 8, 9);
console.log(arr);   // [1, 2, 3, 4, 5, 6, 7, 7, 8, 9]
arr.pop();  // remove 9
arr.pop();  // remove 8
console.log(arr.pop()); // show and remove 7
console.log(arr);   // [1, 2, 3, 4, 5, 6, 7]

// unshift, shift - 앞에 있는 요소 추가/삭제
arr.shift();    // remove 1
arr.shift();    // remove 2
console.log(arr);   // [3, 4, 5, 6, 7]
arr.unshift(10);    // add 10
console.log(arr);   [10, 3, 4, 5, 6, 7]

////////////////////////////////////////////////////////////
// 배열의 요소 자르기

arr = [1, 2, 3, 4, 5, 6];

// slice - 특정 배령의 요소 가져오기 (원본 배열 훼손 X)
console.log(arr.slice(2, 4));   // [3, 4]
console.log(arr);   // [1, 2, 3, 4, 5, 6]

// splice - 특정 배열 삭제
arr.splice(2, 2);
console.log(arr);   // [1, 2, 5, 6]

////////////////////////////////////////////////////////////
// 배열순회

arr = [1, 2, 3, 4, 5, 6];

// for
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// for of
for(let item of arr){
    console.log(item);
}

////////////////////////////////////////////////////////////
// 배열은 객체와 타입이 동일하기 때문에 객체처럼 사용이 가능

arr = [1, 2, 3, 4, 5, 6];

console.log(typeof(arr));   // object

arr['key'] = 'value';
console.log(arr);   // [ 1, 2, 3, 4, 5, 6, key: 'value' ]