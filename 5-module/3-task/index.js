function initCarousel() {
  let sliderPosition = 0;
  const rightButton = document.querySelector('.carousel__arrow_right');
  const leftButton = document.querySelector('.carousel__arrow_left');
  const slider = document.querySelector('.carousel__inner');
  const sliderWidth = slider.clientWidth

  if (sliderPosition === 0) {
    leftButton.style.display = 'none'
  } 

  leftButton.addEventListener('click', () => {
    sliderPosition += sliderWidth
    
    if (sliderPosition > 0) {
      sliderPosition = 0;
    }

    if (sliderPosition === 0) {
      leftButton.style.display = 'none'
    }

    if (sliderPosition > -2963) {
      rightButton.style.display = ''
    }

    slider.style.transform = `translateX(${sliderPosition}px)`
  })

  rightButton.addEventListener('click', () => {
    sliderPosition -= sliderWidth

    if (sliderPosition < -2964) {
      sliderPosition = -2964;
    }
    
    if (sliderPosition === -2964) {
      rightButton.style.display = 'none'
    } 
    
    if (sliderPosition < 0) {
      leftButton.style.display = ''
    }
    slider.style.transform = `translateX(${sliderPosition}px)`
  })
}
