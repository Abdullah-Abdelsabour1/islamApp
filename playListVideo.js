 // Get All lectures and show videos
 let lectures = document.querySelectorAll(".lectures .card .show");
 let lec = document.querySelectorAll(".lectures");
 let LecArr = [];
 
 lec.forEach((e) => {
     LecArr.push(e.innerHTML);
 });
 localStorage.setItem("lecture" , JSON.stringify(LecArr));
  lectures.forEach((lecture) => {
     lecture.addEventListener("click", function (e) {
     let name = e.target.dataset.name;
     let id = e.target.dataset.id ;
         window.location.href = 'playLectures.html?id=' + id + '&name=' + name ;
     });
 });