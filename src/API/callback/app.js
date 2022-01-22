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

function createPost(body, callback) {
  setTimeout(function () {
    posts.push(body);
    callback();
  }, 2000);
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

createPost({ title: "post three", body: "body for post three" }, getPost);
