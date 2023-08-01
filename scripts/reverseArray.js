let arrayDisplayed = document.getElementById("arrayDisplayed");
let reverseBtn = document.getElementById("reverseBtn");
let sentence = ["sense.", "make", "all", "will", "This"];

arrayDisplayed.innerHTML = sentence;

// write a function to reverse array, not allowed to use the inbuild method
let reverseArray = (array) => {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  let string = reversedArray.toString().split(",").join(" ");
  console.log(string);
  return (string);
};

let btnClick = () => {
  arrayDisplayed.innerHTML = reverseArray(sentence);
}

reverseBtn.addEventListener('click', btnClick);