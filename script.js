const post = document.getElementsByClassName('post')
let p = post.length
let i = 0
const b = document.querySelectorAll('.box div')

setInterval(next, 2000)
function next () {
  if (i === 0) {
    b[p - 1].style = ''
    post[p - 1].style = 'z-index:1;left:-600px;'

    i++
    b[i - 1].style = 'background-color:aquamarine'
    post[i - 1].style = 'left:0;z-index:3'

    b[i].style = ''
    post[i].style = 'z-index:1;left:600px;'
  } else if (i > 0 && i < p - 1) {
    console.log(i)
    b[i - 1].style = ''
    post[i - 1].style = 'z-index:1;left:-600px'

    b[i].style = 'background-color:aquamarine'
    post[i].style = 'left:0;z-index:3'

    b[i + 1].style = ''
    post[i + 1].style = 'z-index:1;left:600px'
    i++
  } else if (i === p - 1) {
    console.log(i)
    b[i].style = 'background-color:aquamarine'
    post[i].style = 'left:0;z-index:3'

    b[i - 1].style = ''
    post[i - 1].style = 'z-index:1;left:-600px'

    i = 0

    b[i].style = ''
    post[i].style = 'z-index:1;left:600px'
    console.log(i)
  }
}

// if (i === 0) {
//     i = 1
//     post[0].style = 'z-index:1;left:-600px;z-index:1'
//     post[i].style = 'left:0;z-index:3'
//     post[2].style = 'z-index:1;left:600px;z-index:1'
//     b[i].style = 'background-color:aquamarine'
// } else if (i === 1) {
//     i = 2
//     post[i].style = 'left:0;z-index:3'
//     post[0].style = 'z-index:1;left:600px;z-index:1'
//     post[1].style = 'z-index:1;left:-600px;z-index:1'
//     b[i].style = 'background-color:aquamarine'
// } else if (i === 2) {
//     i = 0
//     post[i].style = 'left:0;z-index:3'
//     post[2].style = 'z-index:1;left:-600px;z-index:1'
//     post[1].style = 'z-index:1;left:600px;z-index:1'
// }
