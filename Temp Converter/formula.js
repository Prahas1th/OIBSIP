function convertTemp() {
    let val = document.getElementById("input-value");
    let result = document.getElementById("result");
    let input = document.getElementById("input");
    let output = document.getElementById("output");
  
    val.addEventListener("keyup", convertTemp);
    input.addEventListener("change", convertTemp);
    output.addEventListener("change", convertTemp);
  
    let inputValue = input.value;
    let outputValue = output.value;
  
    // celsius
    if (inputValue === "celsius" && outputValue === "fahrenheit") {
      result.value = Number((val.value * 9) / 5) + 32;
    } else if (inputValue === "celsius" && outputValue === "kelvin") {
      result.value = Number(val.value) + 273.15;
    } else if (inputValue === "celsius" && outputValue === "celsius") {
      result.value = val.value;
    }
  
    // fahrenheit
    if (inputValue === "fahrenheit" && outputValue === "celsius") {
      result.value = Number((val.value - 32) * 5) / 9;
    } else if (inputValue === "fahrenheit" && outputValue === "kelvin") {
      result.value = Number(((val.value - 32) * 5) / 9) + 273.15;
    } else if (inputValue === "fahrenheit" && outputValue === "fahrenheit") {
      result.value = val.value;
    }
  
    // kelvin
    if (inputValue === "kelvin" && outputValue === "celsius") {
      result.value = Number(val.value) - 273.15;
    } else if (inputValue === "kelvin" && outputValue === "fahrenheit") {
      result.value = Number(((val.value - 273.15) * 9) / 5) + 32;
    } else if (inputValue === "kelvin" && outputValue === "kelvin") {
      result.value = val.value;
    }
  }
  
  function resetForm(){
    document.getElementById("myForm").reset();
  } 