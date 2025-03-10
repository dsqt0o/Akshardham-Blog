document.addEventListener("DOMContentLoaded", function () {
    // Add "Back to Top" button functionality
    const backToTopBtn = document.createElement("button");
    backToTopBtn.textContent = "Back to Top";
    backToTopBtn.classList.add("btn", "btn-dark");
    backToTopBtn.style.position = "fixed";
    backToTopBtn.style.bottom = "20px";
    backToTopBtn.style.right = "20px";
    backToTopBtn.style.display = "none";
    document.body.appendChild(backToTopBtn);

    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    backToTopBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Add smooth scrolling for all internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
