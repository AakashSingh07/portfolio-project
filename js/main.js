document.addEventListener("DOMContentLoaded", () => {
    const typed = new Typed('#element', {
        strings: ['Web Developer.', 'Programmer.', 'Tech Enthusiast.'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    const scrollBtn = document.getElementById("scrollToTopBtn");
    window.onscroll = () => {
        scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
    };
    scrollBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    const navLinks = document.querySelectorAll(".nav-links a");

    const closeSidebar = () => {
        sidebar.classList.remove("active");
        document.body.classList.remove("sidebar-open");
        menuToggle.classList.remove("hide");
    };

    const openSidebar = () => {
        sidebar.classList.add("active");
        document.body.classList.add("sidebar-open");
        menuToggle.classList.add("hide");
    };

    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation(); 
        if (sidebar.classList.contains("active")) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

   
    navLinks.forEach(link => {
        link.addEventListener("click", closeSidebar);
    });

    
    document.addEventListener("click", (e) => {
        if (sidebar.classList.contains("active") && !sidebar.contains(e.target)) {
            closeSidebar();
        }
    });


    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && sidebar.classList.contains("active")) {
            closeSidebar();
        }
    });
});