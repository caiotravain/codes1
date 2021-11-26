document.addEventListener('DOMContentLoaded',function() {
    botao = document.querySelector('.hamburguer')
    falso2 = document.querySelector('.falso_body2')
    falso1 = document.querySelectorAll('main')[0]
    clone = falso2.cloneNode(true)
    aberto = false
    
    botao.addEventListener('click', function(event){
        if (aberto == false){
        falso2.style.display = 'flex'
        falso2.style.position = 'fixed'
        falso2.style.top= '1px'
        aberto = true
    
        }
    })
     
    falso1.addEventListener('click',function(event){
        if (aberto== true){
        falso2.style.display = 'none'
        aberto = false
        }

    })
})