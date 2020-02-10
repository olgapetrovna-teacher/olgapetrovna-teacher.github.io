LIMIT_TO_REPLACE_CAREER_AND_CREED = 961

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

if(innerWidth < LIMIT_TO_REPLACE_CAREER_AND_CREED) {
    replaceCreedAndNavbarItem1();
}


window.addEventListener("resize", function() {
    if(innerWidth < LIMIT_TO_REPLACE_CAREER_AND_CREED) {
        replaceCreedAndNavbarItem1();
    }
    else if(innerWidth >= LIMIT_TO_REPLACE_CAREER_AND_CREED) {
        replaceNavbarItem1AndCreed();
    }
});
