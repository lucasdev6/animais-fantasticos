export default function animationScroll(){

    const section = document.querySelectorAll('[data-anime="scroll"]')
    if(section.length){
        const displayMetade = window.innerHeight * 0.6
        function animaScroll(){
            section.forEach((item)=>{
                const sectionTop = item.getBoundingClientRect().top
                const sectionVisible = (sectionTop - displayMetade) < 0
                if(sectionVisible)
                    item.classList.add('ativo')
                else if (item.classList.contains('ativo')){
                    item.classList.remove('ativo')
                }
            })
        }
    
        animaScroll()
        
        window.addEventListener('scroll', animaScroll)

    }

}