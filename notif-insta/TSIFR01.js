document.addEventListener("DOMContentLoaded", () => {const commentSection = document.querySelector(".comment-section");const openButton = document.getElementById("comment-open-button");const closeButton = document.getElementById("comment-close-button");openButton.addEventListener("click", (event) => {event.stopPropagation();commentSection.classList.add("active");});closeButton.addEventListener("click", (event) => {event.stopPropagation();commentSection.classList.remove("active");});document.addEventListener("click", (event) => {if (!commentSection.contains(event.target) && !openButton.contains(event.target)) {commentSection.classList.remove("active");}});});
