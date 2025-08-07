document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    hamburger.addEventListener('click', function() {
        sidebar.style.display = 'flex';
    });
    closeSidebar.addEventListener('click', function() {
        sidebar.style.display = 'none';
    });
    // Hide sidebar when clicking outside (except hamburger and close btn)
    document.addEventListener('click', function(e) {
        if (sidebar.style.display === 'flex' && !sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            sidebar.style.display = 'none';
        }
    });
});
