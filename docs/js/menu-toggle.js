document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-btn");

    // Завантажуємо стан меню з LocalStorage
    const savedState = JSON.parse(localStorage.getItem("menuState")) || {};

    buttons.forEach(button => {
        let submenu = button.parentElement.nextElementSibling;
        if (submenu) {
            let menuId = submenu.dataset.menuId || submenu.previousElementSibling.textContent.trim();
            
            // Перевіряємо, чи це меню було відкрито раніше
            if (savedState[menuId]) {
                submenu.style.display = "block";
                button.classList.add("open");
            }

            button.addEventListener("click", function () {
                let isOpen = submenu.style.display === "block";
                
                submenu.style.display = isOpen ? "none" : "block";
                button.classList.toggle("open");

                // Оновлюємо стан у LocalStorage
                savedState[menuId] = !isOpen;
                localStorage.setItem("menuState", JSON.stringify(savedState));
            });
        }
    });
});