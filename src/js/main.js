var active_elements = {};


function toggleActionButton(element_class, active) {
    var toggle_action_button = $('.toggle-action-button[value="' + element_class + '"]');
    if (active) {
        toggle_action_button.addClass('active');
    } else {
        toggle_action_button.removeClass('active');
    }
}
/*
 function toggleElements(post_type, selected) {
 var box_containers = $(".box." + post_type).parent('div');
 (selected) ? box_containers.show() : box_containers.hide();
 updateMasonry();
 }*/

function toggleElements(element_class, active) {
    var element = $("." + element_class);
    if (active) {
        element.show();
    } else {
        element.hide();
    }
}

function resetToggle() {
    $(".toggle-elements").each(function () {
        var element_class = $(this).val();
        var active = false;
        active_elements[element_class] = active;
        toggleActionButton(element_class, active);
        toggleElements(element_class, active);
    });
}

//var active_elements = (localStorage.getItem("active_elements") === null) ? {} : JSON.parse(localStorage.getItem("active_elements"));

$(document).on("keyup", ".input-group input", function () {
    $(this).removeClass("is-not-empty");
    if ($(this).val() !== "") $(this).addClass("is-not-empty");
});

$(document).on("change", ".input-group input", function () {
    $(this).removeClass("is-not-empty");
    if ($(this).val() !== "") $(this).addClass("is-not-empty");
});

$(document).on("change", ".input-group select", function () {
    $(this).removeClass("is-not-empty");
    if ($(this).val()) $(this).addClass("is-not-empty");
});

$(document).ready(function () {

    if ($("#action-menu").length) {
        $("body").addClass("has-action-menu");
    }

    // Toggle dropdown
    $(document).mouseup(function (e) {
        var container = $(".dropdown-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass("active");
        } else {
            container.toggleClass("active");
        }
    });

    $(".sidenav-toggle").click(function () {
        if ($("body").hasClass("sidebar-active")) {
            $("body").removeClass("sidebar-active");
        } else {
            $("body").addClass("sidebar-active");
        }
        // window.setTimeout(updateMasonry, 300);
    });

    $(".input-group input").each(function () {
        if ($(this).val())$(this).addClass("is-not-empty");
    });
    $(".input-group select").each(function () {
        if ($(this).val()) $(this).addClass("is-not-empty");
    });

    // Update class for dynamically added input elements
    document.addEventListener("DOMNodeInserted", function (event) {
        var target = event.srcElement || event.target;
        var elements = $(target).find(".input-group input");
        if (elements.length > 0) {
            elements.each(function () {
                if ($(this).val() && $(this).hasClass("is-not-empty") === false) $(this).addClass("is-not-empty");
            });
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
        if (toggle_type == 'radio') {
            if ($(this).hasClass("active")) {
                $("body").removeClass("modal-active");
                resetToggle();
                return false;
            } else {
                resetToggle();
                $("body").addClass("modal-active");
            }
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
        if ($(this).hasClass("active")) {
            $("body").addClass("action-menu-active");
        } else {
            $("body").removeClass("action-menu-active");
        }
    });

    $(".main-content").click(function () {
        resetToggle();
        $("body").removeClass("modal-active");
    });
});