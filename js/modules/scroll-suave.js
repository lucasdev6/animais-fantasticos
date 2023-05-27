export default function scrollSmooth(){
    const link = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
    
    function scrollToSectoin(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    
    }
    
    link.forEach((item)=>{
        item.addEventListener('click', scrollToSectoin)
    })
}
