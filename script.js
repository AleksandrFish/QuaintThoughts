document.addEventListener('DOMContentLoaded', function() {
    // Example: Load blog posts dynamically (you can replace this with your own logic)
    var blogPosts = [
        { title: "Post 1", content: "Content of post 1" },
        { title: "Post 2", content: "Content of post 2" }
        // Add more posts here
    ];

    var postsContainer = document.getElementById('blog-posts');
    blogPosts.forEach(function(post) {
        var postElement = document.createElement('div');
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        postsContainer.appendChild(postElement);
    });
});
