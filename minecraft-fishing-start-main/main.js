// Functionize Minecraft Fishing Start Code
//variables for elements
var button = document.getElementById("fish-btn");
var input = document.getElementById("autofishInput");
var div = document.getElementById("div");
var selector = document.getElementById("character-select");
var sortBtn = document.getElementById("sort");
var img = document.getElementById("result-img");
var codOutput = document.getElementById("num-cod");
var salmonOutput = document.getElementById("num-salmon");
var tropicalOutput = document.getElementById("num-tropical");
var pufferOutput = document.getElementById("num-puffer");

//global variables
var cod = 0;
var salmon = 0;
var tropical = 0;
var puffer = 0;

//input value starts at one
input.value = 1;

//event listener
button.addEventListener("click", fishBtnClicked);
sortBtn.addEventListener("click", sortInventory);

//fish function
function fishBtnClicked() {
  var value = +input.value;
  var counter1 = 0;

  //loop
  while (counter1 < value) {
    var character = selector.value;
    var RNG = Math.random();

    //steve
    if (character == "steve") {
      if (RNG <= 0.05) {
        puffer = puffer + 1;
        img.src = "img/Pufferfish.png";
        div.innerHTML =
          div.innerHTML +
          `<img src="img/Pufferfish.png" alt="puffer" width="35px">`;
      } else if (RNG <= 0.1) {
        tropical = tropical + 1;
        img.src = "img/Tropical-Fish.png";
        div.innerHTML =
          div.innerHTML +
          `<img src="img/Tropical-Fish.png" alt="tropic" width="35px">`;
      } else if (RNG <= 0.3) {
        salmon = salmon + 1;
        img.src = "img/Raw-Salmon.png";
        div.innerHTML =
          div.innerHTML +
          `<img src="img/Raw-Salmon.png" alt="salmon" width="35px">`;
      } else if (RNG >= 0.3) {
        cod = cod + 1;
        img.src = "img/Raw-Cod.png";
        div.innerHTML =
          div.innerHTML + `<img src="img/Raw-Cod.png" alt="cod" width="35px">`;
      }
      //alex
    } else if (character == "alex") {
      if (RNG <= 0) {
        cod = cod + 1;
        img.src = "img/Raw-Cod.png";
        div.innerHTML =
          div.innerHTML + `<img src="img/Raw-Cod.png" alt="cod" width="35px">`;
      } else if (RNG <= 0.1) {
        salmon = salmon + 1;
        img.src = "img/Raw-Salmon.png";
        div.innerHTML =
          div.innerHTML +
          `<img src="img/Raw-Salmon.png" alt="salmon" width="35px">`;
      } else if (RNG <= 0.2) {
        tropical = tropical + 1;
        img.src = "img/Tropical-Fish.png";
        div.innerHTML =
          div.innerHTML +
          `<img src="img/Tropical-Fish.png" alt="tropic" width="35px">`;
      } else if (RNG >= 0.5) {
        puffer = puffer + 1;
        img.src = "img/Pufferfish.png";
        div.innerHTML =
          div.innerHTML +
          `<img src="img/Pufferfish.png" alt="puffer" width="35px">`;
      }
      //villager
    } else if (character == "villager") {
      if (RNG <= 0.25) {
        puffer = puffer + 1;
        img.src = "img/Pufferfish.png";
        div.innerHTML =
          div.innerHTML +
          `<img src="img/Pufferfish.png" alt="puffer" width="35px">`;
      } else if (RNG <= 0.5) {
        tropical = tropical + 1;
        img.src = "img/Tropical-Fish.png";
        div.innerHTML =
          div.innerHTML +
          `<img src="img/Tropical-Fish.png" alt="tropic" width="35px">`;
      } else if (RNG <= 0.75) {
        salmon = salmon + 1;
        img.src = "img/Raw-Salmon.png";
        div.innerHTML =
          div.innerHTML +
          `<img src="img/Raw-Salmon.png" alt="salmon" width="35px">`;
      } else if (RNG >= 0.75) {
        cod = cod + 1;
        img.src = "img/Raw-Cod.png";
        div.innerHTML =
          div.innerHTML + `<img src="img/Raw-Cod.png" alt="cod" width="35px">`;
      }
    }
    counter1++;
  }

  codOutput.innerHTML = cod;
  salmonOutput.innerHTML = salmon;
  tropicalOutput.innerHTML = tropical;
  pufferOutput.innerHTML = puffer;
}

//sort function
function sortInventory() {
  var counter2 = 0;

  //empty inventory
  div.innerHTML = "";

  //sort inventory

  //cod

  while (true) {
    if (counter2 >= cod) {
      counter2 = 0;
      break;
    } else if (counter2 <= cod) {
      div.innerHTML =
        div.innerHTML + `<img src="img/Raw-Cod.png" alt="cod" width="35px">`;
      counter2++;
    }
  }

  //salmon
  while (true) {
    if (counter2 >= salmon) {
      counter2 = 0;
      break;
    } else if (counter2 <= salmon) {
      div.innerHTML =
        div.innerHTML +
        `<img src="img/Raw-Salmon.png" alt="salmon" width="35px">`;
      counter2++;
    }
  }

  //tropical

  while (true) {
    if (counter2 >= tropical) {
      counter2 = 0;
      break;
    } else if (counter2 <= tropical) {
      div.innerHTML =
        div.innerHTML +
        `<img src="img/Tropical-Fish.png" alt="tropic" width="35px">`;
      counter2++;
    }
  }

  //puffer

  while (true) {
    if (counter2 >= puffer) {
      counter2 = 0;
      break;
    } else if (counter2 <= puffer) {
      div.innerHTML =
        div.innerHTML +
        `<img src="img/Pufferfish.png" alt="puffer" width="35px">`;
      counter2++;
    }
  }
}
