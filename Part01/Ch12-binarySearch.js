// 로그시간으로 문제를 해결해야 한다 ==> 이진탐색
// times ==> times를 통해 선형 로그 시간으로 계산
// 최소 몇 분에 모든 심사가 끝나는가? ==> 결정문제(= 이진탐색 = 파라메트릭 서치)

// 최소 1분에서 10억분 * n 사이
// 면접관이 몇 명을 처리하는가?
// 처리 가능한 입국자 n보다 작다면, 분으로 올리고, 입국자가 n보다 크다면 분을 낮춰야 한다.
// 면접관이 시간대비 몇 명을 처리할 수 있는가? => 시간 / 심사시간 = 심사관 당 처리 가능한 입국자 수

function solution(n, times) {
    const maxTime = Math.max(...times);

    // 시간범위 (사장적게 걸린 시간(left) ~ 가장 오래걸릴 시간(가장 큰 Time * n))
    let left = 1;
    let right = maxTime * n;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        // 면접관이 시간대비 몇명 처리 가능한가?
        // ==> 시간/소요시간 한 값을 모두 더한 값
        const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

        if(sum < n) left = mid + 1;
        else right = mid - 1;
    }

    // 최소시간 리턴
    return left;
}

console.log(solution(6, [7, 10]));  // 28