setTimeout(() => {
    document.querySelector(".screenLoader").style.visibility = 'hidden';
    // the best case to remove element from Dom to not allow any one make inspect return it 
    // document.querySelector(".screenLoader").remove();
    document.body.style.overflowY = 'auto';
}, 0);

let scrollTop = document.querySelector(".scrollTop");
window.onscroll = function () {
    if (window.scrollY >= 400) {
        scrollTop.style.display = "block";
    }
    else {
        scrollTop.style.display = "none";
    }
}
scrollTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}  
// document.addEventListener('DOMContentLoaded', function () { 
//     //  // Get All lectures and show videos
//     //  let lectures = document.querySelectorAll(".lectures .card .show");
//     //  let lec = document.querySelectorAll(".lectures");
//     //  let LecArr = [];
     
//     //  lec.forEach((e) => {
//     //      LecArr.push(e.innerHTML);
//     //  });
//     //  localStorage.setItem("lecture" , JSON.stringify(LecArr));
//     //   lectures.forEach((lecture) => {
//     //      lecture.addEventListener("click", function (e) {
//     //      let name = e.target.dataset.name;
//     //      let id = e.target.dataset.id ;
//     //          window.location.href = 'playLectures.html?id=' + id + '&name=' + name ;
//     //      });
//     //  });
// });

// Get toggle Menu 
let toggleBurger = document.querySelector(".toggleBurger");
let side__Bar = document.querySelector(".side__Bar");
let close = document.querySelector(".close")
toggleBurger.addEventListener('click', () => {
    side__Bar.classList.add("active");
});
close.addEventListener('click', () => {
    side__Bar.classList.remove("active");
});

function copyText(targetElment) {
    // Get the text content from the div
    let textToCopy = targetElment.closest(".copyButton").parentNode.textContent;
    // Create a temporary textarea element
    let textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    // Select the text within the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    // Remove the textarea
    document.body.removeChild(textarea);
}
 