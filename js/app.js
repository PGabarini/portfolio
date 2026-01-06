document.addEventListener('DOMContentLoaded',()=>{
    const enlaces = Array.from(document.querySelectorAll('.noListo'))

    enlaces.forEach( e => {

        e.addEventListener(('click'), (e) => {
        
            e.preventDefault()

            const mensaje = document.getElementById('mensajeNoListo')
            mensaje.style.display ='flex'

            setTimeout(() => {
                mensaje.style.display = 'none'
            }, 4500);


        })
    })

    /*Cerrar modales */
    const modales = Array.from(document.querySelectorAll('.modal'))

    modales.forEach( m => {

        m.addEventListener(('click'), (e) => {
          
            if(e.target === m){
                m.style.display ='none'
            }
            
        })
    })

    /*Abrir modal metamapa */
    const verMasMetamapa = document.getElementById('detalle-metamapa')

    verMasMetamapa.addEventListener(('click'),() => {
        const modalMetamapa = document.getElementById('modal-metamapa')
        modalMetamapa.style.display = 'flex'
    })

    /*Abrir modal SO */ 
    const verSo = document.getElementById('detalle-so')

    verSo.addEventListener(('click'),() => {
        const so = document.getElementById('modal-so')
        so.style.display = 'flex'
    })

    /*Abrir modal Tienda Sol */
    const verSol = document.getElementById('detalle-sol')

    verSol.addEventListener(('click'),() => {
        const sol = document.getElementById('modal-sol')
        sol.style.display = 'flex'
    })



    /*Abrir modal sql */
    const verSql = document.getElementById('detalle-sql')

    verMasMverSqletamapa.addEventListener(('click'),() => {
        const sql = document.getElementById('modal-sql')
        sql.style.display = 'flex'
    })

    /*Abrir modal micro */
    const verMicro = document.getElementById('detalle-micro')

    verMicro.addEventListener(('click'),() => {
        const micro = document.getElementById('modal-micro')
        micro.style.display = 'flex'
    })


})