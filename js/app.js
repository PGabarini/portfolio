document.addEventListener('DOMContentLoaded',()=>{
    const enlaces = Array.from(document.querySelectorAll('.noListo'))

    enlaces.forEach( e => {

        e.addEventListener(('click'), (e) => {
        
            e.preventDefault()

            const mensaje = document.getElementById('mensajeNoListo')
            mensaje.style.display ='flex'

            setTimeout(() => {
                mensaje.style.display = 'none'
            }, 6000);


        })
    })
})