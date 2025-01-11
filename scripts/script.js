const btn = document.getElementById("menu-button");
const menu1 = document.getElementById("menu-window");

function toggle(button, menu) {
    button.addEventListener("click", () => {
        if (menu.style.height == "275px") {
            menu.style.height = "0px"
        } else {
            menu.style.height = "275px"
        };
    });
};

toggle(btn, menu1)