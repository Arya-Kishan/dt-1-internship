let cards = document.querySelector(".cards");


const fetchData = async () => {

    let res = await fetch("data.json");
    res = await res.json();

    const data = res.tasks[0].assets;
    const title = res.tasks[0].task_title;
    const desc = res.tasks[0].task_description;

    let main_heading = document.querySelector("#main_heading")
    let main_title = document.querySelector("#main_title")
    let main_desc = document.querySelector("#main_desc")

    main_heading.innerHTML = `${res.title}`
    main_title.innerHTML = `${title}`
    main_desc.innerHTML = `${desc}`

    data.forEach(elem => {
        console.log(elem);

        // IMPLEMENTING JOURNEY BOARD CONTENTS DYNAMICALLY 1
        let journey_board_titles = document.querySelector(".journey-board-titles")
        journey_board_titles.innerHTML += `<li>
        <img src="./assets/blackDots.svg" alt="" srcset="">
        <span>${elem.asset_title}</span>
        </li>`
        // IMPLEMENTING JOURNEY BOARD CONTENTS DYNAMICALLY 2
        let journey_board_titles2 = document.querySelector(".journey-board-titles2")

        journey_board_titles2.innerHTML += `<li>
            <img src="./assets/blackDots.svg" alt="" srcset="">
            <span>${elem.asset_title}</span>
            </li>`


        // FIRST CHECKING THE TYPE OF ASSET THEN APPENDING RESPECTIVELY
        if (elem.asset_type == "display_asset" && elem.asset_content_type == "video") {
            console.log("card 1 video youtbe");
            makeCard1(elem);
        }

        if (elem.asset_type == "input_asset" && elem.asset_content_type == "threadbuilder") {
            console.log("card 2 thread BUILD");
            makeCard2(elem);
        }

        if (elem.asset_type == "input_asset" && elem.asset_content_type == "article") {
            console.log("card 3 structure pointer");
            makeCard3(elem);

        }

        if (elem.asset_type == "display_asset" && elem.asset_content_type == "article") {
            console.log("card 4 4SA METHID");
            makeCard4(elem);

        }



    });

}

fetchData();

// FUNCTION TO MAKE TECHNICAL PROJECT MANAGEMETN CARD
function makeCard1(detail) {

    cards.innerHTML += `<div class="technical-card card">

                <div class="technical-card__heading card_heading">
                    <h2>${detail.asset_title}</h2>
                    <img src="./assets/info.svg" alt="">
                </div>

                <div class="technical-card__description card__description">
                    <p>Description : <span>${detail.asset_description}</span></p>
                </div>

                <iframe class="technical-card__youtube" width="560" height="315"
                    src="${detail.asset_content}" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>`

}

// FUNCTION TO MAKE CARD 2 THREAD BUILD ONE
function makeCard2(detail) {
    cards.innerHTML += `<div class="thread-card card">

                <!-- heading info -->
                <div class="technical-card__heading card_heading">
                    <h2>${detail.asset_title}</h2>
                    <img src="./assets/info.svg" alt="">
                </div>

                <!-- description -->
                <div class="technical-card__description card__description">
                    <p>Description : <span>${detail.asset_description}</span></p>
                </div>

                <!-- arrow upper THREAD A -->
                <div class="thread-heading">
                    <img src="./assets/upperArrow.svg" alt="">
                    <h1>Thread A</h1>
                </div>

                <!-- small cards sub thred sub intrepreation -->
                <div class="thread-inner-cards">

                    <div class="sub-thread sub">
                        <h2>Sub Thread 1</h2>
                        <p><span>Enter Text Here</span></p>
                    </div>

                    <div class="sub-inter sub">
                        <h2>Sub Interpretation 1</h2>
                        <p><span>Enter Text Here</span></p>
                    </div>

                </div>

                <!-- icons and select tags -->
                <div class="thread-card-icon-div">

                    <div class="thread-card-icons">
                        <img src="./assets/bulb.svg" alt="">
                        <img src="./assets/message.svg" alt="">
                        <img src="./assets/question.svg" alt="">
                        <img src="./assets/flower.svg" alt="">
                    </div>

                    <div class="thread-card-select">

                        <div>
                            <p>Select Categ</p>
                            <img src="./assets/selectIcon.svg" alt="" srcset="">
                        </div>

                        <div>
                            <p>Select Categ</p>
                            <img src="./assets/selectIcon.svg" alt="" srcset="">
                        </div>

                    </div>

                </div>

                <!-- button blue sub-thred -->
                <div class="thread-card-blue-button">
                    <span>+</span>
                    <span>Sub-thread</span>
                </div>

                <!-- ------ -->
                <div class="thread-card-last-div">
                    <h2>Summary for Thread A</h2>
                    <p><span>Enter Text Here</span></p>
                </div>

            </div>`
}

