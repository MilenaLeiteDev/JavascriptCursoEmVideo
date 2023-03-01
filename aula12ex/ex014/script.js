//alert('Hello!')
function toLoad() {

var msg = document.getElementById('msg')
var img = document.getElementById('image')
var data = new Date()
//var hour = data.getHours()
var hour = 21
msg.innerHTML = `Now it is ${hour}h.`
if (hour >= 0 && hour < 12){
    msg.innerHTML+='Good morning!'
    img.src = 'morning.jpg'
    document.body.style.background = 'rgba(255, 145, 0, 0.657)'
} else if (hour >= 12 && hour <= 18){
    msg.innerHTML+='Good afternoon!'
    img.src = 'afternoon.jpg'
    document.body.style.background = 'rgb(39, 167, 226)'
}else {
    msg.innerHTML+='Good night!'
    img.src = 'night.jpg'
    document.body.style.background = 'rgb(80, 79, 78)'
}

}