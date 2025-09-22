let inputn = document.getElementById("inputBox");
    let buttons = document.querySelectorAll("button");
    let string = "";
    let arr = Array.from(buttons);

    arr.forEach(button => {
      button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
          try {
            string = eval(string);
            inputn.value = string;
          } catch {
            inputn.value = "Error";
            string = "";
          }
        } 
        else if (e.target.innerHTML == "AC") {
          string = "";
          inputn.value = string;
        } 
        else if (e.target.innerHTML == "DEL") {
          string = string.substring(0, string.length - 1);
          inputn.value = string;
        } 
        else {
          string += e.target.innerHTML;
          inputn.value = string;
        }
      });
    });
