const markMass = 78;
const johnMass = 92;

const markHeight = 1.69;
const johnHeight = 1.95;

const markBmi = markMass / (markHeight * markHeight);
const johnBmi = johnMass / (johnHeight * johnHeight);

if (markBmi > johnBmi){
  console.log("Mark's BMI " + "(" +(markBmi) + ")" + " is higher than John's " + (johnBmi)+ ".")
} else {
  console.log(`John's BMI (${johnBmi})  is higher than Mark's(${markBmi}) )`)
}


