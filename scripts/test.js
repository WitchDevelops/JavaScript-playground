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

