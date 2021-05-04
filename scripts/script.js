const leftButton = document.getElementById("left-button")
const rightButton = document.getElementById("right-button")

const slidePhoto = document.querySelectorAll(".image-item")
const slideText = document.querySelectorAll(".text-item")

rightButton.addEventListener("click", () => {

    slidePhoto.forEach(() => {
        for (let item of slidePhoto) {
            item.classList.add("slide-photo")
        }
    })

    slideText.forEach(() => {
        for (let item of slideText) {
            item.classList.add("slide-text")
        }
    })
})

leftButton.addEventListener("click", () => {

    slidePhoto.forEach(() => {
        for (let item of slidePhoto) {
            item.classList.remove("slide-photo")
        }
    })
    
    slideText.forEach(() => {
        for (let item of slideText) {
            item.classList.remove("slide-text")
        }
    })
    
})