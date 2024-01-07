const tablinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll('.tab-contents');

function openTab(tabname) {
    tablinks.forEach(tablink => {
        tablink.classList.remove("active-links");
    });

    tabContents.forEach(tabcontent => {
        tabcontent.classList.remove("active-tabs");
    });

    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tabs");
}

let menuIcon = document.getElementById('menuIcon');
let list = document.getElementById("ul_side_menu");

function openSideMenu() {
    list.style.width = "80%";
    menuIcon.style.display = "none";
    list.style.transition = "width 0.5s";
}

function closeSideMenu(){
    menuIcon.style.display = "block";
    list.style.width = "0";
    menuIcon.style.display = "block";
    list.style.transition = "width 0.5s";
}

document.addEventListener('DOMContentLoaded', function () {
    var backButton = document.getElementById('back_to_header_btn');

    // Function to toggle the visibility of the back-to-header button
    function toggleBackButton() {
        if (window.scrollY > 500) { // Adjust the scroll position threshold as needed
            backButton.style.display = 'block';
        } else {
            backButton.style.display = 'none';
        }
    }

    // Attach the toggleBackButton function to the scroll event
    window.addEventListener('scroll', toggleBackButton);

    // Initial check for visibility on page load
    toggleBackButton();
});

