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



let cards = document.querySelector(".cards");


const fetchData = async () => {
    // console.log("FETCING DATA");
    // let res = await fetch("data.json");
    // res = await res.json();
    let res = {
        "_id": {
            "$oid": "63b64dc9e3b230ebb60a495d"
        },
        "_key": "topic:2085",
        "category": "Course",
        "cid": {
            "$numberDouble": "NaN"
        },
        "commitment": "4 hours",
        "commitment_type": "custom",
        "deadline": "",
        "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
        "faqs": [],
        "globalTags": [],
        "isActive": true,
        "lastposttime": 0,
        "learning_outcomes": [
            "Bare minimum knowledge of project management",
            "4SA Concept",
            "Would be able to handle any project efficiently"
        ],
        "mainPid": 0,
        "postcount": 0,
        "pre_requisites": [
            "An open mind to learn any concept",
            "Thought of Unlearning and Relearning "
        ],
        "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
        "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
        "slug": "2085/technical-project-management",
        "status": "published",
        "tasks": [
            {
                "task_id": 18882,
                "task_title": "Explore the world of management",
                "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
                "status": "notworkyet",
                "assets": [
                    {
                        "asset_id": 18883,
                        "asset_title": "Technical Project Management",
                        "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                        "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
                        "asset_type": "display_asset",
                        "asset_content_type": "video"
                    },
                    {
                        "asset_id": 18884,
                        "asset_title": "Threadbuild",
                        "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                        "asset_content": " ",
                        "asset_type": "input_asset",
                        "asset_content_type": "threadbuilder"
                    },
                    {
                        "asset_id": 18885,
                        "asset_title": "Structure you pointers ",
                        "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                        "asset_content": " ",
                        "asset_type": "input_asset",
                        "asset_content_type": "article"
                    },
                    {
                        "asset_id": 18886,
                        "asset_title": "4SA Method",
                        "asset_description": "To explore more read more",
                        "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                        "asset_type": "display_asset",
                        "asset_content_type": "article"
                    }
                ]
            }
        ],
        "tid": 2085,
        "timestamp": 1672891849700,
        "title": "Technical Project Management",
        "type": "project",
        "uid": 100,
        "viewcount": 0,
        "publishedAt": 1672893847792
    }

    console.log(res.tasks);
    const data = res.tasks[0].assets;
    const title = res.tasks[0].task_title;
    const desc = res.tasks[0].task_description;

    console.log(data);
    console.log(title);
    console.log(desc);

    let main_heading = document.querySelector("#main_heading")
    let main_title = document.querySelector("#main_title")
    let main_desc = document.querySelector("#main_desc")

    main_heading.innerHTML = `${res.title}`
    main_title.innerHTML = `${title}`
    main_desc.innerHTML = `${desc}`

    data.forEach(elem => {
        console.log(elem);

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