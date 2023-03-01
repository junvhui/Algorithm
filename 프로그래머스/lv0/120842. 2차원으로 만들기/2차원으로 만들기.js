function solution(num_list, n) {

    const result = []

    for(let i = 0 ; i < num_list.length; ) {
        const slice = []

        for(let j = 0 ; j < n ; j++) {
            slice.push(num_list[i])
            i++
        }
        result.push(slice)
    }
    return result
}