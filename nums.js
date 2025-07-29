// twoSum=>[2, 7, 11, 15] => 9 => [0,1]
// 1. array element log
// 2. nested loop 2 -> 27,211,215

for (let i = 0;i<Array.length;i++) {
  console.log(array[i]);
  for (let j = 1; j < array.length; j++) {
    console.log(array[i], array[j]);
  }
  console.log(array);
}

// const twoSum=(array,target)=>{
//     for (let i=0; i<array.lenght; i++){
//         for(let j=i+1; j<array.lenght; j++){
//             if(array[i]+array[j]===target){
//                 return[i,j]
//             }
//         }
//     }
// }
// let nums = 2, 7, 11, 15,
// let target = 9;
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.lenght; i++) {
//     for (let j = i + 1; j < nums.lenght; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   console.log(twoSum(nums));
// };