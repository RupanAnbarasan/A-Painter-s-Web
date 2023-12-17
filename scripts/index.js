const arr = [
  {
    id: 1,
    img: "../../assets/images/Img1.jpg",
    artTitle: "Art 1",
    artistName: "Yayoi Kusama",
    year: "2021",
  },
  {
    id: 2,
    img: "../../assets/images/Img2.jpg",
    artTitle: "Art 2",
    artistName: "Andy Warhol",
    year: "2012",
  },
  {
    id: 3,
    img: "../../assets/images/Img3.jpg",
    artTitle: "Art 3",
    artistName: "Jackson Pollock",
    year: "2020",
  },
  {
    id: 4,
    img: "../../assets/images/Img4.jpg",
    artTitle: "Art 4",
    artistName: "Frida Kahlo",
    year: "2022",
  },
  {
    id: 5,
    img: "../../assets/images/Img5.jpg",
    artTitle: "Art 5",
    artistName: "Edward Hopper",
    year: "2015",
  },
  {
    id: 6,
    img: "../../assets/images/Img6.jpg",
    artTitle: "Art 6",
    artistName: "Georgia O’Keeffe",
    year: "2017",
  },
];

function goToHome() {
  window.location.href = "http://127.0.0.1:5500/pages/index.html";
}

function goToAbout() {
  window.location.href = "http://127.0.0.1:5500/pages/about/about.html";
}

function redirectToWorkItem(workId) {
  window.location.href = `http://127.0.0.1:5500/pages/work-items/work-item.html?id=${workId}`;
}

const getWorkItem = () => {
  const currentURL = window.location.href;
  const match = currentURL.match(/[?&]id=([^&]*)/);
  console.log(match);
  const selectedWorkId = match ? match[1] : null;
  console.log(selectedWorkId);

  var selectedWork = arr.find((a) => {
    return a.id == selectedWorkId;
  });
  console.log(selectedWork);
  document.querySelector(".artTitle").innerHTML = selectedWork.artTitle;
  document.querySelector(".artistName").innerHTML = selectedWork.artistName;
  document.querySelector(".year").innerHTML = selectedWork.year;
  document.querySelector(".img").src = selectedWork.img;
};
let showMenu = false;
const handleNav = () => {
  const nav = document.querySelector(".nav-bar");
  const menuBtn =  document.querySelector(".menu-btn");
  if (nav.classList.contains("nav-active")) {
    nav.classList.remove("nav-active");
    nav.style.display = "none";
  } else {
    nav.classList.add("nav-active");
    nav.style.display = "block";
  }
  if (!showMenu) {
    menuBtn.classList.add("close");
    showMenu = true;}
    else {
      menuBtn.classList.remove("close");
      showMenu = false;}
};