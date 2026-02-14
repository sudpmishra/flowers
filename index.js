let noButtonDefaultPosition = {
    top: 0,
    left: 0
}

const TOLLERANCE = 500;

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
  const noButton = document.getElementById("no-button");
  // get the default position of the no button
  const rect = noButton.getBoundingClientRect();
  noButtonDefaultPosition.top = rect.top;
  noButtonDefaultPosition.left = rect.left;

  // Add click event to Yes button
  const yesButton = document.getElementById("yes-button");
  yesButton.addEventListener("click", () => {
    // Hide the question div
    document.querySelector(".question-div").style.display = "none";
    // Show the flowers
    document.querySelector(".flowers").classList.add("show");
    // show the flowers text
    document.querySelector(".flowers-text").classList.add("show");
  });

  // Create random sparkling stars
  createStars();
};

function createStars() {
  const night = document.querySelector(".night");
  const numberOfStars = 100; // Number of stars to create

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    
    // Random position
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    
    // Random size (1-3px)
    const size = Math.random() * 2 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";
    
    // Random animation duration (2-5 seconds)
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";
    
    // Random animation delay (0-5 seconds)
    star.style.animationDelay = Math.random() * 5 + "s";
    
    night.appendChild(star);
  }
}


onHoverNo = (e) => {
    const noButton = document.getElementById("no-button");
    const rect = noButton.getBoundingClientRect();
    
    // Minimum distance from mouse cursor (in pixels)
    const MIN_DISTANCE = 200;
    
    let x, y, buttonCenterX, buttonCenterY, distance;
    
    // Keep generating random positions until we find one far enough from the mouse
    do {
        x = Math.random() * TOLLERANCE - TOLLERANCE / 2;
        y = Math.random() * TOLLERANCE - TOLLERANCE / 2;
        
        // Calculate the button's center position after translation
        buttonCenterX = rect.left + rect.width / 2 + x;
        buttonCenterY = rect.top + rect.height / 2 + y;
        
        // Calculate distance from mouse to button center
        const dx = e.clientX - buttonCenterX;
        const dy = e.clientY - buttonCenterY;
        distance = Math.sqrt(dx * dx + dy * dy);
        
    } while (distance < MIN_DISTANCE);
    
    noButton.style.transform = `translate(${x}px, ${y}px)`;
}