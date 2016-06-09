function updateMasonry() {
    var container = $('.masonry-row').masonry({
        itemSelector: '.masonry-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
    container.imagesLoaded(function () {
        container.masonry();
    });
    container.masonry('reloadItems');
    container.masonry('layout');
}

var active_elements = {};


function toggleActionButton(element_class, active) {
    var toggle_action_button = $('.toggle-action-button[value="' + element_class + '"]');
    (active) ? toggle_action_button.addClass('active') : toggle_action_button.removeClass('active');
}
/*
function toggleElements(post_type, selected) {
    var box_containers = $(".box." + post_type).parent('div');
    (selected) ? box_containers.show() : box_containers.hide();
    updateMasonry();
}*/

function toggleElements(element_class, active) {
    var element = $("." + element_class);
    (active) ? element.show() : element.hide();
    updateMasonry();
}

function resetToggle(){
    $(".toggle-elements").each(function(){
        var element_class = $(this).val();
        var active = false;
        active_elements[element_class] = active;
        toggleActionButton(element_class, active);
        toggleElements(element_class, active);
    });
}

//var active_elements = (localStorage.getItem("active_elements") === null) ? {} : JSON.parse(localStorage.getItem("active_elements"));

$(document).ready(function () {
    $(".sidenav-toggle").click(function () {
        if ($("body").hasClass("sidebar-active")) {
            $("body").removeClass("sidebar-active");
        } else {
            $("body").addClass("sidebar-active");
        }
        window.setTimeout(updateMasonry, 300);
    });

    $(".input-group input").change(function () {
        $(this).removeClass("is-not-empty");
        if ($(this).val() === "") {
        } else {
            $(this).addClass("is-not-empty");
        }
    });
/*
    $.each(active_elements, function (element_class, active) {
        toggleActionButton(element_class, active);
        toggleElements(element_class, active);
    });
*/
    $(".toggle-elements").click(function () {
        var toggle_type = $(this).data('type');
        if (toggle_type == 'radio'){
            resetToggle();
        }
        var element_class = $(this).val();
        var active = (active_elements[element_class]) ? false : true;
        active_elements[element_class] = active;
        toggleActionButton(element_class, active);
        toggleElements(element_class, active);
      //  localStorage.setItem("active_elements", JSON.stringify(active_elements));
    });

    $(".action-button").click(function () {
        resetToggle();
        $(this).toggleClass('active');
        $(".action-menu").toggleClass('active');
    });
});

$(window).load(function () {
    updateMasonry();
});




