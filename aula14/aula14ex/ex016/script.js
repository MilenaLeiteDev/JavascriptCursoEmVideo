function counter(){

    let start = document.getElementById('start')
    let end = document.getElementById ('end')
    let skip = document.getElementById('skip')
    let result = document.getElementById('result')
    if(start.value.length == 0 || end.value.length == 0 || skip.value.length == 0){
        result.innerHTML = 'Impossible to count!'
        //window.alert('[ERROR] Check the data and try again!')
       
    }else{
        //window.alert('Ok!')
        result.innerHTML = `Counting: <br> `
        let s = Number(start.value)
        let e = Number(end.value)
        let k = Number(skip.value)
        if(k <= 0){
            window.alert('Invalid skip!Considering skip 1')
            k = 1
        }

        if (s < e){
            //contagem crescente
            for(let c = s; c <= e; c += k) {
            result.innerHTML += `${c} \u{1F449} `
            }
       
        }else{
            //contagem regressiva
            for (let c =s; c >= e; c-=k){
        result.innerHTML += ` ${c} \u{1F449}`
            }    
        }

        result.innerHTML += `\u{1F3C1}`
    }
         
}