export default function faq(){
    const dtFaq = document.querySelectorAll('[data-anime="accordion"] dt')
    
    if(dtFaq.length){
        dtFaq[0].classList.add('ativo')
        dtFaq[0].nextElementSibling.classList.add('ativo')
        
        function ddAtivo(){
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }
        dtFaq.forEach((item)=>{
            item.addEventListener('click', ddAtivo)
          
        })
    }
}

