function makeTrie(words){
    const trie = {};

    // 단어에서 글자 하나하나 트라이 구조를 생성해준다.
    for(const word of words){
        let current = trie;
        for(const char of word){
            if(!current[char]) current[char] = [0, {}];
            current[char][0]++;
            current = current[char][1];
        }
    }

    return trie;
}

function solution(words) {
    let result = 0;
    const wordsTrie = makeTrie(words);

    // loop를 돈다.
    for(const word of words){
        let current = wordsTrie;
        let cnt = 0;
        for(let char of word){
            cnt++;  // 검색한 횟수 +1

            // 만약 개수가 1일 경우 중단 시킨다. => 1이면 존재하는 철자가 1개 이므로 더이상 루프를 돌 이유가 없다.
            if(current[char][0] <= 1) break;    
            current = current[char][1];         // current 시점을 다음으로 이어가게 한다.
        }

        result += cnt;
    }

    return result;
}

console.log(solution(["go", "gone", "guild"])); // 7
console.log(solution(["abc", "def", "ghi", "jklm"]));   // 4
console.log(solution(["word", "war", "warrior", "world"])); // 15