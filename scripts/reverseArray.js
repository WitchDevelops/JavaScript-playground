// write a function to reverse array, not allowed to use the inbuild method
let reverseArray = (array) => {
    let reversedArray = [];
    for (let i = array.length-1; i >=0; i--) {
      reversedArray.push(array[i]);
    }
    return array = reversedArray;
  }
  
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];
    