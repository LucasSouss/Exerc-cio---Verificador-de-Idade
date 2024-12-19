function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //kid
                img.setAttribute('src', 'image/boy-10.png') 
            } else if (idade < 25) {
                    //teenager
                img.setAttribute('src','image/teenager-boy.png')
            } else if (idade < 40) {
                //adult
                img.setAttribute('src', 'image/man-25-40.png')
            } else {
                //old
                img.setAttribute('src', 'image/old-man.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //kid
                img.setAttribute('src', 'no image')
            } else if (idade < 25) {
                //teenager
                img.setAttribute('src', 'image/teenager-waman.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'image/woman-25-40.png')
            } else {
                // idoso
                img.setAttribute('src', 'image/old-woman.png')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}