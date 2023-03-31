// 1. 같은 장르끼리 묶는다.
// 2. 묶인 노래들을 재생 순으로 정렬한다.
// 3. 노래를 2개까지 자르는 작업을 진행한다.

function solution(genres, plays) {
    const genreMap = new Map();

    genres
        // 1. [장르, 재생횟수]로 묶어준다.
        .map((genre, index) => [genre, plays[index]])
        // 2. genreMap에 데이터를 넣어준다.
        .forEach(([genre, play], index) => {
            // 특정장르의 정보 (만약 없을 경우 {total:0, songs: []} 설정)
            const data = genreMap.get(genre) || {total: 0, songs: []};
            genreMap.set(genre, {
                total: data.total + play,   // 장르별 전체 플레이 수
                songs: [...data.songs, {play, index}]   // [...{노래재생횟수, 위치}]
                    .sort((a, b) => b.play - a.play)    // 노래재생횟수 기반 내림차순 정렬
                    .slice(0, 2)    // 2개로 자르기
            })
        })
    
    // entries() : [key, value] 형식으로 배열 반환
    // flatMap() : 맵핑화 진행후 새로운 배열로 평탄화    
    return [...genreMap.entries()]  
            .sort((a, b) => b[1].total - a[1].total)
            .flatMap(item => item[1].songs)
            .map(songs => songs.index);
}
console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])); // [4, 1, 3, 0]