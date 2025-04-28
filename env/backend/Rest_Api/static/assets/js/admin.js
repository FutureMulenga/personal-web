// DOM Elements
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const toggleSidebarBtn = document.getElementById('toggle-sidebar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelectorAll('.nav-link');
const pageTitle = document.getElementById('page-title');
const pages = document.querySelectorAll('.page-content');

// Toggle sidebar
toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    adjustMainContent();
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('mobile-open');
});

// Adjust main content margin based on sidebar width
function adjustMainContent() {
    if (window.innerWidth > 768) {
        if (sidebar.classList.contains('collapsed')) {
            mainContent.style.marginLeft = '100px';
        } else {
            mainContent.style.marginLeft = '250px';
        }
    } else {
        mainContent.style.marginLeft = '0';
    }
}

// Initialize main content margin
adjustMainContent();

// Handle window resize
window.addEventListener('resize', adjustMainContent);

// Navigation functionality
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Get the page id from data attribute
        const pageId = link.getAttribute('data-page');
        
        // Update page title
        const linkText = link.querySelector('.nav-text').textContent;
        pageTitle.textContent = linkText;
        
        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));
        
        // Show the selected page
        document.getElementById(`${pageId}-page`).classList.add('active');
        
        // Close sidebar on mobile after navigation
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('mobile-open');
        }
    });
});