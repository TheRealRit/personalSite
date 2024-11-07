  // Get the canvas element and set its size
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  // Variables for gradient movement
  var gradientStart = 0;
  var gradientSpeed = 0.1; // Speed of gradient animation

  // Variables for the stars
    var stars = [];
    var numStars = 150;  // Number of stars to be drawn
    var maxStarSize = 3; // Maximum size of the stars

  // Function to create a star with random properties
    function createStar() {
      var x = Math.random() * canvas.width;
      var y = Math.random() * canvas.height;
      var size = Math.random() * maxStarSize;
      var alpha = Math.random() * 0.5 + 0.5; // Random opacity for twinkling effect
    return { x, y, size, alpha };
    }

    // Function to initialize the stars
  function initializeStars() {
      stars = [];
      for (var i = 0; i < numStars; i++) {
          stars.push(createStar());
      }
  }


  // Set the canvas to the full size of the window
  function resizeCanvas() {
      canvas.width = document.documentElement.clientWidth;
      canvas.height = window.innerHeight;
      initializeStars();
  }

// Call resizeCanvas on window resize and on page load
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
  // Function to animate the gradient by adjusting its position
  function animateGradient() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create a linear gradient that moves from left to right
    var gradient = ctx.createLinearGradient(gradientStart, 0, canvas.width + gradientStart, canvas.height);

    
    var lines = 200;
    const gap = 1/lines;
    const gapColor = 0.4/lines;
    const gap2 = 80/lines;
    for(let i = 0; i < lines; i++) {
        var string = 'rgba(0, 0, ' + (50 + (i*gap2)) + ', ' + (1 - (i * gapColor)) + ')';
        gradient.addColorStop((i*gap), string);
    }
        
        

    /*
    // Define color stops for the gradient
    gradient.addColorStop(0, 'rgba(0, 0, 50, 1)');           // Dark blue (start)
    gradient.addColorStop(0.0125, 'rgba(0, 0, 50, 0.9985)'); // Extremely subtle shift
    gradient.addColorStop(0.025, 'rgba(0, 0, 51, 0.997)');   // Subtle lightening
    gradient.addColorStop(0.0375, 'rgba(0, 0, 52, 0.995)');  // Very soft change
    gradient.addColorStop(0.05, 'rgba(0, 0, 52, 0.99)');     // Very subtle lightening
    gradient.addColorStop(0.0625, 'rgba(0, 0, 53, 0.985)');  // Very soft shift
    gradient.addColorStop(0.075, 'rgba(0, 0, 54, 0.98)');    // Almost imperceptible
    gradient.addColorStop(0.0875, 'rgba(0, 0, 55, 0.975)');  // Very gradual change
    gradient.addColorStop(0.1, 'rgba(0, 0, 55, 0.97)');      // Subtle lighter blue
    gradient.addColorStop(0.1125, 'rgba(0, 0, 56, 0.965)');  // Slightly lighter
    gradient.addColorStop(0.125, 'rgba(0, 0, 57, 0.96)');    // Very subtle shift
    gradient.addColorStop(0.1375, 'rgba(0, 0, 58, 0.955)');  // Almost unnoticeable lightening
    gradient.addColorStop(0.15, 'rgba(0, 0, 58, 0.95)');     // Slightly lighter
    gradient.addColorStop(0.1625, 'rgba(0, 0, 59, 0.945)');  // Soft change
    gradient.addColorStop(0.175, 'rgba(0, 0, 60, 0.94)');    // Soft transition
    gradient.addColorStop(0.1875, 'rgba(0, 0, 61, 0.935)');  // Slight fade
    gradient.addColorStop(0.2, 'rgba(0, 0, 62, 0.93)');      // Subtle shift
    gradient.addColorStop(0.2125, 'rgba(0, 0, 63, 0.925)');  // Lightening begins
    gradient.addColorStop(0.225, 'rgba(0, 0, 64, 0.92)');    // Very soft transition
    gradient.addColorStop(0.2375, 'rgba(0, 0, 65, 0.915)');  // Softening the blue
    gradient.addColorStop(0.25, 'rgba(0, 0, 66, 0.91)');     // More noticeable lightening
    gradient.addColorStop(0.2625, 'rgba(0, 0, 67, 0.905)');  // Almost pastel
    gradient.addColorStop(0.275, 'rgba(0, 0, 68, 0.9)');     // Lightening continues
    gradient.addColorStop(0.2875, 'rgba(0, 0, 69, 0.895)');  // Soft fade into lighter
    gradient.addColorStop(0.3, 'rgba(0, 0, 70, 0.89)');      // Fading into lighter blue
    gradient.addColorStop(0.3125, 'rgba(0, 0, 71, 0.885)');  // Soft mid-tone blue
    gradient.addColorStop(0.325, 'rgba(0, 0, 72, 0.88)');    // Still subtle
    gradient.addColorStop(0.3375, 'rgba(0, 0, 73, 0.875)');  // Subtle shift in opacity
    gradient.addColorStop(0.35, 'rgba(0, 0, 74, 0.87)');     // Mid-light blue
    gradient.addColorStop(0.3625, 'rgba(0, 0, 75, 0.865)');  // Softening transition
    gradient.addColorStop(0.375, 'rgba(0, 0, 76, 0.86)');    // Subtle lightness
    gradient.addColorStop(0.3875, 'rgba(0, 0, 77, 0.855)');  // Fading into light blue
    gradient.addColorStop(0.4, 'rgba(0, 0, 78, 0.85)');      // More light blue
    gradient.addColorStop(0.4125, 'rgba(0, 0, 79, 0.845)');  // Almost pastel
    gradient.addColorStop(0.425, 'rgba(0, 0, 80, 0.84)');    // Lightening further
    gradient.addColorStop(0.4375, 'rgba(0, 0, 81, 0.835)');  // Subtle shift
    gradient.addColorStop(0.45, 'rgba(0, 0, 82, 0.83)');     // Fading more
    gradient.addColorStop(0.4625, 'rgba(0, 0, 83, 0.825)');  // More gradual lightening
    gradient.addColorStop(0.475, 'rgba(0, 0, 84, 0.82)');    // Nearly pastel blue
    gradient.addColorStop(0.4875, 'rgba(0, 0, 85, 0.815)');  // Very soft blue
    gradient.addColorStop(0.5, 'rgba(0, 0, 86, 0.81)');      // Light blue
    gradient.addColorStop(0.5125, 'rgba(0, 0, 87, 0.805)');  // Gradual transition
    gradient.addColorStop(0.525, 'rgba(0, 0, 88, 0.8)');     // Midway point
    gradient.addColorStop(0.5375, 'rgba(0, 0, 89, 0.795)');  // Slightly lighter
    gradient.addColorStop(0.55, 'rgba(0, 0, 90, 0.79)');     // More light blue
    gradient.addColorStop(0.5625, 'rgba(0, 0, 91, 0.785)');  // Soft fade
    gradient.addColorStop(0.575, 'rgba(0, 0, 92, 0.78)');    // More gradual
    gradient.addColorStop(0.5875, 'rgba(0, 0, 93, 0.775)');  // Very light blue
    gradient.addColorStop(0.6, 'rgba(0, 0, 94, 0.77)');      // Almost pastel blue
    gradient.addColorStop(0.6125, 'rgba(0, 0, 95, 0.765)');  // Very soft transition
    gradient.addColorStop(0.625, 'rgba(0, 0, 96, 0.76)');    // Light pastel
    gradient.addColorStop(0.6375, 'rgba(0, 0, 97, 0.755)');  // Near white blue
    gradient.addColorStop(0.65, 'rgba(0, 0, 98, 0.75)');     // Near white
    gradient.addColorStop(0.6625, 'rgba(0, 0, 99, 0.745)');  // Faint blue
    gradient.addColorStop(0.675, 'rgba(0, 0, 100, 0.74)');   // Light blue
    gradient.addColorStop(0.6875, 'rgba(0, 0, 101, 0.735)'); // Very soft blue
    gradient.addColorStop(0.7, 'rgba(0, 0, 102, 0.73)');     // Soft pastel blue
    gradient.addColorStop(0.7125, 'rgba(0, 0, 103, 0.725)'); // Nearly white
    gradient.addColorStop(0.725, 'rgba(0, 0, 104, 0.72)');   // Very light blue
    gradient.addColorStop(0.7375, 'rgba(0, 0, 105, 0.715)'); // Almost completely faded
    gradient.addColorStop(0.75, 'rgba(0, 0, 106, 0.71)');    // Lightest blue
    gradient.addColorStop(0.7625, 'rgba(0, 0, 107, 0.705)'); // Softest light blue
    gradient.addColorStop(0.775, 'rgba(0, 0, 108, 0.7)');    // Soft light blue
    gradient.addColorStop(0.7875, 'rgba(0, 0, 109, 0.695)'); // Faint blue
    gradient.addColorStop(0.8, 'rgba(0, 0, 110, 0.69)');     // Almost pastel
    gradient.addColorStop(0.8125, 'rgba(0, 0, 111, 0.685)'); // Very pale blue
    gradient.addColorStop(0.825, 'rgba(0, 0, 112, 0.68)');   // Extremely light blue
    gradient.addColorStop(0.8375, 'rgba(0, 0, 113, 0.675)'); // Faint blue
    gradient.addColorStop(0.85, 'rgba(0, 0, 114, 0.67)');    // Almost white
    gradient.addColorStop(0.8625, 'rgba(0, 0, 115, 0.665)'); // Nearly white
    gradient.addColorStop(0.875, 'rgba(0, 0, 116, 0.66)');   // Very pale
    gradient.addColorStop(0.8875, 'rgba(0, 0, 117, 0.655)'); // Super light blue
    gradient.addColorStop(0.9, 'rgba(0, 0, 118, 0.65)');     // Lightest blue
    gradient.addColorStop(0.9125, 'rgba(0, 0, 119, 0.645)'); // Faintest shift
    gradient.addColorStop(0.925, 'rgba(0, 0, 120, 0.64)');   // Almost white
    gradient.addColorStop(0.9375, 'rgba(0, 0, 121, 0.635)'); // Very light blue
    gradient.addColorStop(0.95, 'rgba(0, 0, 122, 0.63)');    // Extremely light
    gradient.addColorStop(0.9625, 'rgba(0, 0, 123, 0.625)'); // Soft blue
    gradient.addColorStop(0.975, 'rgba(0, 0, 124, 0.62)');   // Near white
    gradient.addColorStop(0.9875, 'rgba(0, 0, 125, 0.615)'); // Faintest light blue
    gradient.addColorStop(1, 'rgba(0, 0, 130, 0.6)');        // Lightest blue (end)
*/



    // Apply the gradient as the fill style
    ctx.fillStyle = gradient;

    // Fill the canvas with the updated gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawStars();

    // Update the starting point for the gradient animation
    gradientStart += gradientSpeed;
    
    // Reset the gradient position to loop the animation
    if (gradientStart > canvas.width * 1) {
      //gradientStart = 0;
    }

    // Request the next frame for smooth animation
    requestAnimationFrame(animateGradient);
  }

  // Function to draw the stars on the canvas
    function drawStars() {
    ctx.fillStyle = 'white'; // Set the star color to white

    // Loop through each star and draw it with a twinkling effect
    stars.forEach(star => {
        // Slight random change in opacity to mimic twinkling
        star.alpha = Math.random() * 0.7 + 0.7;
        ctx.globalAlpha = star.alpha;

        // Draw each star as a small circle
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });

    ctx.globalAlpha = 1; // Reset the global alpha to 1 (fully opaque)
    }

  // Start the animation
  animateGradient();