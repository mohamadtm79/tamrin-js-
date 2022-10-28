let _li = document.querySelectorAll('li');
let _search = document.getElementById('search').addEventListener('input',(e)=>{
    temp = e.target.value

    console.log(temp);  
    _li.forEach((item)=>{
        item.style.display = 'none'
        _text = item.textContent
        _text = _text.substring(0, temp.length)
        if(_text == temp){
            item.style.display = 'block'
            item.innerHTML=`<mark>${_text}</mark>`+item.textContent.substring(temp.length, (item.textContent.le))
            if(temp == null || temp == "" || temp == " "){
                item.style.display = 'none'
            }
        }
    })
})
