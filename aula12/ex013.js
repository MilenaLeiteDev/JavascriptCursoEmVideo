var now = new Date()
var dayOfTheWeek = now.getDay()
/*
Sunday    = 0
Monday    = 1
Tuesday   = 2
Wednesday = 3
Thursday  = 4
Friday    = 5
Saturday  = 6
*/
//dayOfTheWeek = 3
console.log(dayOfTheWeek)

switch(dayOfTheWeek){
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break    
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break 
    default:
        console.log('[ERROR] Invalid day!')
        break
}