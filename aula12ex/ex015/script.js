function check(){
    var data = new Date()
    var year = data.getFullYear()
    var formyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (formyear.value.length == 0 || Number(formyear.value) > year){
        window.alert('[ERROR] Check the data and try again!')
    }else {
        //window.alert('tudo ok')
        var formsex = document.getElementsByName('radsex')
        var age = year - Number(formyear.value)
        //res.innerHTML = `Calculated age: ${age} years old`
        var gender = ''
        //img.setAttribute('id', 'foto')
        var img = document.getElementById('image')
        
        if (formsex[0].checked) {
            gender = 'male'
            if(age >=0 && age <10){
                //child
                img.src = 'boy.jpg'
                res.innerHTML = `We detected a ${age} year old ${gender} (child).`
            }else if (age < 21){
               // young 
               img.src = 'youngmale.jpg'
               res.innerHTML = `We detected a ${age} year old ${gender} (young).`
            }else if(age <65){
                //Adult
                img.src = 'adultman.jpg'
                res.innerHTML = `We detected a ${age} year old ${gender} (adult).`
            }else {
                //the best age
                img.src = 'manthebestage.jpg'
                res.innerHTML = `We detected a ${age} year old ${gender} (the best age!).`
            }
        }else if (formsex[1].checked){
            gender = 'female'
            if(age >=0 && age <10){
                //child
                img.src = 'girl.jpg'
                res.innerHTML = `We detected a ${age} year old ${gender} (child).`
            }else if (age < 21){
               // young 
               img.src = 'youngfem.jpg'
               res.innerHTML = `We detected a ${age} year old ${gender} (young).`
            }else if(age <65){
                //Adult
                img.src = 'adultwoman.jpg'
                res.innerHTML = `We detected a ${age} year old ${gender} (adult).`
            }else {
                //the best age
                img.src = 'womanthebestage.jpg'
                res.innerHTML = `We detected a ${age} year old ${gender} (the best age!).`
            }
        }
        res.style.textAlign = 'center'
        //res.innerHTML = `We detected a ${age} year old ${gender}`
        res.appendChild(img)
    }

}