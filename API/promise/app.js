let posts = [
  { title: "post one", body: "body for post one" },
  { title: "post two", body: "body for post two" },
];

// function createPost(body) {
//   setTimeout(function () {
//     posts.push(body);

//   }, 2000);
// }

// function getPost() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach(function (post) {
//       output += `<li>Title: ${post.title}</li>`;
//     });
//     document.body.innerHTML = output
//   }, 1000);
// }

// createPost({ title: "post three", body: "body for post three" });

// getPost();

function createPost(body) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(body);
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject(console.log("Error! SOmething went wrong!"));
      }
    }, 2000);
  });
}

function getPost() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>Title: ${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "post three", body: "body for post three" })
  .then(getPost)
  