// FUNCTION TO MAKE CARD 3 STRUCTURE POINTER ONE
function makeCard3(detail) {

    cards.innerHTML += `<div class="card card3">

                <!-- heading info -->
                <div class="card_heading">
                    <h2>${detail.asset_title}</h2>
                    <img src="./assets/info.svg" alt="">
                </div>

                <!-- description -->
                <div class="card__description card3-desc">
                    <p>Description : <span>${detail.asset_description}</span></p>
                </div>

                <div class="card3-box">

                    <div class="card3-title">
                        <h2>Title</h2>
                    </div>

                    <div class="card3-title-box">
                    </div>

                    <div class="card3-content">
                        <h2>Content</h2>
                    </div>

                    <div class="card3-content-box">

                        <div class="card3-content-box-1">

                            <!-- texts -->
                            <div>
                                <span>File</span>
                                <span>Edit</span>
                                <span>View</span>
                                <span>Insert</span>
                                <span>Format</span>
                                <span>Tools</span>
                                <span>Table</span>
                                <span>Help</span>
                            </div>

                            <!-- images -->
                            <div>
                                <img src="./assets/leftArrow.svg" alt="" srcset="">
                                <img src="./assets/rightArrow.svg" alt="" srcset="">
                                <img src="./assets/expand.svg" alt="" srcset="">
                                <p>Paragraph</p>
                                <img src="./assets/dots2.svg" alt="" srcset="">
                            </div>

                        </div>

                        <div class="card3-content-box-2">
                        </div>

                    </div>

                </div>


            </div>`

}


// FUNCTION TO MAKE CARD 4 4SA METHOD ONE
function makeCard4(detail) {

    cards.innerHTML += ` <div class="card card3">

                <!-- heading info -->
                <div class="card_heading">
                    <h2>${detail.asset_title}</h2>
                    <img src="./assets/info.svg" alt="">
                </div>

                <!-- description -->
                <div class="card__description card4-desc">
                    <p>Description : <span>${detail.asset_description}</span></p>
                </div>

                <div class="card4-box">

                    <div class="card4-intro-box">

                        <div class="card4-box-heading card4-intro-box-heading">
                            <img src="./assets/upperArrow.svg" alt="">
                            <h2>Introduction</h2>
                        </div>

                        <p>The 4SA Method , How to bring a idea into progress ?</p>

                        <button>See More</button>

                    </div>

                    <div class="card4-intro-box card4-thread-box">

                        <div class="card4-box-heading card4-intro-box-heading">
                            <img src="./assets/upperArrow.svg" alt="">
                            <h2>Thred A</h2>
                        </div>

                        <p>How are you going to develop your stratergy ? Which method are you going to use to develop a
                            stratergy ? What if the project is lengthy?</p>

                        <button>See More</button>

                    </div>

                    <div class="card4-example-box">

                        <p>Example 1</p>

                        <p>You have a concept , How will you put into progress?</p>

                    </div>

                </div>

            </div>`
}





// CODE OF MAKING JOURNEY BOARD SLIDE
let journey_board1 = document.querySelector(".journey-board1")
let journey_board2 = document.querySelector(".journey-board2")

const handleOut = () => {
    console.log(journey_board2);
    journey_board2.style.transform = "translateX(260px)";
    journey_board1.style.transform = "translateX(260px)";
    journey_board1.style.zIndex = "1";
    journey_board2.style.zIndex = "2";
}

const handleIn = () => {
    console.log(journey_board2);
    journey_board2.style.transform = "translateX(0px)";
    journey_board1.style.transform = "translateX(0px)";
    journey_board1.style.zIndex = "2";
    journey_board2.style.zIndex = "1";

}

// IN RESPONSIVE SHOWING NAVBAR ICON
let navIcons2 = document.querySelector(".nav-icons-2")
const handleHam = () => {
    navIcons2.style.display = `${navIcons2.style.display == "flex" ? "none" : "flex"}`
}

// IN RESPONSIVE JOURNEY BOARD TRANSITION FROM BOTTOM
let journey_board2_2 = document.querySelector(".journey-board2_2")
const handlePop = () => {
    journey_board2_2.style.bottom = `${journey_board2_2.style.bottom == "0vh" ? "-60vh" : "0vh"}`;
}