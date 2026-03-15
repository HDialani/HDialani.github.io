hljs.highlightAll();

document.addEventListener('DOMContentLoaded', () => {
  const captions = document.querySelectorAll('figcaption');
  captions.forEach((caption, index) => {
    const number = index + 1;
    caption.innerHTML = caption.innerHTML.replace(/Figure\s*[X\d]+:/i, `Figure ${number}:`);
  });
});
