function replaceCreedAndNavbarItem1() {
    navbar_item_1 = $("#navbar_item_1")
    creed = $("#navbar_creed");
    $(".navbar").children().first().replaceWith(creed);
    $("#navbar_creed").after(navbar_item_1);
}

function replaceNavbarItem1AndCreed() {
    navbar_item_1 = $("#navbar_item_1")
    creed = $("#navbar_creed");
    $(".navbar").children().first().replaceWith(navbar_item_1);
    $("#navbar_item_1").after(creed);
}

if(innerWidth < 992) {
    replaceCreedAndNavbarItem1();
}


window.addEventListener("resize", function() {
    if(innerWidth < 992) {
        replaceCreedAndNavbarItem1();
    }
    else if(innerWidth >= 992) {
        replaceNavbarItem1AndCreed();
    }
});
