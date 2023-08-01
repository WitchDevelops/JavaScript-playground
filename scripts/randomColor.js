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
  let bgDiv = document.querySelector('#bgDiv');

  // Change the background color and display the color on the page
  const changeColor = () => {
    const randomBackgroundColor = generateBackgroundColor();
    bgDiv.style.backgroundColor = randomBackgroundColor;
    document.querySelector('#randomColorText').innerHTML = randomBackgroundColor;
  };

  // Add event handler to the button
  colorBtn.addEventListener('click', changeColor);