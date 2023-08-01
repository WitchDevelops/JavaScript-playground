function uniqueLength(nums) {
    if(nums.length === 0) {
      return 0;
    }
    let i=0;
    let j=1;
    while(j<nums.length) {
      if(nums[i] !== nums[j]) {
        i++;
        nums[i] = nums[j];
        j++;
      } else {
        j++;
      }
    }
    console.log(i);
    console.log(j);
    return i+1;
  }
   
  // Should return 5
  const result = uniqueLength([1,1,2,3,4,5,5]);
  console.log(`result 1 is: ${result}`);
   
  // Should return 1
  const result2 = uniqueLength([1,1,1,1]);
   console.log(`result 2 is: ${result2}`);

   const button = document.querySelector('button#btn');
 
button.onclick = () => {
  const header = document.createElement("h1");
  header.innerHTML = "Hello, World!";
  document.body.appendChild(header);
}

// Generate a random hexadecimal string
const generateBackgroundColor = () => {
    const hexadecimals = '0123456789ABCDEF';
    let randomHexString = '#';
    for (let i = 0; i < 6; i++) {
      const randomHexChar = hexadecimals[Math.floor(Math.random() * hexadecimals.length)];
      randomHexString += randomHexChar;
    }
    return randomHexString;
  };

  // Grab the element with ID #colorBtn from the DOM
  const colorBtn = document.querySelector('#colorBtn');

  // Change the background color and display the color on the page
  const changeColor = () => {
    const randomBackgroundColor = generateBackgroundColor();
    document.body.style.backgroundColor = randomBackgroundColor;
    document.querySelector('#randomColorText').innerHTML = randomBackgroundColor;
  };

  // Add event handler to the button
  colorBtn.addEventListener('click', changeColor);