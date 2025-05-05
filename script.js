document.querySelectorAll('.hover-animate').forEach(img => {
    img.addEventListener('click', () => {
      alert('You clicked on a project image!');
    });
  });
  
function highlightImage(img) {
    img.style.transform = 'scale(1.1)';
    img.style.boxShadow = '0 8px 16px rgba(255, 255, 255, 0.6)';
  }

  function resetImage(img) {
    img.style.transform = 'scale(1)';
    img.style.boxShadow = '0 4px 8px rgba(255, 255, 255, 0.3)';
  }