type SortableObject = { [key: string]: any };

export function quickSortByKey<T extends SortableObject>(arr: T[], key: keyof T): T[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left: T[] = [];
    const right: T[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][key] < pivot[key]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSortByKey(left, key), pivot, ...quickSortByKey(right, key)];
}
