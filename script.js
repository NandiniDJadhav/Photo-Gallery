function filterImages() {
    let input = document.getElementById('searchBox').value.toLowerCase();
    let images = document.querySelectorAll('.gallery-container img');

    images.forEach(img => {
        let tags = img.getAttribute('data-tags');
        if (tags.includes(input)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}
