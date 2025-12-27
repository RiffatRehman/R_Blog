// category.js
import { db } from './firebase.js';
import { collection, getDocs, orderBy } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Get category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

// Set category title
document.getElementById("category-title").textContent = category ? category.toUpperCase() : "All Blogs";

// Container for filtered blogs
const container = document.getElementById("filtered-blogs");

async function fetchCategoryBlogs() {
    // Get all blogs
    const blogsQuery = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(blogsQuery);
    const blogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Clear container
    container.innerHTML = "";

    // Filter blogs by category (case-insensitive)
    const categoryBlogs = category 
        ? blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase())
        : blogs;

    // Display each blog
    categoryBlogs.forEach(blog => {
        const div = document.createElement("div");
        div.classList.add("recent-blog-item");
        div.innerHTML = `
            <img src="${blog.imageUrl}" alt="${blog.title}">
            <div class="blog-info">
                <p>${new Date(blog.createdAt?.seconds*1000).toLocaleDateString()} - ${blog.category}</p>
                <h4>${blog.title}</h4>
                <p>${blog.description.substring(0,150)}...</p>
                <button onclick="window.location.href='blog-detail.html?id=${blog.id}'" class="read-more-btn">Read More</button>
            </div>
        `;
        container.appendChild(div);
    });
}

fetchCategoryBlogs();
