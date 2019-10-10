    // ===================================================================================================
    // ██      ██ ███████ ███████     ██████   ██████  ██████  ██    ██
    // ██      ██ ██      ██          ██   ██ ██    ██ ██   ██  ██  ██ 
    // ██      ██ █████   █████       ██████  ██    ██ ██   ██   ████  
    // ██      ██ ██      ██          ██   ██ ██    ██ ██   ██    ██   
    // ███████ ██ ██      ███████     ██████   ██████  ██████     ██  
    // ===================================================================================================
    if ($("body").is("#life")) {
        $(".nav-life-off").toggleClass("nav-life-off nav-life-on");
    } else {
        $(".nav-life-off");
    }

    if ($("body").is("#life.books-articles")) {
        $("#select-life fieldset select").val("books-articles");
        $("#life-books-articles").show();
    } else {
        $("#life-books-articles").hide();
    }

    if ($("body").is("#life.events-exhibits")) {
        $("#select-life fieldset select").val("events-exhibits");
        $("#life-events-exhibits").show();
    } else {
        $("#life-events-exhibits").hide();
    }

    if ($("body").is("#life.interviews")) {
        $("#select-life fieldset select").val("interviews");
        $("#life-interviews").show();
    } else {
        $("#life-interviews").hide();
    }

    if ($("body").is("#life.videos")) {
        $("#select-life fieldset select").val("videos");
        $("#life-videos").show();
    } else {
        $("#life-videos").hide();
    }

    // =====  End of LIFE BODY SET  =====================================================================================-



    // ===================================================================================================
    // ██      ██ ███████ ███████     ██      ███████ ██    ██ ███████ ██           ██
    // ██      ██ ██      ██          ██      ██      ██    ██ ██      ██          ███
    // ██      ██ █████   █████       ██      █████   ██    ██ █████   ██           ██
    // ██      ██ ██      ██          ██      ██       ██  ██  ██      ██           ██
    // ███████ ██ ██      ███████     ███████ ███████   ████   ███████ ███████      ██
    // ===================================================================================================

    // var selectLife = document.getElementById('select-life');
    // selectLife.onchange = function() {
    //     $(this).parent().next(".button").show().attr("href", $(this).val() + ".html");
    // };

    $("#select-life fieldset select").change(function() {
        if ($(this).val() === "biography") {
            $(".nav-button-life").show().attr("href", "/life/biography.html");
        } else if ($(this).val() === "portraits") {
            $(".nav-button-life").show().attr("href", "/life/portraits.html");
        } else if ($(this).val() === "rand-house") {
            $(".nav-button-life").show().attr("href", "/life/rand-house.html");
        } else if ($(this).val() === "personal-items") {
            $(".nav-button-life").show().attr("href", "/life/personal-items.html");
        } else if ($(this).val() === "his-inspirations") {
            $(".nav-button-life").show().attr("href", "/life/his-inspirations.html");
        } else if ($(this).val() === "death") {
            $(".nav-button-life").show().attr("href", "/life/death.html");
        } else if ($(this).val() === "sketches-and-notes") {
            $(".nav-button-life").show().attr("href", "/life/sketches-and-notes.html");
        } else if ($(this).val() === "christmas-cards") {
            $(".nav-button-life").show().attr("href", "/life/christmas-cards.html");
        } else {
            $(".nav-button-life").hide();
        }
    });

    $("#select-life fieldset select").change(function() {
        if ($(this).val() === "books-articles") {
            $("#life-books-articles").show();
        } else {
            $("#life-books-articles").hide();
        }
    });

    $("#select-life fieldset select").change(function() {
        if ($(this).val() === "events-exhibits") {
            $("#life-events-exhibits").show();
        } else {
            $("#life-events-exhibits").hide();
        }
    });

    $("#select-life fieldset select").change(function() {
        if ($(this).val() === "interviews") {
            $("#life-interviews").show();
        } else {
            $("#life-interviews").hide();
        }
    });

    $("#select-life fieldset select").change(function() {
        if ($(this).val() === "videos") {
            $("#life-videos").show();
        } else {
            $("#life-videos").hide();
        }
    });

    // =====  End of LIFE LEVEL 1  =====================================================================================-



    // ===================================================================================================

    // ██      ██ ███████ ███████     ██      ███████ ██    ██ ███████ ██          ██████
    // ██      ██ ██      ██          ██      ██      ██    ██ ██      ██               ██
    // ██      ██ █████   █████       ██      █████   ██    ██ █████   ██           █████
    // ██      ██ ██      ██          ██      ██       ██  ██  ██      ██          ██
    // ███████ ██ ██      ███████     ███████ ███████   ████   ███████ ███████     ███████

    // ===================================================================================================

    $("#select-life-books-articles").change(function() {
        if ($(this).val() !== "") {
            $(".nav-button-life").show().attr("href", "/life/books-articles/" + $(this).val());
        } else {
            $(".nav-button-life").hide();
        }
    });

    $("#select-life-events-exhibits").change(function() {
        if ($(this).val() !== "") {
            $(".nav-button-life").show().attr("href", "/life/events-exhibits/" + $(this).val());
        } else {
            $(".nav-button-life").hide();
        }
    });

    $("#select-life-interviews").change(function() {
        if ($(this).val() !== "") {
            $(".nav-button-life").show().attr("href", "/life/interviews/" + $(this).val());
        } else {
            $(".nav-button-life").hide();
        }
    });

    $("#select-life-videos").change(function() {
        if ($(this).val() !== "") {
            $(".nav-button-life").show().attr("href", "/life/videos/" + $(this).val());
        } else {
            $(".nav-button-life").hide();
        }
    });

    // =====  End of LIFE LEVEL 2  =====================================================================================-


    // =============================================================================================
    // ██      ██ ███████ ███████     ███    ███  █████  ██ ███    ██
    // ██      ██ ██      ██          ████  ████ ██   ██ ██ ████   ██
    // ██      ██ █████   █████       ██ ████ ██ ███████ ██ ██ ██  ██
    // ██      ██ ██      ██          ██  ██  ██ ██   ██ ██ ██  ██ ██
    // ███████ ██ ██      ███████     ██      ██ ██   ██ ██ ██   ████
    // =============================================================================================
    $(".nav-life-main").select2({
        data: [
            {
                id: "",
                text: ""
        },
            {
                id: "biography",
                text: "Biography and Timeline"
        },
            {
                id: "books-articles",
                text: "Books and Articles about Paul Rand"
        },
            {
                id: "events-exhibits",
                text: "Exhibits and Events"
        },
            {
                id: "interviews",
                text: "Interviews"
        },
            {
                id: "videos",
                text: "Videos"
        },
            {
                id: "portraits",
                text: "Portraits"
        },
            {
                id: "rand-house",
                text: "The Rand House"
        },
            {
                id: "his-inspirations",
                text: "Inspirations"
        },
            {
                id: "personal-items",
                text: "Personal Items"
        },
            {
                id: "sketches-and-notes",
                text: "Sketches and Notes"
        },
            {
                id: "christmas-cards",
                text: "Christmas Cards"
        },
            {
                id: "death",
                text: "Death"
        }
    ]
    });


    // =============================================================================================
    // ██      ██ ███████ ███████     ██    ██ ██ ██████  ███████  ██████  ███████
    // ██      ██ ██      ██          ██    ██ ██ ██   ██ ██      ██    ██ ██
    // ██      ██ █████   █████       ██    ██ ██ ██   ██ █████   ██    ██ ███████
    // ██      ██ ██      ██           ██  ██  ██ ██   ██ ██      ██    ██      ██
    // ███████ ██ ██      ███████       ████   ██ ██████  ███████  ██████  ███████
    // =============================================================================================
    $(".nav-life-videos").select2({
        data: [
            {
                id: "",
                text: "",
                caption: "",
                thumbnail: ""
        },
            {
                id: "index.html",
                text: "VIEW ALL →",
                caption: "",
                thumbnail: ""
        },
            {
                text: "VIDEOS",
                children: [
                    {
                        id: "1960-graphic-design-at-yale.html",
                        text: "Graphic Design at Yale",
                        caption: "1960",
                        thumbnail: "/life/img/_video-assets/video-yale.jpg"
                },
                    {
                        id: "1991-miggs-burroughs.html",
                        text: "Miggs Burroughs with Paul Rand",
                        caption: "1991",
                        thumbnail: "/life/img/_video-assets/video-miggs.jpg"
                },
                    {
                        id: "1993-steve-jobs.html",
                        text: "Steve Jobs interview about working with Paul Rand",
                        caption: "1993",
                        thumbnail: "/life/img/_video-assets/video-jobs.jpg"
                },
                    {
                        id: "1994-mead-generations.html",
                        text: "Mead Generations",
                        caption: "1994",
                        thumbnail: "/life/img/_video-assets/video-mead.jpg"
                },
                    {
                        id: "1994-steven-heller.html",
                        text: "Steven Heller interviews Paul Rand",
                        caption: "1994",
                        thumbnail: "/life/img/_video-assets/video-heller-minneapolis.jpg"
                },
                    {
                        id: "1996-conversations-with-paul-rand.html",
                        text: "Conversations with Paul Rand",
                        caption: "1996",
                        thumbnail: "/life/img/_video-assets/video-conversations.jpg"
                },
                    {
                        id: "1996-cooper-union.html",
                        text: "Cooper Union",
                        caption: "1996",
                        thumbnail: "/life/img/_video-assets/video-cooper-union.jpg"
                },
                    {
                        id: "1996-MIT.html",
                        text: "MIT: Rand’s Final Public Appearance",
                        caption: "1996",
                        thumbnail: "/life/img/_video-assets/video-next.jpg"
                },
                    {
                        id: "1996-next-introduction.html",
                        text: "NeXT Introduction",
                        caption: "1996",
                        thumbnail: "/life/img/_video-assets/video-MIT.jpg"
                },
                    {
                        id: "2006-john-stossel.html",
                        text: "John Stossel comments on Graphic Design",
                        caption: "2006",
                        thumbnail: "/life/img/_video-assets/video-stossel.jpg"
                },
                    {
                        id: "2007-one-club-hall-of-fame.html",
                        text: "Induction to the One Club Hall Of Fame",
                        caption: "2007",
                        thumbnail: "/life/img/_video-assets/video-oneclub.jpg"
                },
                    {
                        id: "2008-paul-rand-lecture-series.html",
                        text: "Paul Rand Lecture Series",
                        caption: "2008",
                        thumbnail: "/life/img/_video-assets/video-sva.jpg"
                },
                    {
                        id: "2010-encounters-with-paul-rand.html",
                        text: "Encounters with Paul Rand",
                        caption: "2010",
                        thumbnail: "/life/img/_video-assets/video-brody.jpg"
                },
                    {
                        id: "2012-kyle-cooper.html",
                        text: "Kyle Cooper: Studying under Paul Rand",
                        caption: "2012",
                        thumbnail: "/life/img/_video-assets/video-kyle-cooper.jpg"
                },
                    {
                        id: "2013-MODA-design-conversations.html",
                        text: "MODA Design Conversations",
                        caption: "2013",
                        thumbnail: "/life/img/_video-assets/video-moda.jpg"
                },
                    {
                        id: "2013-11-07-MODA-steven-heller.html",
                        text: "Learning from Rand: Steven Heller at MODA",
                        caption: "2013",
                        thumbnail: "/life/img/_video-assets/video-moda-heller.jpg"
                },
                    {
                        id: "2015-steven-heller-design-literacy.html",
                        text: "Design Literacy and Paul Rand with Steven Heller",
                        caption: "2015",
                        thumbnail: "/life/img/_video-assets/video-designLiteracy-heller.jpg"
                },
                    {
                        id: "2015-michael-bierut-talks-brand-design.html",
                        text: "Pentagram’s Michael Bierut Talks Brand Design & The Key To Creating Logos",
                        caption: "2015",
                        thumbnail: "/life/img/_video-assets/video-michaelBierut.jpg"
                },
                    {
                        id: "2018-philip-burton-at-wright.html",
                        text: "Philip Burton on Paul Rand at Wright",
                        caption: "2018",
                        thumbnail: "/life/img/_video-assets/video-philipBurton.jpg"
                },
                    {
                        id: "2019-james-housefield-design-and-the-play-instinct.html",
                        text: "James Housefield: Design and the Play Instinct",
                        caption: "2019",
                        thumbnail: "/life/img/_video-assets/video-jamesHousefield.jpg"
                }
            ]
        }
    ],
        templateResult: formatNav
    });


    // =============================================================================================
    // ██      ██ ███████ ███████     ██ ███    ██ ████████ ███████ ██████  ██    ██ ██ ███████ ██     ██ ███████
    // ██      ██ ██      ██          ██ ████   ██    ██    ██      ██   ██ ██    ██ ██ ██      ██     ██ ██
    // ██      ██ █████   █████       ██ ██ ██  ██    ██    █████   ██████  ██    ██ ██ █████   ██  █  ██ ███████
    // ██      ██ ██      ██          ██ ██  ██ ██    ██    ██      ██   ██  ██  ██  ██ ██      ██ ███ ██      ██
    // ███████ ██ ██      ███████     ██ ██   ████    ██    ███████ ██   ██   ████   ██ ███████  ███ ███  ███████
    // =============================================================================================
    $(".nav-life-interviews").select2({
        data: [
            {
                id: "",
                text: "",
                caption: "",
                thumbnail: ""
        },
            {
                id: "index.html",
                text: "VIEW ALL →",
                caption: "",
                thumbnail: ""
        },
            {
                text: "INTERVIEWS",
                children: [
                    {
                        id: "1985-guttenberg-and-family.html",
                        text: "Paul Rand: The Imperishable Champion",
                        caption: "1985",
                        thumbnail: "https://assets.paulrand.design/Life/Interviews/1985%20Gutenberg%20%26%20Family%2C%20October/Web/Gutenberg%20%26%20Family%2C%20October%201985-200.jpg"
                },
                    {
                        id: "1988-artograph.html",
                        text: "Artograph #6",
                        caption: "1988",
                        thumbnail: "https://assets.paulrand.design/Life/Interviews/1988%20Artograph%206/Web/Artograph%206%2C%201988-200.jpg"
                },
                    {
                        id: "1988-id-magazine.html",
                        text: "Logos, Technique and Trends",
                        caption: "1988",
                        thumbnail: "https://assets.paulrand.design/Life/Interviews/1988%20ID%20magazine/Web/ID%20Magazine%2C%20November-December%201988-200.jpg"
                },
                    {
                        id: "1989-interview-with-steven-heller.html",
                        text: "Paul Rand Interview by Steven Heller",
                        caption: "1989",
                        thumbnail: "https://assets.paulrand.design/Life/Interviews/1989%20Graphic%20Design%20in%20America/Web/Graphic%20Design%20in%20America-200.jpg"
                },
                    {
                        id: "1989-Type-Talks-interview.html",
                        text: "Type Talks interview",
                        caption: "1989",
                        thumbnail: "https://assets.paulrand.design/Life/Interviews/1989%20Type%20Talks/Web/Type%20Talks%20Fall%201989%2C%20purple%20cover-200.jpg"
                },
                    {
                        id: "1991-kromekote-childhood-fantasies.html",
                        text: "A Childhood Fantasy",
                        caption: "1991",
                        thumbnail: "https://assets.paulrand.design/Life/Interviews/1991%20Champion%20Papers%20Kromekote%202000%20Childhood%20Fantasies/Web/Champion%20Papers%20Kromekote%202000%20Childhood%20Fantasies%201991%2C%20front-200.jpg"
                },
                    {
                        id: "1993-hartford-courant.html",
                        text: "Logos to Go",
                        caption: "1993",
                        thumbnail: "https://assets.paulrand.design/Life/Interviews/1993%20Hartford%20Courant/Web/Hartford%20Courant%20Sun%20Jul%204%201993-200.jpg"
                },
                    {
                        id: "1993-id-magazine.html",
                        text: "I.D. Magazine",
                        caption: "1993",
                        thumbnail: "https://assets.paulrand.design/Life/Interviews/1993%20ID%20Magazine/Web/ID%20Magazine%2C%20September-October%201993%2C%20front-200.jpg"
                },
                    {
                        id: "1994-The-Journal-of-Technology-Studies.html",
                        text: "The Journal of Technology Studies",
                        caption: "1994",
                        thumbnail: "https://assets.paulrand.design/Life/Interviews/1994%20The%20Journal%20of%20Technology%20Studies/Web/The%20Journal%20of%20Technology%20Studies%20Summer-Fall%201994%2C%20cover-200.jpg"
                },
                    {
                        id: "1995-Portfolio-Center.html",
                        text: "Interview with a Portfolio Center Student",
                        caption: "1995",
                        thumbnail: "https://assets.paulrand.design/Life/Interviews/1995%20Interview%20with%20a%20Portfolio%20Center%20Student/Web/Interview%20with%20a%20Portfolio%20Center%20Student%201995-200.jpg"
                },
                    {
                        id: "1998-Paul-Rand-on-the-Play-Instinct.html",
                        text: "Paul Rand on the Play Instinct",
                        caption: "1998",
                        thumbnail: "https://assets.paulrand.design/Life/Interviews/1998%20Design%20Dialogues/Web/Design%20Dialogues-200.jpg"
                },
                    {
                        id: "2000-maeda-at-media.html",
                        text: "Interview excerpt from Rand’s final interview at the MIT Media Laboratory",
                        caption: "2000",
                        thumbnail: "https://assets.paulrand.design/Life/Interviews/2001%20Maeda%20at%20Media/Web/Maeda%20at%20Media-200.jpg"
                }
            ]
        }
    ],
        templateResult: formatNav
    });


    // =============================================================================================
    // ███████ ██    ██ ███████ ███    ██ ████████ ███████        ██        ███████ ██   ██ ██   ██ ██ ██████  ██ ████████ ███████
    // ██      ██    ██ ██      ████   ██    ██    ██             ██        ██       ██ ██  ██   ██ ██ ██   ██ ██    ██    ██
    // █████   ██    ██ █████   ██ ██  ██    ██    ███████     ████████     █████     ███   ███████ ██ ██████  ██    ██    ███████
    // ██       ██  ██  ██      ██  ██ ██    ██         ██     ██  ██       ██       ██ ██  ██   ██ ██ ██   ██ ██    ██         ██
    // ███████   ████   ███████ ██   ████    ██    ███████     ██████       ███████ ██   ██ ██   ██ ██ ██████  ██    ██    ███████
    // =============================================================================================
    $(".nav-life-events-exhibits").select2({
        data: [
            {
                id: "",
                text: "",
                caption: "",
                thumbnail: ""
        },
            {
                id: "index.html",
                text: "VIEW ALL →",
                caption: "",
                thumbnail: ""
        },
            {
                text: "EXHIBITS",
                children: [
                    {
                        id: "exhibits/1941-advance-guard.html",
                        text: "Advance Guard of Advertising Artists",
                        caption: "1941",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1941%20Advance%20Guard%20of%20Advertising%20Artists/Web/Advance%20Guard%20of%20Advertising%20Artists%20Exhibit%2C%20front-200.jpg"
                },
                    {
                        id: "exhibits/1947-ad-gallery.html",
                        text: "AD Gallery Presents- Paul Rand",
                        caption: "1947",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/1947%20AD%20Gallery%20Presents%2C%20Paul%20Rand/Web/AD%20Gallery%20Presents%2C%20Paul%20Rand%201947%2C%20inserts%2001-200.jpg"
                },
                    {
                        id: "exhibits/1953-paul-rand-designers-art-design-gallery.html",
                        text: "Paul Rand: A Designer’s Art",
                        caption: "1953",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1953%20Design%20Gallery%20Exhibit/Web/1986%20Design%20Gallery%20Exhibit%2001-200.jpg"
                },
                    {
                        id: "exhibits/1970-graphic-art-of-paul-rand-ibm-gallery.html",
                        text: "IBM Gallery- The Graphic Art of Paul Rand",
                        caption: "1970",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1970%20IBM%20Gallery-%20The%20Graphic%20Art%20of%20Paul%20Rand/Web/IBM%20Gallery%20exhibit-%20The%20Graphic%20Art%20of%20Paul%20Rand%2C%20front-200.jpg"
                },
                    {
                        id: "exhibits/1978-graphic-art-of-paul-rand-pratt-gallery.html",
                        text: "The Graphic Art of Paul Rand",
                        caption: "1978",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1978%20The%20Graphic%20Art%20of%20Paul%20Rand%2C%20Pratt%20Gallery/Web/The%20Graphic%20Art%20of%20Paul%20Rand%2C%20Pratt%20Gallery-200.jpg"
                },
                    {
                        id: "exhibits/1979-art-play-design.html",
                        text: "Art / Play / Design",
                        caption: "1979",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1979%20Philadelphia%20College%20of%20Art/Web/Poster%2C%20Art%2C%20Play%2C%20Design-%20An%20Exhibition%20Of%20Corporate%20Design%20Trademarks%2C%20Book%20Design%20Posters%2C%20Drawings%20And%20Teachings%20By%20Paul%20Rand%2C%201979-200.jpg"
                },
                    {
                        id: "exhibits/1984-itc-center-typographic-treasures.html",
                        text: "ITC Center Typographic Treasures",
                        caption: "1984",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1984%20ITC%20Center%20Typographic%20Treasures/Web/ITC%20Center%20Typographic%20Treasures%2002-200.jpg"
                },
                    {
                        id: "exhibits/1988-sva.html",
                        text: "School of Visual Arts Masters Series: Paul Rand",
                        caption: "1988",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1988%20School%20of%20Visual%20Arts%20Masters%20Series-%20Paul%20Rand/Web/1988%20School%20of%20Visual%20Arts%20Masters%20Series%2004-200.jpg"
                },
                    {
                        id: "exhibits/1990-graphic-art-of-paul-rand.html",
                        text: "The Graphic Art of Paul Rand",
                        caption: "1990",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1990%20The%20Graphic%20Art%20of%20Paul%20Rand/Web/Graphic%20Art%20of%20Paul%20Rand%2C%20exhibit%20invite%2C%20front-200.jpg"
                },
                    {
                        id: "exhibits/1992-ginza-graphic-gallery.html",
                        text: "Ginza Graphic Gallery",
                        caption: "1992",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1992%20Ginza%20Graphic%20Gallery/Web/1992%20Ginza%20Graphic%20Gallery%2001-200.jpg"
                },
                    {
                        id: "exhibits/1994-paul-rand-weston-ct.html",
                        text: "Paul Rand exhibit in Westport, CT",
                        caption: "1994",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1994%20Paul%20Rand%20exhibit%20in%20Westport%2C%20CT/Web/Westport%20invite%2C%20cover-200.jpg"
                },
                    {
                        id: "exhibits/1996-cooper-union-retrospective.html",
                        text: "Paul Rand Retrospective Cooper Union Herb Lubalin Study Center",
                        caption: "1996",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1996%20Paul%20Rand%20Retrospective%20Cooper%20Union/Web/1996%20Paul%20Rand%20Retrospective%20Cooper%20Union%20Herb%20Lubalin%20Study%20Center%20Brochure%2001-200.jpg"
                },
                    {
                        id: "exhibits/2003-chico.html",
                        text: "Chico State University: Paul Rand Retrospective",
                        caption: "2003",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2003%20Paul%20Rand%20Retrospective/Web/2003%20Rand%20Retrospective%20Poster-200.jpg"
                },
                    {
                        id: "exhibits/2007-ucla.html",
                        text: "Catalog Covers of UCLA Extension: Masters of Graphic Design",
                        caption: "2007",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2007%20Catalog%20Covers%20of%20UCLA%20Extension%2C%20Masters%20of%20Graphic%20Design/Web/Catalog%20Covers%20of%20UCLA%20Extension%2C%20Masters%20of%20Graphic%20Design%2001-200.jpg"
                },
                    {
                        id: "exhibits/2007-chaumont.html",
                        text: "18th International Poster and Graphic Design Festival of Chaumont, Paul Rand at Les Silos",
                        caption: "2007",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2007%2018th%20International%20Poster%20and%20Graphic%20Design%20Festival%20of%20Chaumont%2C%20Paul%20Rand%20at%20Les%20Silos/Web/Chaumont%20International%20Poster%20and%20Graphic%20Design%20Festival%2002-200.jpg"
                },
                    {
                        id: "exhibits/2011-brands.html",
                        text: "bRANDs: The Early Years",
                        caption: "2011",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2011%20bRANDs,%20The%20Early%20Years/Web/2011%20bRANDs,%20The%20Early%20Years%2001-200.jpg"
                },
                    {
                        id: "exhibits/2012-dont-try-to-be-original.html",
                        text: "Curate and Design",
                        caption: "2012",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2012%20Curate%20and%20Design%20Edinburgh%20exhibit/Web/Curate%20and%20Design%20Exhibit%2001-200.jpg"
                },
                    {
                        id: "exhibits/2013-defining-design.html",
                        text: "Paul Rand: Defining Design",
                        caption: "2013",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2013%20Paul%20Rand%20Defining%20Design/Exhibit%20Photos/Exhibit%20Title%20Image/Web/Paul%20Rand%20Defining%20Design-200.jpg"
                },
                    {
                        id: "exhibits/2014-pioneer-by-design-yale.html",
                        text: "Pioneer by Design (Yale)",
                        caption: "2014",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2014%20Pioneer%20by%20Design%2C%20Yale/Web/Pioneer%20of%20Design%20Exhibit%20Image-200.jpg"
                },
                    {
                        id: "exhibits/2015-everything-is-design.html",
                        text: "Paul Rand: Everything is Design",
                        caption: "2015",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2015%20Paul%20Rand%20Everything%20is%20Design/MCNY%20Images/Web/MCNY%202015%2003-200.jpg"
                },
                    {
                        id: "exhibits/2018-designers-task.html",
                        text: "Paul Rand: The Designer’s Task",
                        caption: "2018",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2018%20A%20Designer%27s%20Task/Web/2018%20A%20Designers%20Task%2001-200.jpg"
                },
                    {
                        id: "exhibits/2018-serious-play.html",
                        text: "Serious Play: Design in Midcentury America",
                        caption: "2018",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2018%20Serious%20Play%20in%20Design%2C%20Milwaukee%20WI/Web/Serious%20Play%20Book%2000-200.jpg"
                }
            ]
        },
            {
                text: "EVENTS",
                children: [
                    {
                        id: "events/1991-04-17-cooper-union.html",
                        text: "Cooper Union Event: Paul Rand Interviewed By Keith Godard",
                        caption: "1991",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1991%20Cooper%20Union%20PAUL%20RAND%20Interviewed%20by%20Keith%20Godard%20POSTCARD%20Announcement/Web/1991%20Cooper%20Union%20Paul%20Rand%20Interviewed%20By%20Keith%20Godard%20Postcard%20Announcement-200.jpg"
                },
                {
                    id: "events/1994-04-21-philadelphia-lecture.html",
                    text: "Philadelphia Lecture",
                    caption: "1994",
                    thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1994%20Lecture%20in%20Philadelphia%20Pennsylvania/Web/Lecture%20in%20Philadelphia%20Pennsylvania%201994-200.jpg"
                },
                    {
                        id: "events/1994-05-17-cincinnati-art-directors-club.html",
                        text: "Cincinnati Art Directors Club",
                        caption: "1994",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1994%20Cincinnati%20Art%20Directors%20Club/Web/1994%20Cincinnati%20Art%20Directors%20Club%20Poster-200.jpg"
                },
                    {
                        id: "events/1994-09-22-minneapolis.html",
                        text: "St. Paul, Minneapolis Event",
                        caption: "1994",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1994%20St%20Paul%20Minneapolis/Web/St%20Paul%20Minneapolis%20talk%20Poster%2C%20front-200.jpg"
                },
                    {
                        id: "events/1996-05-07-paul-rand-milton-glaser.html",
                        text: "AIGA/NY Paul Rand & Milton Glaser: A Conversation",
                        caption: "1996",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/1996%20Paul%20Rand%20and%20Milton%20Glaser/Web/1996%20Paul%20Rand%20and%20Milton%20Glaser%20Announcement%20Postcard%2C%20front-200.jpg"
                },
                    {
                        id: "events/2013-11-07-MODA-steven-heller-afternoon.html",
                        text: "Steven Heller talks to students",
                        caption: "2013",
                        thumbnail: "/life/img/_video-assets/video-moda-heller.jpg"
                },
                    {
                        id: "events/2013-11-07-MODA-steven-heller.html",
                        text: "Learning from Rand: Steven Heller at MODA",
                        caption: "2013",
                        thumbnail: "/life/img/_video-assets/video-moda-heller.jpg"
                },
                {
                    id: "events/2014-03-31-paul-rand-workshop.html",
                    text: "Paul Rand Workshop",
                    caption: "2014",
                    thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2014%20Paul%20Rand%20Workshop/Web/RandWorkshop-200.jpg"
                },
                {
                    id: "events/2014-04-22-standing-on-the-shoulders-of-giants.html",
                    text: "Standing on the Shoulders of Giants",
                    caption: "2014",
                    thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2014%20Standing%20on%20the%20Shoulders%20of%20Giants/Web/Standing%20on%20the%20Shoulders%20of%20Giants%202014%2001-200.jpg"
                },
                    {
                        id: "events/2014-06-24-kit-hinrichs-on-paul-rand.html",
                        text: "Kit Hinrichs on Paul Rand",
                        caption: "2014",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2014%20Kit%20Hinrichs%20on%20Paul%20Rand/Web/Kit%20Hinrichs%20on%20Paul%20Rand%2003-200.jpg"
                },
                    {
                        id: "events/2018-09-13-paul-rand-estate-auction.html",
                        text: "Paul Rand: The Art of Design (Estate Auction)",
                        caption: "2018",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2018%20Wright%20Auction/Exhibit%20Space/Web/Paul%20Rand%20auction%20exhibit%2000-200.jpg"
                },
                    {
                        id: "events/2019-02-08-steven-heller-designers-scribbles.html",
                        text: "Steven Heller: Paul Rand: A Designer’s Scribbles",
                        caption: "2019",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2019%20Steven%20Heller-%20A%20Designer%27s%20Scribbles/Web/Steven%20Heller%20at%20UMMA%2001-200.jpg"
                },
                    {
                        id: "events/2019-03-07-chris-pullman-looking-for-clues-in-paul-rands-studio.html",
                        text: "Chris Pullman: Looking for Clues in Paul Rand's Studio",
                        caption: "2019",
                        thumbnail: "https://assets.paulrand.design/Life/Exhibits%20and%20Events/2019%20Chris%20Pullman%20Looking%20for%20Clues%20in%20Paul%20Rand%E2%80%99s%20Studio/Web/Looking-for-Clues-in-Paul-Rands-Studio%2001-200.jpg"
                }
            ]
        }
    ],
        templateResult: formatNav
    });


    // =============================================================================================
    // ██████   ██████   ██████  ██   ██ ███████        ██         █████  ██████  ████████ ██  ██████ ██      ███████ ███████
    // ██   ██ ██    ██ ██    ██ ██  ██  ██             ██        ██   ██ ██   ██    ██    ██ ██      ██      ██      ██
    // ██████  ██    ██ ██    ██ █████   ███████     ████████     ███████ ██████     ██    ██ ██      ██      █████   ███████
    // ██   ██ ██    ██ ██    ██ ██  ██       ██     ██  ██       ██   ██ ██   ██    ██    ██ ██      ██      ██           ██
    // ██████   ██████   ██████  ██   ██ ███████     ██████       ██   ██ ██   ██    ██    ██  ██████ ███████ ███████ ███████
    // =============================================================================================
    $(".nav-life-books-articles").select2({
        data: [
            {
                id: "",
                text: "",
                caption: "",
                thumbnail: ""
            },
            {
                id: "index.html",
                text: "VIEW ALL →",
                caption: "",
                thumbnail: ""
            },
            {
                text: "BOOKS",
                children: [
                    {
                        id: "books/1947-ad-gallery.html",
                        text: "AD Gallery Presents- Paul Rand",
                        caption: "1947",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/1947%20AD%20Gallery%20Presents%2C%20Paul%20Rand/Web/AD%20Gallery%20Presents%2C%20Paul%20Rand%201947%2C%20inserts%2001-200.jpg"
                    },
                    {
                        id: "books/1960-his-works.html",
                        text: "His Works from 1946-1958",
                        caption: "1960",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/1960%20Paul%20Rand%2C%20His%20Works%20from%201946-1958/Web/Paul%20Rand-%20His%20Works%20from%201948-1956%2C%20front-200.jpg"
                    },
                    {
                        id: "books/1975-champion-papers.html",
                        text: "Champion Papers",
                        caption: "1975",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/1975%20Champion%20Papers%20The%20Printing%20Salesman%E2%80%99s%20Herald/Web/Champion%20Papers%2C%20The%20Printing%20Salesmans%20Herald-200.jpg"
                    },
                    {
                        id: "books/1992-ggg.html",
                        text: "Ginza Graphic Gallery",
                        caption: "1992",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/1992%20Ginza%20Graphic%20Gallery/Web/Ginza%20Graphic%20Gallery-200.jpg"
                    },
                    {
                        id: "books/1998-a-designers-words.html",
                        text: "A Designer’s Words",
                        caption: "1998",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/1998%20Paul%20Rand-%20A%20Designer%E2%80%99s%20Words/Web/Paul%20Rand-%20A%20Designer%27s%20Words-200.jpg"
                    },
                    {
                        id: "books/1998-american-modernist.html",
                        text: "American Modernist",
                        caption: "1998",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/1998%20Paul%20Rand-%20American%20Modernist/Web/Paul%20Rand-%20American%20Modernist%2C%20front-200.jpg"
                    },
                    {
                        id: "books/2000-paul-rand.html",
                        text: "Paul Rand",
                        caption: "2000",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/1999%20Paul%20Rand/Web/Paul%20Rand%201999-200.jpg"
                    },
                    {
                        id: "books/2002-the-works-of-paul-rand.html",
                        text: "The Works of Paul Rand",
                        caption: "2002",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/2002%20Paul%20Rand%2C%20The%20Works%20of%20Paul%20Rand/Web/Paul%20Rand%2C%20The%20Works%20of%20Paul%20Rand%202002-200.jpg"
                    },
                    {
                        id: "books/2003-modernist-designer.html",
                        text: "Modernist Designer",
                        caption: "2003",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/2003%20Paul%20Rand%2C%20Modernist%20Design/Web/Paul%20Rand-%20Modernist%20Design%2C%20front-200.jpg"
                    },
                    {
                        id: "books/2007-conversations-with-students.html",
                        text: "Conversations with Students",
                        caption: "2007",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/2007%20Paul%20Rand%2C%20Conversations%20with%20Students/Web/Paul%20Rand-%20Conversations%20with%20Students%2C%20front-200.jpg"
                    },
                    {
                        id: "books/2015-a-designers-eye.html",
                        text: "A Designer’s Eye",
                        caption: "2015",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/2015%20A%20Designer%27s%20Eye/Web/Paul%20Rand-%20A%20Designer%27s%20Eye%2C%20front-200.jpg"
                },
                    {
                        id: "books/2018-ibm-graphic-standards-manual-reprint.html",
                        text: "IBM Graphic Standards Manual reprint",
                        caption: "2018",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/2018%20IBM%20Graphic%20Standards%20Manual%20reprint/Web/IBM%20Graphic%20Standards%20Manual%20reprint-200.jpg"
            },
                    {
                        id: "books/2019-inspiration-and-process-in-design.html",
                        text: "Paul Rand: Inspiration and Process in Design",
                        caption: "2019",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/2019%20Paul%20Rand%20Inspiration%20and%20Process%20in%20Design/Web/Paul%20Rand%20Inspiration%20and%20Process%20in%20Design%2001-200.jpg"
            }]
            },
            {
                text: "PRINT ARTICLES",
                children: [
                    {
                        id: "articles/print/1938-pm-magazine.html",
                        text: "PM Magazine: Paul Rand",
                        caption: "1938",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1938%20PM%20Magazine%20Vol%204%20No%209/Web/PM%20Magazine%20Vol%204%20No%209%20front-200.jpg"
                    },
                    {
                        id: "articles/print/1941-ad-magazine.html",
                        text: "AD Magazine: Paul Rand",
                        caption: "1941",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1941%20AD%20Magazine%20Vol%207%20No%203/Web/AD%20Magazine%20Vol%207%20No%203,%20front-200.jpg"
                    },
                    {
                        id: "articles/print/1942-american-artist.html",
                        text: "American Artist Magazine: Paul Rand — Advertising Artist",
                        caption: "1942",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1942%20American%20Artist%20magazine,%20June/Web/American%20Artist%20magazine,%20June%201942-200.jpg"
                    },
                    {
                        id: "articles/print/1947-graphis.html",
                        text: "Graphis: Paul Rand",
                        caption: "1947",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1947%20Graphis,%20Vol%203%20No%2018/Web/Graphis,%20Vol%203%20No%2018%201947-200.jpg"
                    },
                    {
                        id: "articles/print/1947-industrial-design-interiors.html",
                        text: "Industrial Design, Interiors:  Paul Rand",
                        caption: "1947",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1947%20Industrial%20Design,%20Interiors%20February/Web/Industrial%20Design,%20Interiors%20February%201947-200.jpg"
                    },
                    {
                        id: "articles/print/1947-thoughts-on-design-review.html",
                        text: "Thoughts on Design review",
                        caption: "1947",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1947%20Thoughts%20on%20Design%20Review/Web/Thoughts%20on%20Design%20review%2C%20Print%2C%20Jan%201947%2001-200.jpg"
                    },
                    {
                        id: "articles/print/1950-portfolio-magazine.html",
                        text: "Portfolio Magazine:  Trademarks by Paul Rand",
                        caption: "1950",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1950%20Portfolio%20magazine%20Vol%201%20No%201/Web/Portfolio%20magazine%20Vol%201%20No%201%201950-200.jpg"
                    },
                    {
                        id: "articles/print/1953-domus-285.html",
                        text: "Domus 285: The Stone House",
                        caption: "August, 1953",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1953%20Domus%20285/Web/Domus%20285%20cover-450.jpg"
                    },
                    {
                        id: "articles/print/1953-domus-286.html",
                        text: "Domus 286: Graphic Art of Paul Rand",
                        caption: "September, 1953",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1953%20Domus%20286/Web/Domus%20286%20cover-450.jpg"
                    },
                    {
                        id: "articles/print/1953-american-artist.html",
                        text: "American Artist Magazine: The Paul Rand Legend",
                        caption: "1953",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1953%20American%20Artist%20magazine,%20October/Web/American%20Artist%20magazine,%20October%201953-200.jpg"
                    },
                    {
                        id: "articles/print/1953-esquire-magazine.html",
                        text: "Esquire Magazine: A House to Live With",
                        caption: "1953",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1953%20Esquire,%20August/Web/Esquire,%20August%201953-200.jpg"
                    },
                    {
                        id: "articles/print/1953-graphik.html",
                        text: "Graphik Werbung und Formgebung",
                        caption: "1953",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1953%20Graphik%20Werbung%20und%20Formgebung/Web/Graphik%20Werbung%20und%20Formgebung%201953%2C%20No%202-200.jpg"
                    },
                    {
                        id: "articles/print/1954-ariadne.html",
                        text: "Ariadne: Reactions to the R.C.A. ad",
                        caption: "1954",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1954%20Ariadne/Web/Ariadne%201954%2C%20February%2001-200.jpg"
                    },
                    {
                        id: "articles/print/1954-industrial-design.html",
                        text: "Industrial Design: 5 Designers for Under Five Dollars",
                        caption: "1954",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1954%20Industrial%20Design%206/Web/Industrial%20Design%20No%206%2C%20December%2C%201954%2000-200.jpg"
                    },
                    {
                        id: "articles/print/1955-idea-international-art-advertising-magazine.html",
                        text: "International Advertising Art Idea magazine",
                        caption: "1955",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1955%20International%20Advertising%20Art%20Idea%20magazine,%20March/Web/International%20Advertising%20Art%20Idea%20magazine,%20March%201955-200.jpg"
                    },
                    {
                        id: "articles/print/1970-american-artist.html",
                        text: "American Artist Magazine:  Paul Rand, Commercial Artist",
                        caption: "1970",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1970%20American%20Artist%20magazine,%20October/Web/American%20Artist%20magazine,%20October%201970-200.jpg"
                    },
                    {
                        id: "articles/print/1971-NYC-ADC-Hall-of-Fame.html",
                        text: "NYC ADC Inception of the Hall of Fame: Paul Rand",
                        caption: "1971",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1971%20Art%20Director's%20Club%20of%20New%20York-%20Hall%20of%20Fame%20Inception/Web/Art%20Director's%20Club%20of%20New%20York-%20Hall%20of%20Fame%20Inception%201971-200.jpg"
                    },
                    {
                        id: "articles/print/1971-graphis.html",
                        text: "Graphis: How Paul Rand Presents Trade-Mark Designs to Clients",
                        caption: "1971",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1971%20Graphis%2C%20Vol%2027%20No%20153/Web/Graphis%2C%20Vol%2027%20No%20153%2001-200.jpg"
                    },
                    {
                        id: "articles/print/1976-idea-magazine.html",
                        text: "Idea Magazine: Paul Rand",
                        caption: "1976",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1976%20Idea%20Magazine%20No%20139/Web/Idea%20Magazine%20No%20139-450.jpg"
                    },
                    {
                        id: "articles/print/1977-ulc.html",
                        text: "U&lc: Pro.Files: The Great Graphic Innovators",
                        caption: "1977",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1977%20U&lc,%20March/Web/U&lc,%20March%201977-200.jpg"
                    },
                    {
                        id: "articles/print/1979-communication-arts.html",
                        text: "Communication Arts: Paul Rand",
                        caption: "1979",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1979%20Communication%20Arts,%20Jan-Feb/Web/Communication%20Arts,%20January-February%201979-200.jpg"
                    },
                    {
                        id: "articles/print/1984-idea-magazine.html",
                        text: "Idea Magazine: The Fiddler of Yankee Feeling",
                        caption: "1984",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1984%20Idea%20Magazine/Web/IDEA%20Magazine-200.jpg"
                    },
                    {
                        id: "articles/print/1988-mohawk-paper.html",
                        text: "Mohawk Graphics Collection",
                        caption: "1988",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1988%20Mohawk%20Graphics%20Collection/Web/Mohawk%20Graphics%20Collection-200.jpg"
                    },
                    {
                        id: "articles/print/1989-connecticuts-finest.html",
                        text: "Blueprint Magazine: Why Paul Rand Hates Logos",
                        caption: "1989",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1989%20Connecticut's%20Finest,%20Winter/Web/Connecticut's%20Finest,%20Winter%201989-200.jpg"
                    },
                    {
                        id: "articles/print/1989-blueprint-magazine.html",
                        text: "CREATION no. 1",
                        caption: "1989",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1989%20Blueprint%20Magazine/Web/Blueprint%20Magazine%2C%20cover-200.jpg"
                    },
                    {
                        id: "articles/print/1989-creation-magazine.html",
                        text: "Connecticut's Finest: The Graphic Genius of Paul Rand",
                        caption: "1989",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1989%20CREATION%20no%201/Web/Creation%20Magazine-200.jpg"
                    },
                    {
                        id: "articles/print/1991-design-week.html",
                        text: "Design Week: Paul Rand, Old Master",
                        caption: "1991",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1991%20Design%20Week%2C%20Paul%20Rand-%20Old%20Master/Web/Woudhuysen%20Paul%20Rand%20Old%20Master-200.jpg"
                    },
                    {
                        id: "articles/print/1993-how-magazine.html",
                        text: "HOW Magazine: Masters of Desgn",
                        caption: "1993",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1993%20HOW%20Magazine,%20February/Web/HOW%20Magazine,%20February%201993-200.jpg"
                    },
                    {
                        id: "articles/print/1993-print-magazine.html",
                        text: "Print Magazine: Thoughts on Rand",
                        caption: "1993",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1993%20Print%20Magazine,%20May-June/Web/Print%20Magazine,%20May-June%201993-200.jpg"
                    },
                    {
                        id: "articles/print/1995-tategumi-yokogumi-morisawa-quarterly.html",
                        text: "Tategumi Yokogumi Morisawa Quarterly",
                        caption: "1995",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1995%20Tategumi%20Yokogumi%20Morisawa%20Quarterly/Web/Tategumi%20Yokogumi%20Morisawa%20Quarterly%20no%2044%2C%201995%2001-200.jpg"
                    },
                    {
                        id: "articles/print/1997-critique-magazine.html",
                        text: "Critique Magazine: Paul Rand, Writer",
                        caption: "1997",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1997%20Critique%20Magazine,%20Spring/Web/Critique%20Magazine,%20Spring%201997-200.jpg"
                    },
                    {
                        id: "articles/print/1997-looking-closer2.html.html",
                        text: "Looking Closer 2: Paul Rand",
                        caption: "1997",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1997%20Looking%20Closer%202/Web/Looking%20Closer%202%201997-450.jpg"
                    },
                    {
                        id: "articles/print/1997-modern-painters-magazine.html",
                        text: "Modern Painters Magazine: Paul Rand, The Magician",
                        caption: "1997",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1997%20Modern%20Painters%20Magazine,%20Spring/Web/Modern%20Painters%20Magazine,%20Spring%201997-200.jpg"
                    },
                    {
                        id: "articles/print/1997-six-chapters-in-design.html",
                        text: "Six Chapters in Design",
                        caption: "1997",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1997%20Six%20Chapters%20in%20Design/Web/Six%20Chapters%20in%20Design%201997-200.jpg"
                    },
                    {
                        id: "articles/print/1997-logocentrism.html",
                        text: "The New Republic: Logocentrism",
                        caption: "1997",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1997%20New%20Republic,%20vol%20217%20Issue%2026-%20Logocentrism/Web/Logocentrism,%20New%20Republic,%20vol%20217%20Issue%2026%2001-200.jpg"
                    },
                    {
                        id: "articles/print/1997-design-literacy-direction.html",
                        text: "Design Literacy: Direction",
                        caption: "1997",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1997%20Design%20Literacy/Web/Design%20Literacy-200.jpg"
                    },
                    {
                        id: "articles/print/1997-design-literacy-next.html",
                        text: "Design Literacy: NeXT",
                        caption: "1997",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1997%20Design%20Literacy/Web/Design%20Literacy-200.jpg"
                    },
                    {
                        id: "articles/print/1997-essays-on-design.html",
                        text: "Essays on Design: Thoughts on Paul Rand",
                        caption: "1997",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1997%20Essays%20on%20Design%2C%20AGI%E2%80%99s%20Designers%20of%20Influence/Web/Essays%20on%20Design%2C%20AGI%E2%80%99s%20Designers%20of%20Influence%201997-200.jpg"
                    },
                    {
                        id: "articles/print/1997-idea-magazine.html",
                        text: "Idea Magazine No. 261: A Tribute to the Memory of Paul Rand",
                        caption: "1997",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1997%20Idea%20Magazine%20No.%20261/Web/Idea%20Magazine%20No%20261%2C%201997%20front-200.jpg"
                    },
                    {
                        id: "articles/print/1999-baseline-magazine.html",
                        text: "Baseline Magzine No. 27: Paul Rand’s Laboratory",
                        caption: "1999",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1999%20Baseline%20no%2027/Web/Baseline%2027%201999,%20front-200.jpg"
                    },
                    {
                        id: "articles/print/1999-communication-arts.html",
                        text: "Communication Arts: Paul Rand",
                        caption: "1999",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/1999%20Communication%20Arts,%20March-April/Web/Communication%20Arts,%20March-April%201999-200.jpg"
                    },
                    {
                        id: "articles/print/2000-ballast-quarterly-review.html",
                        text: "Ballast Quarterly Review: Paul Rand Reviewed",
                        caption: "2000",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Books/1999%20Paul%20Rand/Web/Paul%20Rand%201999-200.jpg"
                    },
                    {
                        id: "articles/print/2002-graphic-design-reader.html",
                        text: "The Graphic Design Reader: Randism",
                        caption: "2002",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/2002%20The%20Graphic%20Design%20Reader/Web/The%20Graphic%20Design%20Reader%202002-200.jpg"
                    },
                    {
                        id: "articles/print/2002-casa-brutus.html",
                        text: "Casa Brutus: A Paul Rand’s Art",
                        caption: "2002",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/2002%20Casa%20Brutus/Web/Casa%20Brutus%20vol%2025%2C%20April%2001-200.jpg"
                    },
                    {
                        id: "articles/print/2007-79-short-essays.html",
                        text: "Seventy-nine Short Essays on Design",
                        caption: "2007",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/2007%20Seventy-nine%20short%20essays%20on%20design/Web/Seventy-nine%20short%20essays%20on%20design%2C%20front%2002-200.jpg"
                    },
                    {
                        id: "articles/print/2007-beaux-arts-magazine.html",
                        text: "Beaux Arts Magazine",
                        caption: "2007",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/2007%20Beaux%20Arts%20Magazine/Web/Beaux%20Arts%20Magazine%202007-200.jpg"
                    },
                    {
                        id: "articles/print/2011-the-interface.html",
                        text: "The Interface - IBM and the Transformation of Corporate Design",
                        caption: "2011",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/2011%20The%20Interface%20-%20IBM%20and%20the%20Transformation%20of%20Corporate%20Design/Web/The%20Interface%20IBM%20and%20the%20Transformation%20of%20Corporate%20Design%2C%20cover-200.jpg"
                    },
                    {
                        id: "articles/print/2014-TM-The-Untold-Stories.html",
                        text: "TM- The Untold Stories Behind 29 Classic Logos",
                        caption: "2014",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/2014%20TM-%20The%20Untold%20Stories%20Behind%2029%20Classic%20Logos/Web/TM-%20The%20Untold%20Stories%20Behind%2029%20Classic%20Logos%2017-200.jpg"
                    },
                    {
                        id: "articles/print/2015-art-chantry-speaks.html",
                        text: "Art Chantry Speaks: St. Paul",
                        caption: "2015",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/2015%20Art%20Chantry%20Speaks/Web/Art%20Chantry%20Speaks%20cover-450.jpg"
                    },
                    {
                        id: "articles/print/2015-graphic-design-visionaries.html",
                        text: "Graphic Design Visionaries",
                        caption: "2015",
                        thumbnail: "https://assets.paulrand.design/Life/Books%20and%20Articles%20About%20Rand/Articles/Print/2015%20Graphic%20Design%20Visionaries/Web/Graphic%20Design-Visionaries-200.jpg"
                }]
        },
            {
                text: "ONLINE ARTICLES",
                children: [
                    {
                        id: "index.html#online-articles",
                        text: "VIEW ALL →",
                        caption: "",
                        thumbnail: ""
                }
            ]
        }],
        templateResult: formatNav
    });