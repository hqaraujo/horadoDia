function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    //var horas = 15
    
    
    msg.innerHTML = `Agora são ${horas} horas.`
    if (horas >= 0 && horas < 12) {
        //bom dia
        img.src = './img.png/dia1.png'
        document.body.style.background ='#EC9072'
    } else if (horas >= 12 && horas <= 18) {
        // boa tarde
        img.src = './img.png/tarde2.png'
        document.body.style.background ='#FCC66D'
    } else {
        //boa noite
        img.src = './img.png/noite3.png'
        document.body.style.background = '#11223B'
    }
}
