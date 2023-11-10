const currentWindowSize = () => {
    let widthValue = document.querySelector('#widthValue')
    let heightValue = document.querySelector('#heightValue')
    widthValue.textContent = window.innerWidth
    heightValue.textContent = window.innerHeight
    }
    
    window.addEventListener('load', currentWindowSize);
    window.addEventListener('resize', currentWindowSize);