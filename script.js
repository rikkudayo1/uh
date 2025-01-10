const btn = document.getElementById("menu-button");
const menu1 = document.getElementById("menu-window")

function toggle(button, menu) {
    button.addEventListener("click", () => {
        if (menu.style.height == "225px") {
            menu.style.height = "0px"
        } else {
            menu.style.height = "225px"
        };
    });
};

toggle(btn, menu1)