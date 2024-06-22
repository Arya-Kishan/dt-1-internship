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