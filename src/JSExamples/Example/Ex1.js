// Solve the Quadratic formula
let root1, root2, a, b, c, discriminant, realPart, imagPart;

// Take input from user
a = prompt("Enter the first number: ");
b = prompt("Enter the second number: ");
c = prompt("Enter the third number: ");

// Calculate Discriminant
discriminant = b * b - 4 * a * c;

console.log("discriminant", discriminant);
// condition for real and different roots
if (discriminant > 0){
  root1 = (-b + Math.sqrt(discriminant)) / ( 2 * a);
  root2 = (-b - Math.sqrt(discriminant)) / ( 2 * a);
  // results
  console.log(`The roots quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0){
  root1 = root2 = -b  / (2 * a);
  // results
  console.log(`The roots quadratic equation are  ${root1} and ${root2}`);
}

// condition for complex and differnet roots
else {
  realPart = (-b / ( 2 * a)).toFixed(2);
  imagPart = (Math.sqrt(-discriminant) / ( 2 * a)).toFixed(2);
  // results
  console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}

