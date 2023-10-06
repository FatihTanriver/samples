// Modify the event listener to use the debounce function
document.getElementById("search").addEventListener(
  "input",
  debounce((e) => {
    // Reset the dropdown when something is typed into the search box
    document.getElementById("tagFilter").value = "";
    applyFilters();
  }, 300)
);

document.getElementById("tagFilter").addEventListener("change", () => {
  // Reset the search box when a tag is selected from the dropdown
  document.getElementById("search").value = "";
  applyFilters();
});

function applyFilters() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const selectedTag = document.getElementById("tagFilter").value.toLowerCase();
  filterCards(searchTerm, selectedTag, compCards);
}

// Adding a debounce function to add a delay in the execution of the filter function
function debounce(func, delay) {
  let debounceTimer;
  return function (...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

getCards("json/cards.json");
var compCards;
async function getCards(url) {
  const res = await fetch(
    url
  ); /* we use await because fetch returns a promise */
  const data = await res.json();

  compCards = data;

  addCards(data);
  addFilters(data);
}

function addFilters(cards) {
  var allTags = [];
  cards.forEach(function (card) {
    var elTags = card.tags.split(", ");
    allTags = allTags.concat(elTags);
  });

  var distinctTags = [...new Set(allTags)];
  distinctTags.sort();

  const select = document.getElementById("tagFilter");
  distinctTags.forEach((tag) => {
    const option = document.createElement("option");
    option.value = tag;
    option.text = tag;
    select.appendChild(option);
  });

  select.addEventListener("change", (e) => {
    const selectedTag = e.target.value.toLowerCase();
    filterCards("", selectedTag, compCards);
  });
}

function addCards(cards) {
  const cardsContainer = document.getElementById("Project50Cards");

  cardsContainer.innerHTML = ""; // clear by default

  cards.forEach((card) => {
    // destructuring example
    const {
      video_path,
      video_title,
      zoom_active,
      zoom_level,
      video_speed,
      is_muted,
    } = card;

    /* <div class="card" onmouseover="playVideo(this)" onmouseout="pauseVideo(this)"> */
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.setAttribute("onmouseover", `playVideo(this, ${video_speed})`);
    cardEl.setAttribute("onmouseout", "pauseVideo(this)");
    cardEl.innerHTML = `
    
    <div class="card-video-container">
      <video class="course-video" src="${video_path}" ${
      is_muted ? "muted" : ""
    }></video>
    </div>
    <input type="range" min="1" max="3" step="0.1" value="${zoom_level}" oninput="zoomVideo(this)" ${
      zoom_active ? "" : "disabled"
    }>
    <div class="course-title">${video_title}</div>
    <button>Show Details</button>

    `;

    // Method 1: Using DOM traversal methods
    const videoElement = cardEl.querySelector("video");
    videoElement.style.setProperty("--zoom-factor", zoom_level);

    /* Start Button */
    const btn = cardEl.querySelector("button");
    btn.onclick = function () {
      const modal = document.getElementById("myModal");

      // document.getElementById("modal-card-container").innerHTML =
      //   cardEl.innerHTML;

      // Get the video and input elements from the card
      const video = cardEl.querySelector(".course-video").cloneNode(true);

      const input = cardEl.querySelector("input[type='range']").outerHTML;

      // Set the content of the modal
      const modalCardContainer = document.getElementById(
        "modal-card-container"
      );
      // modalCardContainer.innerHTML = video.outerHTML + input;

      modalCardContainer.innerHTML = video.outerHTML;

      // Attach event listener to the range input inside the modal

      // Auto play the video when the modal opens
      modal.style.display = "block";

      let modalVideo = modalCardContainer.querySelector("video");

      modalVideo.play();
      modalVideo.autoplay = true;

      // Populate HTML, CSS, JS content as needed
      // document.getElementById("html-content").innerText = "HTML content here";
      // document.getElementById("css-content").innerText = "CSS content here";
      // document.getElementById("js-content").innerText = "JS content here";
      modal.style.display = "block";
    };
    /* End Button */

    cardsContainer.appendChild(cardEl);
  });
}

function playVideo(card, speed) {
  var video = card.querySelector("video");
  video.currentTime = 0;
  video.autoplay = true;
  video.playbackRate = speed;
  /*video.play().catch(function (error) {
    console.log(error);
  }); */

  var playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(function (error) {
      // Avoid displaying the warning message in the console
      if (error.name !== "AbortError") {
        console.log(error);
      }
    });
  }
}

function pauseVideo(card) {
  var video = card.querySelector("video");
  video.autoplay = false;
  video.pause();
  video.currentTime = 0;
}

function zoomVideo(rangeInput) {
  var card = rangeInput.parentNode;
  var video = card.querySelector(".course-video");
  var zoomFactor = parseFloat(rangeInput.value);
  video.style.setProperty("--zoom-factor", zoomFactor);
}

function filterCards(searchTerm, selectedTag, cards) {
  const cardsContainer = document.getElementById("Project50Cards");
  cardsContainer.innerHTML = ""; // Clear the container for re-rendering filtered cards

  if (!cards || !Array.isArray(cards)) {
    console.error("cards is not defined or not an array:", cards);
    return;
  }

  let filteredCards = cards.filter((card) => {
    const tagIncludes =
      !selectedTag || card.tags.toLowerCase().includes(selectedTag);
    const searchIncludes =
      !searchTerm || card.tags.toLowerCase().includes(searchTerm);
    return tagIncludes && searchIncludes;
  });

  addCards(filteredCards);
}

document.getElementsByClassName("close")[0].onclick = function () {
  document.getElementById("myModal").style.display = "none";
};

window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var isActive = this.classList.contains("active");

    // Close all accordions
    for (var j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
      acc[j].nextElementSibling.style.display = "none";
      acc[j].querySelector(".icon").textContent = "+";
    }

    // If the clicked accordion was not previously active, open it
    if (!isActive) {
      this.classList.add("active");
      this.nextElementSibling.style.display = "block";
      this.querySelector(".icon").textContent = "-";
    }
  });
}

/* Start - Modal Divider */

const divider = document.getElementById("divider");
let isResizing = false;

divider.addEventListener("mousedown", (event) => {
  isResizing = true;
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", () => {
    isResizing = false;
    document.removeEventListener("mousemove", handleMouseMove);
  });
});

function handleMouseMove(event) {
  const leftSection = document.querySelector(".left-section");
  const rightSection = document.querySelector(".right-section");

  const leftBound = leftSection.getBoundingClientRect().left;
  const rightBound = rightSection.getBoundingClientRect().right;

  const newLeftWidth = event.clientX - leftBound;
  const newRightWidth = rightBound - event.clientX;

  if (newLeftWidth > leftBound && newRightWidth > 0) {
    const totalWidth = leftSection.offsetWidth + rightSection.offsetWidth;
    const leftPercentage = (newLeftWidth / totalWidth) * 100;
    const rightPercentage = 100 - leftPercentage;

    if (leftPercentage <= 76 && leftPercentage >= 33.334) {
      // limit the left section to 75%
      leftSection.style.flexBasis = `${leftPercentage}%`;
      rightSection.style.flexBasis = `${rightPercentage}%`;
    }
  }
}

/* End - Modal Divider */
