document.addEventListener('DOMContentLoaded', () => {
  const captions = document.querySelectorAll('figcaption');
  captions.forEach((caption, index) => {
    const number = index + 1;
    caption.innerHTML = caption.innerHTML.replace(/Figure\s*[X\d]+:/i, `Figure ${number}:`);
  });
});


document.body.insertAdjacentHTML('beforeend', `
    <footer>
        <p>&copy; 2026 Hitesh Dialani · Built with HTML, CSS & JavaScript</p>
    </footer>
`);