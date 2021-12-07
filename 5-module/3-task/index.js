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
    rightButton.style.display = ''

    if (sliderPosition > 0) {
      sliderPosition = 0;
    }

    if (sliderPosition === 0) {
      leftButton.style.display = 'none'
    }

    slider.style.transform = `translateX(${sliderPosition}px)`
  })

  rightButton.addEventListener('click', () => {
    sliderPosition -= sliderWidth
    leftButton.style.display = ''
    
    if (sliderPosition < -`${sliderWidth * 3}`) {
      sliderPosition = -`${sliderWidth * 3}`;
    }
    
    if (sliderPosition === -`${sliderWidth * 3}`) {
      rightButton.style.display = 'none'
    } 

    slider.style.transform = `translateX(${sliderPosition}px)`
  })
}
