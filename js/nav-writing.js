    // ===================================================================================================
    // =            WRITING BODY SET            =
    // ===================================================================================================

    if ($("body").is("#writing")) {
        $(".nav-writing-off").toggleClass("nav-writing-off nav-writing-on");
    } else {
        $(".nav-writing-off");
    }

    if ($("body").is("#writing.articles")) {
        $("#select-writing").val("articles");
        $("#writing-articles").show();
    } else {
        $("#writing-articles").hide();
    }

    if ($("body").is("#writing.books")) {
        $("#select-writing").val("books");
        $("#writing-books").show();
    } else {
        $("#writing-books").hide();
    }

    if ($("body").is("#writing.quotes")) {
        $("#select-writing").val("quotes");
        $("#writing-quotes").show();
    } else {
        $("#writing-quotes").hide();
    }

    if ($("body").is("#writing.suggested-readings")) {
        $("#select-writing").val("suggested-readings");
        $("#writing-suggested-readings").show();
    } else {
        $("#writing-suggested-readings").hide();
    }

    // =====  End of WRITING BODY SET  ===========================================================================



    // ===================================================================================================
    // =            WRITING LEVEL 1            =
    // ===================================================================================================

    $("#select-writing fieldset select").change(function() {
        if ($(this).val() === "books") {
            $("#writing-books").show();
        } else {
            $("#writing-books").hide();
        }

        if ($(this).val() === "articles") {
            $("#writing-articles").show();
        } else {
            $("#writing-articles").hide();
        }

        if ($(this).val() === "quotes") {
            $(".nav-button-writing").show().attr("href", "/writing/quotes.html");
        } else {
            $(".nav-button-writing").hide();
        }

        if ($(this).val() === "suggested-readings") {
            $("#writing-suggested-readings").show();
        } else {
            $("#writing-suggested-readings").hide();
        }
    });

    // =====  End of WRITING LEVEL 1  ===========================================================================-



    // ===================================================================================================
    // =            WRITING LEVEL 2            =
    // ===================================================================================================

    $("#select-writing-articles").change(function() {
        if ($(this).val() !== "") {
            $(".nav-button-writing").show().attr("href", "/writing/articles/" + $(this).val() + ".html");
        } else {
            $(".nav-button-writing").hide();
        }
    });

    $("#select-writing-books").change(function() {
        if ($(this).val() !== "") {
            $(".nav-button-writing").show().attr("href", "/writing/books/" + $(this).val() + ".html");
        } else {
            $(".nav-button-writing").hide();
        }
    });

    $("#select-writing-suggested-readings").change(function() {
        if ($(this).val() === "index") {
            $(".nav-button-writing").show().attr("href", "/writing/suggested-reading.html");
        } else if ($(this).val() === "general") {
            $(".nav-button-writing").show().attr("href", "/writing/suggested-reading.html#" + $(this).val());
        } else if ($(this).val() === "modern") {
            $(".nav-button-writing").show().attr("href", "/writing/suggested-reading.html#" + $(this).val());
        } else if ($(this).val() === "type") {
            $(".nav-button-writing").show().attr("href", "/writing/suggested-reading.html#" + $(this).val());
        } else if ($(this).val() === "social") {
            $(".nav-button-writing").show().attr("href", "/writing/suggested-reading.html#" + $(this).val());
        } else if ($(this).val() === "bios") {
            $(".nav-button-writing").show().attr("href", "/writing/suggested-reading.html#" + $(this).val());
        } else if ($(this).val() === "architecture") {
            $(".nav-button-writing").show().attr("href", "/writing/suggested-reading.html#" + $(this).val());
        } else if ($(this).val() === "history") {
            $(".nav-button-writing").show().attr("href", "/writing/suggested-reading.html#" + $(this).val());
        } else if ($(this).val() === "geometry") {
            $(".nav-button-writing").show().attr("href", "/writing/suggested-reading.html#" + $(this).val());
        } else if ($(this).val() === "film") {
            $(".nav-button-writing").show().attr("href", "/writing/suggested-reading.html#" + $(this).val());
        } else {
            $(".nav-button-writing").hide();
        }
    });

    // =====  End of WRITING LEVEL 2  ===========================================================================---


    // =============================================================================================
    //  █████  ██████  ████████ ██  ██████ ██      ███████ ███████
    // ██   ██ ██   ██    ██    ██ ██      ██      ██      ██
    // ███████ ██████     ██    ██ ██      ██      █████   ███████
    // ██   ██ ██   ██    ██    ██ ██      ██      ██           ██
    // ██   ██ ██   ██    ██    ██  ██████ ███████ ███████ ███████
    // =============================================================================================
    $(".nav-writing-articles").select2({
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
                text: "1940s",
                children: [
                    {
                        id: "black-in-the-visual-arts",
                        text: "Black in the Visual Arts",
                        caption: "1949",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1949%20Black%20in%20the%20Visual%20Arts/Web/Graphic%20Forms-%20The%20Arts%20as%20Related%20to%20the%20Book-200.jpg"
                }
            ]
        },
            {
                text: "1950s",
                children: [
                    {
                        id: "posters",
                        text: "Posters",
                        caption: "1952",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1952%20Posters-%20Fifty%20artists%20and%20designers%20analyze%20their%20approach%e2%80%a6/Web/Posters-%20Fifty%20artists%20and%20designers%20analyze%20their%20approach,%20cover-200.jpg"
                },
                    {
                        id: "design-for-point-of-sale",
                        text: "P-O-S devices and advertising linked together by a symbol",
                        caption: "1952",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1952%20Design%20for%20Point%20of%20Sale/Web/Design%20for%20Point%20of%20Sale%2001-200.jpg"
                },
                    {
                        id: "gene-and-helen-federico",
                        text: "Gene & Helen Federico",
                        caption: "1952",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1952%20Gene%20and%20Helen%20Federico/Web/Graphis%2043%201952%2001-200.jpg"
                },
                    {
                        id: "the-trademark-as-an-illustrative-device",
                        text: "The Trademark as an Illustrative Device",
                        caption: "1952",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1952%20The%20Trademark%20as%20an%20Illustrative%20Device/Web/illustrative00-200.jpg"
                },
                    {
                        id: "ideas-about-ideas",
                        text: "Ideas About Ideas",
                        caption: "1955",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1955%20Ideas%20About%20Ideas/Web/Industrial%20Design%2C%20August%201955-200.jpg"
                }
            ]
        },
            {
                text: "1960s",
                children: [
                    {
                        id: "advertisement-ad-vivum-or-ad-hominem",
                        text: "Advertisement: Ad Vivum or Ad Hominem?",
                        caption: "1960",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1960%20Advertisement-%20Ad%20Vivum%20or%20Ad%20Hominem/Web/The%20Visual%20Arts%20Today%201960-200.jpg"
                },
                    {
                        id: "the-art-of-the-package",
                        text: "The Art of the Package",
                        caption: "1960",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1960%20The%20Art%20of%20the%20Package/Web/PRINT%2C%20January-February%201960-200.jpg"
                },
                    {
                        id: "modern-typography-in-the-modern-world",
                        text: "Modern Typography in the Modern World",
                        caption: "1964",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1964%20Modern%20Typography%20in%20the%20Modern%20World/Web/Modern%20Typography%20in%20the%20Modern%20World-200.jpg"
                },
                    {
                        id: "design-and-the-play-instinct",
                        text: "Design and the Play Instinct",
                        caption: "1965",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1965%20Education%20of%20Vision/Web/Education%20of%20Vision%201965-200.jpg"
                },
                    {
                        id: "trademarks-of-the-world-preface",
                        text: "Trademarks of the World Preface",
                        caption: "1965",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1965%20Trademarks%20and%20Symbols%20of%20the%20World/Trademarks%20of%20the%20World-04-200.jpg"
                }
            ]
        },
            {
                text: "1970s",
                children: [
                    {
                        id: "integrity-and-invention",
                        text: "Integrity and Invention",
                        caption: "1971",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1971%20Integrity%20and%20Invention/Web/Graphis%20Annual%201971-72-200.jpg"
                },
                    {
                        id: "hans-schleger",
                        text: "Hans Schleger",
                        caption: "1977",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1977%20Hans%20Schleger/Web/Graphis%20188%201977%20Hans%20Schleger%2001-200.jpg"
                }
            ]
        },
            {
                text: "1980s",
                children: [
                    {
                        id: "on-the-rca-ad",
                        text: "On the RCA Ad",
                        caption: "1981",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1981%20The%20Design%20Concept/Web/The%20Design%20Concept%2C%201981-200.jpg"
                },
                    {
                        id: "the-politics-of-design",
                        text: "The Politics of Design",
                        caption: "1985",
                        thumbnail: "https://assets.paulrand.design/Writing/Books/1985%20A%20Designer%E2%80%99s%20Art/jpegs/designers%20art%20front-200.jpg"
                },
                    {
                        id: "observations-on-intuition",
                        text: "Observations on Intuition",
                        caption: "1987",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1987%20Observations%20on%20Intuition,%20STA%20Design%20Journal/Web/observationsOnIntuition00-200.jpg"
                },
                    {
                        id: "the-case-for-the-ampersand",
                        text: "The Case for the Ampersand",
                        caption: "1989",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1989%20The%20Case%20for%20the%20Ampersand/The%20Case%20For%20The%20Ampersand%20NYTimes-com-200.jpg"
                }
            ]
        },
            {
                text: "1990s",
                children: [
                    {
                        id: "logos-flags-and-escutcheons",
                        text: "Logos, Flags, and Escutcheons",
                        caption: "1991",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1991%20Logos%2C%20Flags%2C%20and%20Escutcheons/Web/Looking%20Closer-200.jpg"
                },
                    {
                        id: "confusion-and-chaos-the-seduction-of-contemporary-graphic-design",
                        text: "Confusion and Chaos: The Seduction of Contemporary Graphic Design",
                        caption: "1992",
                        thumbnail: "/img/na.gif"
                },
                    {
                        id: "object-lessons",
                        text: "Object Lessons",
                        caption: "1993",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1993%20Object%20Lessons/NewCriterion-1993feb-200.jpg"
                },
                    {
                        id: "failure-by-design",
                        text: "Failure by Design",
                        caption: "1993",
                        thumbnail: "https://assets.paulrand.design/Writing/Articles/1993%20Failure%20by%20Design/Web/failureByDesign00-200.jpg"
                },
                    {
                        id: "language-of-art",
                        text: "Language of Art",
                        caption: "1996",
                        thumbnail: "https://assets.paulrand.design/Writing/Books/1996%20From%20Lascaux%20to%20Brooklyn/Web/From%20Lascaux%20to%20Brooklyn%2C%20front-200.jpg"
                }
            ]
        }
    ],
        templateResult: formatNav
    });


    // =============================================================================================
    // ██████   ██████   ██████  ██   ██ ███████
    // ██   ██ ██    ██ ██    ██ ██  ██  ██
    // ██████  ██    ██ ██    ██ █████   ███████
    // ██   ██ ██    ██ ██    ██ ██  ██       ██
    // ██████   ██████   ██████  ██   ██ ███████
    // =============================================================================================
    $(".nav-writing-books").select2({
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
                id: "this-is-the-stafford-stallion",
                text: "This…Is the Stafford Stallion",
                caption: "1944",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1944%20This%E2%80%A6Is%20the%20Stafford%20Stallion/Web/This...%20Is%20the%20Stafford%20Stallion%20front-200.jpg"
        },
            {
                id: "thoughts-on-design-1st-edition",
                text: "Thoughts on Design, 1st edition",
                caption: "1947, 1st edition",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1947%20Thoughts%20on%20Design%2C%201st%20edition/Web/Thoughts%20on%20Design%2C%201st%20edition%2C%20front-200.jpg"
        },
            {
                id: "trademark-design",
                text: "Trademark Design",
                caption: "1951, unpublished",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1951%20Trademark%20Design/Web/Trademark%20Design%2C%201951-200.jpg"
        },
            {
                id: "thoughts-on-design-2nd-edition",
                text: "Thoughts on Design, 2nd edition",
                caption: "1951, 2nd edition",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1947%20Thoughts%20on%20Design%2C%201st%20edition/Web/Thoughts%20on%20Design%2C%201st%20edition%2C%20front-200.jpg"
        },
            {
                id: "sparkle-and-spin",
                text: "Sparkle and Spin",
                caption: "1956",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1957%20Sparkle%20and%20Spin/jpegs/sparkle%20front-200.jpg"
        },
            {
                id: "i-know-a-lot-of-things",
                text: "I Know a Lot of Things",
                caption: "1957",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1956%20I%20Know%20a%20Lot%20of%20Things/jpegs/i%20know%20front-200.jpg"
        },
            {
                id: "the-trademarks-of-paul-rand",
                text: "The Trademarks of Paul Rand — A Selection",
                caption: "1960",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1960%20The%20Trademarks%20of%20Paul%20Rand%20-%20A%20Selection/Web/The%20Trademarks%20of%20Paul%20Rand%20-%20A%20Selection-200.jpg"
        },
            {
                id: "little-1",
                text: "Little 1",
                caption: "1962",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1962%20Little%201/jpegs/little%20front-200.jpg"
        },
            {
                id: "listen-listen",
                text: "Listen! Listen!",
                caption: "1970",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1970%20Listen%21%20Listen%21/jpegs/listen%20front-200.jpg"
        },
            {
                id: "thoughts-on-design-3rd-edition",
                text: "Thoughts on Design, 3rd edition",
                caption: "1970",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1970%20Thoughts%20on%20Design%2C%203rd%20edition/Web/Thoughts%20on%20Design%203rd%20edition%2C%20front%2C%20no%20jacket-200.jpg"
        },
            {
                id: "unpublished-book",
                text: "Unpublished Book",
                caption: "Date Unknown",
                thumbnail: "https://assets.paulrand.design/Writing/Books/Unpublished%20Book/Web/Paul%20Rand%20unpublished%20book%2001-200.jpg"
        },
            {
                id: "a-paul-rand-miscellany",
                text: "A Paul Rand Miscellany",
                caption: "1984",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1984%20A%20Paul%20Rand%20Miscellany/jpegs/miscellany%20front-200.jpg"
        },
            {
                id: "a-designers-art",
                text: "A Designer’s Art",
                caption: "1985",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1985%20A%20Designer%E2%80%99s%20Art/jpegs/designers%20art%20front-200.jpg"
        },
            {
                id: "good-design-is-good-will",
                text: "Good Design is Good Will",
                caption: "1987",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1987%20Good%20Design%20is%20Good%20Will/jpegs/good%20design%20front-200.jpg"
        },
            {
                id: "some-thoughts-some-logos",
                text: "Some Thoughts Some Logos",
                caption: "1991",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1991%20Some%20Thoughts%20Some%20Logos/Web/Some-Thoughts-Some-Logos-200.jpg"
        },
            {
                id: "some-thoughts-some-tribulations",
                text: "Some Thoughts... and Some Tribulations about the Design of a Logo",
                caption: "1991",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1991%20Some%20Thoughts%E2%80%A6%20and%20Some%20Tribulations%20about%20the%20Design%20of%20a%20Logo/Web/Some-Thoughts-and-Some-Tribulations-about-the-Design-of-a-Logo-200.jpg"
        },
            {
                id: "from-cassandre-to-chaos",
                text: "From Cassandre to Chaos",
                caption: "1992",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1992%20From%20Cassandre%20to%20Chaos/Web/From-Cassandre-to-Chaos-200.jpg"
        },
            {
                id: "design-form-and-chaos",
                text: "Design Form and Chaos",
                caption: "1993",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1993%20Design%20Form%20and%20Chaos/jpegs/design%20form%20chaos%20front-200.jpg"
        },
            {
                id: "from-lascaux-to-brooklyn",
                text: "From Lascaux to Brooklyn",
                caption: "1996",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1996%20From%20Lascaux%20to%20Brooklyn/Web/From%20Lascaux%20to%20Brooklyn,%20front-200.jpg"
        },
            {
                id: "thoughts-on-design-4th-edition",
                text: "Thoughts on Design, 4th edition",
                caption: "2014, 4th edition",
                thumbnail: "https://assets.paulrand.design/Writing/Books/2014%20Thoughts%20on%20Design%2C%204th%20Edition/Web/Thoughts%20on%20Design%204th%20edition%2C%20front-200.jpg"
        },
            {
                id: "CHANGE_ME",
                text: "A Designer’s Art",
                caption: "2017, 3rd edition",
                thumbnail: "https://assets.paulrand.design/Writing/Books/1985%20A%20Designer%E2%80%99s%20Art/jpegs/designers%20art%20front-200.jpg"
        }

    ],
        templateResult: formatNav
    });
