function convertTemperature(){
    let val = document.getElementById("input_value");
    let res = document.getElementById("result");
    let inp = document.getElementById("input");
    let out = document.getElementById("output");

    val.addEventListener("keyup", convertTemperature);
    inp.addEventListener("change", convertTemperature);
    out.addEventListener("change", convertTemperature);

    let inputValue = inp.value;
    let outputValue = out.value;
    if(inputValue === "celsius" && outputValue === "fahrenheit"){
      res.value = Number((val.value) * 9/5) + 32;
    }else if(inputValue === "celsius" && outputValue === "kelvin"){
      res.value = Number(val.value) + 273.15;
    }else if(inputValue === "celsius" && outputValue === "celsius"){
      res.value = val.value;
    }


    //Fahrenheit
    if(inputValue === "fahrenheit" && outputValue === "celsius"){
      res.value = Number((val.value - 32) * 5) / 9;
    }else if(inputValue === "fahrenheit" && outputValue === "kelvin"){
      res.value = Number((val.value - 32) * 5/9) + 273.15;
    }else if(inputValue === "fahrenheit" && outputValue === "fahrenheit"){
      res.value = val.value;
    }


    //Kelvin
    if(inputValue === "kelvin" && outputValue === "celsius"){
      res.value = Number(val.value) - 273.15;
    }else if(inputValue === "kelvin" && outputValue === "fahrenheit"){
      res.value = Number((val.value - 273.15) * 9/5) + 32;
    }else if(inputValue === "kelvin" && outputValue === "kelvin"){
      res.value = val.value;
    }


  }

  function reset(){
    convertTemperature();
  }