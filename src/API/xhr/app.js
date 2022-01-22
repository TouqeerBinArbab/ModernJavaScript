document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  //OPEN

  xhr.open("GET", "data.txt", true);

  // console.log(xhr.readyState);

  // Optional - Used for Spinners/Loaders

  xhr.onprogress = function () {
    console.log(xhr.readyState);
  };

  xhr.onload = function () {
    if (this.status === 200) {
      
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  };

  xhr.onerror = function(){
    console.log('Request error... ')
  }

  // xhr.onreadystatechange = function () {
  //   console.log(xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request recieved
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}
