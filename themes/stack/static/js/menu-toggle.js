document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".toggle-btn");

    // Завантажуємо стан меню з LocalStorage
    const savedState = JSON.parse(localStorage.getItem("menu-state")) || {};

    buttons.forEach(button => {
        let submenu = button.parentElement.nextElementSibling;
        if (submenu) {
            let menuId = button.dataset.menuId;
            
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
                localStorage.setItem("menu-state", JSON.stringify(savedState));
            });
        }
    });
});
