// MathJax configuration — must run before the MathJax script loads
window.MathJax = {
  tex: { tags: 'ams' }
};

document.addEventListener('DOMContentLoaded', () => {

  // Auto-number figure captions
  document.querySelectorAll('figcaption').forEach((caption, i) => {
    caption.innerHTML = caption.innerHTML.replace(/Figure\s*[X\d]+:/i, `Figure ${i + 1}:`);
  });

  // Auto-number figure references in text
  document.querySelectorAll('figure').forEach((fig, i) => {
    if (fig.id) {
      document.querySelectorAll(`a[href="#${fig.id}"]`).forEach(link => {
        link.textContent = `Fig. ${i + 1}`;
      });
    }
  });

  // Footer
  document.body.insertAdjacentHTML('beforeend', `
    <footer>
        <p>&copy; 2026 Hitesh Dialani · Built with HTML, CSS & JavaScript</p>
    </footer>
  `);

});