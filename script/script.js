let acordionWrap = document.querySelectorAll(".step");
// for (let item of acordionWrap) {
//   item.addEventListener("click", function (e) {
//     this.classList.toggle('active');
//     // e.currentTarget.classList.toggle('active')
//   });
// }

acordionWrap.forEach(function (elemenet) {
  elemenet.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

function getinformation() {
  let requist = new XMLHttpRequest();
  // Request.open("method", "url");
  requist.open("GET", "https://reqres.in/api/unknown");
  requist.addEventListener("load", function () {
    let mosuliinfoText = this.responseText;
    let mosuliinfoJs = JSON.parse(mosuliinfoText);
    console.log(mosuliinfoJs);

    let ul = document.getElementById("ul");
    mosuliinfoJs.data.forEach((element2) => {
      let li = document.createElement("li");
      let liStyle = li;
      liStyle.style.color = element2.color;
      // li.innerText = element2.name + "_____" + element2.color;
      li.innerText = `${element2.name}______${element2.color}`;
      ul.appendChild(li);
    });
    document.getElementById("api-wraper").appendChild(ul);
  });
   requist.addEventListener("error", function () {
    let p = document.createElement("p");
    p.textContent = "Server Error";

    document.getElementById("api-wraper").appendChild(p);
  });
  requist.send();
  requist.send();
}
getinformation();

// 25wutze
