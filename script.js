// JavaScript for handling project dropdown
function navigateToProject() {
    let dropdown = document.getElementById("project");
    let selectedProject = dropdown.options[dropdown.selectedIndex].value;

    if (selectedProject) {
        window.location.href = selectedProject;
    }
}
