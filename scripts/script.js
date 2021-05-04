const leftButton = document.getElementById("left-button")
const rightButton = document.getElementById("right-button")

const slideItem = document.querySelectorAll(".slide-item")

rightButton.addEventListener("click", () => {

    slideItem.forEach(() => {
        for (let item of slideItem) {
            item.classList.add("slide-left")
        }
    })
})

leftButton.addEventListener("click", () => {
    slideItem.forEach(() => {
        for (let item of slideItem) {
            item.classList.remove("slide-left")
        }
    })
    
})