document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternalData);

function getText() {
  fetch("test.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (response) {
      document.getElementById("output").innerHTML = response;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getJson() {
  fetch("text.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (response) {
      console.log(response);
      let output = "";
      response.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getExternalData() {
  fetch("https://api.github.com/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (response) {
      console.log(response);
      let output = "";
      response.forEach(function (data) {
        output += `<li>${data.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
