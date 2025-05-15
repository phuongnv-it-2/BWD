let nextbtn = document.querySelector('.nextbtn')
let prevbtn = document.querySelector('.prevbtn')

nextbtn.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prevbtn.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})