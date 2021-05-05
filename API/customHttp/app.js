//https://jsonplaceholder.typicode.com/posts

const http = new easyHttp();

// http.get(
//   "https://jsonplaceholder.typicode.com/posts",
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   },
// );


http.get(
  "https://jsonplaceholder.typicode.com/posts/3",
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  },
);

// Create Data 
// const data = { title: "Custom post", body: "Custom body" };

// Create post
// http.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   data,
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   },
// );

// Update Post
// http.put(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   data,
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   },
// );

// Delete Post
// http.delete(
//   "https://jsonplaceholder.typicode.com/posts/5",
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   },
// );