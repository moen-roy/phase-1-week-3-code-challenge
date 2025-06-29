document.addEventListener("DOMContentLoaded", main);
//  call back function
function main() {
  displayPosts();
  addNewPostListener();
}
//  method
function displayPosts() {
  fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(posts => {
      const postList = document.getElementById("posts-list");
        // clear list first before new entry
        posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.textContent = post.title;
        postElement.addEventListener("click", () => handlePostClick(post.id));    // hoisting of function
        postList.appendChild(postElement);
      });
    });

}
    // takes the posts id which is its unique idenifire
function handlePostClick(id) {
  fetch(`http://localhost:3000/posts/${id}`)
    .then(res => res.json())
    .then(post => {
      const detailDiv = document.getElementById("post-detail");
      detailDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p><strong>Author:</strong> ${post.author}</p>
      `;
    });
}
// used for adding data
function addNewPostListener() {
  const form = document.querySelector("#new-post");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("new-title").value;
    const content = document.getElementById("new-content").value;
    const author = document.getElementById("new-author").value;

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, author })
    })
      .then(res => res.json())
      .then(newPost => {
        displayPosts(); // Refresh the post list
        form.reset();   // Clear the form
      });
  });
}
