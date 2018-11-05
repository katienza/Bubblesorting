/* PSEUDOCODE
  write a function bubblesort(array)
  nested for loop or use a while loop + for loop
  if the current index is greater than the next index
  use a helper function to mutate and swap the array

  swap will mutate the array
  will take a left index and right index
  set a temp variable to be left index
  point right index to left index
  then right index to temp variable
  return the array
*/


/* PSEUDOCODE #2

func bubblesort(array)
swapped = true
while(swapped)
  swapped = false
  loop over length of array
  compare current index if greater than the next index 
    assign temp var to next index
*/

// while loop
const bsort = arr => {
  let counter = 0;
  let swapped = true;
  while(swapped) {
    swapped = false;
    for (let i = 0; i < (arr.length - counter); i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
    counter++;
  }
  return arr;
};

// nested for loops
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};

// using a helper function
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; i++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j+1);
      }
    }
  }
}

function swap(array, current, next) {
  let temp = array[current];
  array[current] = array[next];
  array[next] = temp;
}