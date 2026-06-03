// MathJax configuration — must run before the MathJax script loads
window.MathJax = {
  tex: { tags: 'ams' }
};

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar ──
  const placeholder = document.getElementById('navbar-placeholder');
  if (placeholder) {
    placeholder.innerHTML = `
      <nav class="navbar">
        <div class="nav-inner">
          <a href="/index.html" class="nav-link">Home</a>

          <div class="dropdown">
            <span class="nav-link dropdown-button">CV ▾</span>
            <div class="dropdown-content">
              <a href="/CV/Education.html">Education</a>
              <a href="/CV/Experience.html">Experience</a>
            </div>
          </div>

          <a href="/Projects/Projects.html" class="nav-link">Projects</a>

          <div class="dropdown">
            <span class="nav-link dropdown-button">Work ▾</span>
            <div class="dropdown-content">
              <a href="/Work/MMC/MMC.html">MMC</a>
            </div>
          </div>

          <div class="dropdown">
            <span class="nav-link dropdown-button">Courses ▾</span>
            <div class="dropdown-content">
              <a href="/Courses/Bachelor_Machines/Bachelor_Machines.html">Bachelor Machines</a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  // ── Auto-number figure captions ──
  document.querySelectorAll('figcaption').forEach((caption, i) => {
    caption.innerHTML = caption.innerHTML.replace(/Figure\s*[X\d]+:/i, `Figure ${i + 1}:`);
  });

  // ── Auto-number figure references in text ──
  document.querySelectorAll('figure').forEach((fig, i) => {
    if (fig.id) {
      document.querySelectorAll(`a[href="#${fig.id}"]`).forEach(link => {
        link.textContent = `Fig. ${i + 1}`;
      });
    }
  });

  // ── Footer ──
  document.body.insertAdjacentHTML('beforeend', `
    <footer>
        <p>&copy; 2026 Hitesh Dialani · Built with HTML, CSS & JavaScript</p>
    </footer>
  `);

});