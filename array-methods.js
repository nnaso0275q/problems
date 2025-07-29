let ages = [10, 203, 40, 30, 50];
console.log(ages);
const stringArr = ages.toString();
console.log(stringArr);
console.log(ages);
const poppedElement = ages.pop();
console.log();
console.log(ages);

// 2r udaa bichheer suuliin too ni 2r udaa garna
ages.push(poppedElement);
ages.push(poppedElement);
console.log(ages);

// 2r dahi deer ni ymar negen too bichvel ter ni suuliin toonii araas garj irne
ages.push(poppedElement);
ages.push(900);
console.log(ages);

// ehnii toog baihgui bolgodog kod hha
console.log("shift");
ages.shift();
console.log(ages);
