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
if(innerWidth < 531) {
    $(".container").addClass("wrapper");
    $(".wrapper").removeClass("container");
}

window.addEventListener("resize", function() {
    if(innerWidth < 992) {
        replaceCreedAndNavbarItem1();
    }
    else if(innerWidth >= 992) {
        replaceNavbarItem1AndCreed();
    }
    if(innerWidth < 531) {
        $(".container").addClass("wrapper");
        $(".container").removeClass("container");
    } else {  
        $(".wrapper").addClass("container");
        $(".container").removeClass("wrapper");
    }
});
