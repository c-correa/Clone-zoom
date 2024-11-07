// Define the SortableObject type
type SortableObject = { [key: string]: string | number }; // Adjust as necessary for your use case

export function quickSortByKey<T extends SortableObject>(
    arr: T[], 
    key: keyof T, 
    order: 'ASC' | 'DESC' = 'ASC'
  ): T[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left: T[] = [];
    const right: T[] = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      let comparison: boolean;
  
      // Comprobar si el tipo de la propiedad es 'string' para usar 'localeCompare'
      if (typeof arr[i][key] === 'string' && typeof pivot[key] === 'string') {
        comparison = (arr[i][key] as string).localeCompare(pivot[key] as string) < 0; // Type assertion
      } else {
        // Comparación numérica por defecto
        comparison = arr[i][key] < pivot[key];
      }
  
      if ((order === 'ASC' && comparison) || (order === 'DESC' && !comparison)) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSortByKey(left, key, order), pivot, ...quickSortByKey(right, key, order)];
  }
  