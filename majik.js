document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const images = Array.from(carouselTrack.children);
    const totalImages = images.length;
  
    // Duplicate images to ensure seamless loop
    images.forEach(image => {
      const clone = image.cloneNode(true);
      carouselTrack.appendChild(clone);
    });
  
    const newTotalImages = totalImages * 4;
    const scrollAmount = (1000 / totalImages) * newTotalImages;
  
    // Update CSS for animation based on the new number of images
    const keyframes = `
      @keyframes scrollCarousel {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-100% / ${totalImages} * ${newTotalImages}));
        }
      }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
  });
  