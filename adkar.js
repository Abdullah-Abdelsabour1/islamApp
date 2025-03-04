// fetch adkar 
async function getAdkar() {
    let res = await fetch("https://abdullah-abdelsabour1.github.io/athkar/");
    let data = await res.json();
    let time = ["مرة", "مرتان", "مرات", "مرة"];
    defultthkr();
    function defultthkr() {
        data.morningAdkar.forEach((thkr) => {
            document.getElementById("thkrContent").innerHTML +=
                `<div class ="content fs-5 text-center p-2 w-90 mx-auto" id="content">
                 <p class="thkr">${thkr.content}</p> 
                 <p class="time"> ${tafqit(thkr.count, { Subject: time ,  Feminine:"on" })}</p>  
            </div>`;
        });
    }

    function getMorningAdkar(e) {
        document.getElementById("heading").innerHTML = `${e.target.dataset.name}`;
        document.getElementById("thkrContent").innerHTML = "";
        data.morningAdkar.forEach((thkr) => {
            document.getElementById("thkrContent").innerHTML +=
                `<div class ="content fs-5 text-center p-2 w-90 mx-auto" id="content">
                <p class="thkr">${thkr.content}</p> 
                <p class="time"> ${tafqit(thkr.count, { Subject: time ,  Feminine:"on" })}</p>  
            </div>`;
        });       
    }

    function getAfterNoonAdkar(e) {
       
        document.getElementById("heading").innerHTML = `${e.target.dataset.name}`;
        document.getElementById("thkrContent").innerHTML = "";
        data.AfterNoonAdkar.forEach((thkr) => {
            document.getElementById("thkrContent").innerHTML +=
                `<div class ="content fs-5 text-center p-2 w-90 mx-auto" id="content">
                <p class="thkr">${thkr.content}</p> 
                 <p class="time"> ${tafqit(thkr.count, { Subject: time ,  Feminine:"on" })}</p>  
            </div>`;
        });
       
    }

    function getSleepingAdkar(e) {
        document.getElementById("heading").innerHTML = `${e.target.dataset.name}`;
        document.getElementById("thkrContent").innerHTML = "";
        data.sleepingAdkar.forEach((thkr) => {
            console.log(thkr.content);
            document.getElementById("thkrContent").innerHTML +=
                `<div class ="content fs-5 text-center p-2 w-90 mx-auto" id="content">
                <p class="thkr">${thkr.content}</p> 
                 <p class="time "> ${tafqit(thkr.count, { Subject: time ,  Feminine:"on" })}</p>  
            </div>`;
        });

       
    }

    function getPrayingAdkar(e) {
        document.getElementById("heading").innerHTML = `${e.target.dataset.name}`;
        document.getElementById("thkrContent").innerHTML = "";
        data.prayingAdkar.forEach((thkr) => {
            document.getElementById("thkrContent").innerHTML +=
                `<div class ="content fs-5 text-center p-2 w-90 mx-auto" id="content">
                 <p class="thkr">${thkr.content}</p> 
                 <p class="time"> ${tafqit(thkr.count, { Subject: time ,  Feminine:"on" })}</p>  
            </div>`;
        });
       
    }

    // choose the link of thkr 
    let MorninngThkr = document.getElementById("MorninngThkr");
    MorninngThkr.addEventListener("click", getMorningAdkar);

    let AfterNoonThkr = document.getElementById("AfterNoonThkr");
    AfterNoonThkr.addEventListener("click", getAfterNoonAdkar);

    let prayingThkr = document.getElementById("prayingThkr");
    prayingThkr.addEventListener("click", getPrayingAdkar);

    let sleepingThkr = document.getElementById("sleepingThkr");
    sleepingThkr.addEventListener("click", getSleepingAdkar);

}

getAdkar();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
