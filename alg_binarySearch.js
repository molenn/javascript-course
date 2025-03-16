export function search(arr, target, start=0, end=arr.length-1) {

    console.log(start, end);

    if (start > end) {
        console.log('Not found!');
        return -1;
    }

    const middle = Math.floor((start + end) / 2);
    
    if (arr[middle] === target) {
        console.log(`${target} found at index ${middle}`); // requires a backtick ` to resolve variables
        return middle;
    }

    if(arr[middle] > target) {
        return search(arr, target, start, middle - 1);
    }

    if(arr[middle] < target) {
        return search(arr, target, middle + 1, end);
    }

}

// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// 
// console.log(search(arr, 'y')); // 1

