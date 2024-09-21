document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalTools = document.getElementById('modal-tools');
    const modalDate = document.getElementById('modal-date');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    // Function to open modal with image and details
    images.forEach((img) => {
        img.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImage.src = this.src;
            modalTitle.textContent = this.dataset.title;
            modalCategory.textContent = this.dataset.category;
            modalTools.textContent = this.dataset.tools;
            modalDate.textContent = this.dataset.date;
            modalDescription.textContent = this.dataset.description;
        });
    });

    // Function to close the modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
