// ===================================================================================================
// ███████ ███████ ██      ███████  ██████ ████████ ██████
// ██      ██      ██      ██      ██         ██         ██
// ███████ █████   ██      █████   ██         ██     █████
//      ██ ██      ██      ██      ██         ██    ██
// ███████ ███████ ███████ ███████  ██████    ██    ███████
// ===================================================================================================

// $("select").select2().maximizeSelect2Height({
//     cushion: 20 // Must be a numerical pixel value.
// });

$(".select2").select2({
    // width: '100%', // need to override the changed default
    // width: 'resolve',
    // width: 'element',
    minimumResultsForSearch: 12
}).maximizeSelect2Height({
    cushion: 20
});

// $(".select2").attr("tabIndex", 1);

$('.select2').on('select2:close', function (e) { 
    // console. log('select event');
    // $("a[class*=nav-button]").focus();
    setTimeout(function() {
        $("a[class*=nav-button]").focus();
    }, 1);
});

// $(".select2").on(
//     "select2:close",
//     function() {
//         $("a[class*=nav-button]").focus();
//     }
// );

// $(".select2").on(
//     'select2:open', 
//     function (e) {
//         $('.select2-search input').prop('focus',false);
// });


// =====  End of SELECT 2  =====================================================================================-


// ===================================================================================================
// ███    ██  █████  ██    ██ ██  ██████   █████  ████████ ██  ██████  ███    ██
// ████   ██ ██   ██ ██    ██ ██ ██       ██   ██    ██    ██ ██    ██ ████   ██
// ██ ██  ██ ███████ ██    ██ ██ ██   ███ ███████    ██    ██ ██    ██ ██ ██  ██
// ██  ██ ██ ██   ██  ██  ██  ██ ██    ██ ██   ██    ██    ██ ██    ██ ██  ██ ██
// ██   ████ ██   ██   ████   ██  ██████  ██   ██    ██    ██  ██████  ██   ████
// ===================================================================================================
function navInit() {
if ($("span").hasClass("select2-container--open")) {
    $("header").addClass("nav-down");
} else {}


if ($("body").attr("id")) {

} else {
    $(".moves-out").removeClass("moves-out");
    $(".cd-subnav-trigger").hide();
}

$(".nav-button-life").hide();
$(".nav-button-work").hide();
$(".nav-button-writing").hide();
}

navInit();





// ===================================================================================================
// =            WORK BODY SET            =
// ===================================================================================================

if ($("body").is("#work")) {
    $(".nav-work-off").toggleClass("nav-work-off nav-work-on");
} else {
    $(".nav-work-off");
}

// var selectWork = $('#select-work-client');
// selectWork.onchange = function() {
//     $("#select-work-client .button").show().attr("href", $(this).val() + ".html");
// };

$("#select-work-client fieldset select").change(function() {
    if ($(this).val() !== "") {
        $(".nav-button-work").show().attr("href", "/work/" + $(this).val() + ".html");
    } else {
        $(".nav-button-work").hide();
    }
});

// =====  End of WORK BODY SET  =====================================================================================-





// =====  End of NAV STATES  =====



// ===================================================================================================
// =            SECONDARY NAVIGATION            =
// ===================================================================================================
//move nav element position according to window width
moveNavigation();
$(window).on("resize", function() {
    (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300): window.requestAnimationFrame(moveNavigation);
});

//mobile version - open/close navigation
$(".cd-nav-trigger").on("click", function(event) {
    event.preventDefault();
    if ($("header").hasClass("nav-is-visible")) $(".moves-out").removeClass("moves-out");

    $("header").toggleClass("nav-is-visible");
    $(".cd-main-nav").toggleClass("nav-is-visible");
    $(".cd-main-content").toggleClass("nav-is-visible");
    $(".imageHeader-full").toggleClass("nav-is-visible");
});

//mobile version - go back to main navigation
$(".go-back").on("click", function(event) {
    event.preventDefault();
    $(".cd-main-nav").removeClass("moves-out");
});

//open sub-navigation
$(".cd-subnav-trigger").on("click", function(event) {
    event.preventDefault();
    $(".cd-main-nav").toggleClass("moves-out");
});

function moveNavigation() {
    var navigation = $(".cd-main-nav-wrapper");
    var screenSize = checkWindowWidth();
    if (screenSize) {
        //desktop screen - insert navigation inside header element
        navigation.detach();
        navigation.insertBefore(".cd-nav-trigger");
    } else {
        //mobile screen - insert navigation after .cd-main-content element
        navigation.detach();
        navigation.insertAfter(".cd-main-content");
    }
}

function checkWindowWidth() {
    var mq = window.getComputedStyle(document.querySelector("header"), "::before").getPropertyValue("content").replace(
        /"/g, "").replace(/"/g, "");
    return (mq == "mobile") ? false : true;
}

// =====  End of SECONDARY NAVIGATION  =====



// =============================================================================================
// ███    ██  █████  ██    ██      ██████  ██████  ███    ██ ████████ ███████ ███    ██ ████████
// ████   ██ ██   ██ ██    ██     ██      ██    ██ ████   ██    ██    ██      ████   ██    ██
// ██ ██  ██ ███████ ██    ██     ██      ██    ██ ██ ██  ██    ██    █████   ██ ██  ██    ██
// ██  ██ ██ ██   ██  ██  ██      ██      ██    ██ ██  ██ ██    ██    ██      ██  ██ ██    ██
// ██   ████ ██   ██   ████        ██████  ██████  ██   ████    ██    ███████ ██   ████    ██
// =============================================================================================


function formatNav(navEntry) {
    if (!navEntry.id) {
        return navEntry.text;
    }
    var $navEntry = $(
        '<div class="row align-middle shrink"><div class="column shrink small-pl0"><img src="' + navEntry.thumbnail + '" style="max-width: 50px;"/> ' + '</div><div class="column small-pl0">' + navEntry.text + '<br/><span class="footnote">' + navEntry.caption + '</span></div></div></div>'
    );
    return $navEntry;
}

function formatNavNoCaption(navEntry) {
    if (!navEntry.id) {
        return navEntry.text;
    }
    var $navEntry = $(
        '<div class="row align-middle shrink"><div class="column shrink small-pl0"><img src="' + navEntry.thumbnail + '" style="max-width: 50px;"/> ' + '</div><div class="column small-pl0">' + navEntry.text + '</div></div></div>'
    );
    return $navEntry;
}

$(".CHANGE_ME").select2({
    data: [
        {
            id: "",
            text: "",
            caption: "",
            thumbnail: ""
        },
        {
            id: "index",
            text: "VIEW ALL →",
            caption: "",
            thumbnail: ""
        },
        {
            text: "CHANGE_ME",
            children: [
                {
                    id: "CHANGE_ME",
                    text: "CHANGE_ME",
                    caption: "CHANGE_ME",
                    thumbnail: "CHANGE_ME"
                }
            ]
        }
    ],
    templateResult: formatNav
});


//@codekit-append "nav-work.js";
//@codekit-append "nav-life.js";
//@codekit-append "nav-writing.js";


// -----  End of NAV CONTENT  ---------------------------------------------
