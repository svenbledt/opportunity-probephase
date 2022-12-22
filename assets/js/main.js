function green() {
    let element = document.getElementById("smiley");
    let text = document.getElementById("text");
    if (element.classList.contains("bi-emoji-dizzy")) {
      element.classList.replace("bi-emoji-dizzy", "bi-emoji-heart-eyes");
      element.style.color = "green";
      text.innerHTML = "Super das ghöremer doch gern!";
      text.style.color = "green";
    } else if (element.classList.contains("bi-emoji-smile")) {
      element.classList.replace("bi-emoji-smile", "bi-emoji-heart-eyes");
      element.style.color = "green";
      text.innerHTML = "Super das ghöremer doch gern";
      text.style.color = "green";
    }
  }

  function red() {
    let element = document.getElementById("smiley");
    let text = document.getElementById("text");
    if (element.classList.contains("bi-emoji-heart-eyes")) {
      element.classList.replace("bi-emoji-heart-eyes", "bi-emoji-dizzy");
      element.style.color = "red";
      text.innerHTML = "Das dut mer also würkli leid";
      text.style.color = "red";
    } else if (element.classList.contains("bi-emoji-smile")) {
      element.classList.replace("bi-emoji-smile", "bi-emoji-dizzy");
      element.style.color = "red";
      text.innerHTML = "Das dut mer also würkli leid";
      text.style.color = "red";
    }
  }