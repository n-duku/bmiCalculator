const button = document.getElementById("calculate");
button.addEventListener("click", ()=> {
  calculateBMI();
});
let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");

calculateBMI = ()=> {
  let weight = weightInput.value;
  let height = heightInput.value;
  let bmi = Math.round(weight / (height * height));
  let message = "";
  let desc = document.getElementById("desc");


  if(bmi <= 0 || bmi === Infinity){
    message = "Error, please enter correct values";
    desc.innerHTML = message;
  }else if (bmi < 18.5) {
    message = "bmi means you are underweight";
    document.getElementById("image").src = "assets/img/underweight.jpg";
    desc.innerHTML = bmi + " " + message;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    message = "bmi means you are normal";
    document.getElementById("image").src = "assets/img/normal.jpg";
    desc.innerHTML = bmi + " " + message;
  } else if (bmi >= 25 && bmi < 30) {
    message = "bmi means you are overweight";
    document.getElementById("image").src = "assets/img/overweight.jpg";
    desc.innerHTML = bmi + " " + message;
  } else if (bmi >= 30 && bmi <= 34.9) {
    message = "bmi means you are obese";
    document.getElementById("image").src = "assets/img/obese.jpg";
    desc.innerHTML = bmi + " " + message;
  }else if (bmi > 35) {
    message = "bmi means you are extremely obese";
    document.getElementById("image").src = "assets/img/extremely_obese.jpg";
    desc.innerHTML = bmi + " " + message;
  }
}
