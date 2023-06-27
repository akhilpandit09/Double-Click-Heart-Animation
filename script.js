const image = document.querySelector(".container"),
heartIcon = document.querySelector(".fa-heart");

image.addEventListener("dblclick", (e) =>{

    // calculate the x and y position of the double-click event
    let xValue = e.clientX - e.target.offsetLeft;
    let yValue = e.clientY - e.target.offsetTop;
    //set the position of the heart element using the x and y values
    heartIcon.style.left = `${xValue}px`;
    heartIcon.style.top = `${yValue}px`;

    // add the active class to the heart
    heartIcon.classList.add("active");

    // remove the active class after 1 second
    setTimeout(()=>{
        heartIcon.classList.remove("active");
    }, 1000);
});