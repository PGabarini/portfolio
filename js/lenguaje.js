document.addEventListener('DOMContentLoaded',()=>{
    const lang = navigator.language || navigator.userLanguage

    if(lang && lang.startsWith("en")){
        windows.location.replce("index.e.html")
    }

})