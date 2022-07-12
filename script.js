const button = document.querySelectorAll('.ripple')

button.forEach(button =>{
    button.addEventListener('click',function(e){
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInSide = x - buttonLeft
        const yInSide = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInSide + 'px'
        circle.style.left = xInSide + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(),500)
    })
})