export default function body(){
    const img = document.querySelectorAll('[data-tab="menu"] li')
    const desc = document.querySelectorAll('[data-tab="content"] section')
    
    
    if(img.length && desc.length){
        
        desc[0].classList.add('ativo')
        
        function descAtivo(index){
            desc.forEach((item) =>{
                item.classList.remove('ativo')  
            })
            const direcao = desc[index].dataset.anime
            desc[index].classList.add('ativo', direcao)
        }
        
        img.forEach((item, index)=>{
            item.addEventListener('click', ()=>{
                descAtivo(index)
            })
        })
    }
}
