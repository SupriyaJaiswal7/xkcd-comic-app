let currentComicNum = null;

async function fetchComic(num = "") {
  try {
    const url = `https://xkcd.vercel.app/?comic=${num}`;
    const response = await fetch(url);
    const comic = await response.json();

    document.getElementById("comic-title").textContent = comic.title;
    document.getElementById("comic-img").src = comic.img;
    document.getElementById("comic-img").alt = comic.alt;
    document.getElementById("comic-alt").textContent = comic.alt;

    currentComicNum = comic.num;
  } catch (error) {
    console.error("Failed to fetch comic:", error);
  }
}

function getPrevComic() {
  if (currentComicNum > 1) {
    fetchComic(currentComicNum - 1);
  }
}

function getNextComic() {
  fetchComic(currentComicNum + 1);
}

function getRandomComic() {
  const randomNum = Math.floor(Math.random() * 2800) + 1; // Rough estimate
  fetchComic(randomNum);
}

// Load the latest comic on page load
fetchComic();
