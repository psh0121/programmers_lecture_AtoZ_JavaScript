// 핵심 키워드는 "노드", "간섭", "최단경로"
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

function solution(n, edge){
    // 빈배열로 이루어져 있는 그래프 생성 (편의상 0번째는 비울예정)
    const graph = Array.from(Array(n+1), () => []);

    // src에 연결되어 있는 dest값을 graph[src]에 넣어준다.
    // 양방향 고려
    for(const [src, dest] of edge){
        graph[src].push(dest);
        graph[dest].push(src);
    }

    // 1에서 숫자까지의 거리 입력
    const distance = Array(n + 1).fill(0);
    distance[1] = 1;

    // BFS
    const queue = [1];
    while(queue.length > 0){
        const src = queue.shift();

        for(const dest of graph[src]){
            if(distance[dest] === 0){
                queue.push(dest);
                distance[dest] = distance[src] + 1;
            }
        }
    }
    
    const max = Math.max(...distance);
    return distance.filter(el => el === max).length;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])); // 3