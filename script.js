document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
    
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const buttonText = button.textContent;
        
        if (buttonText === "C") {
          currentInput = "";
        } else if (buttonText === "=") {
          try {
            currentInput = eval(currentInput).toString();
          } catch (error) {
            currentInput = "Error";
          }
        } else {
          currentInput += buttonText;
        }
        
        display.textContent = currentInput;
      });
    });
  });
  