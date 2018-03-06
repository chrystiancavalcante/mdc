relogio = () => {
    var data = new Date()
    var hor  = data.getHours()
    var min  = data.getMinutes()
    var seg  = data.getSeconds()
    if(hor < 10){
    hor="0"+hor
    }
    if(min < 10){
    min="0"+min
    }
    if(seg < 10){
    seg="0"+seg
    }
    var horas = hor + ":" + min + ":" + seg
    document.getElementById("horas").value=horas
    }
    var timer = setInterval(relogio, 1000)

    for (var i = 1; i < 21; i++){
        console.log(i)
    }