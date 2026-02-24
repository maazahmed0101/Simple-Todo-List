let ListContainer = document.querySelector('.ListContainer')
let addBtn = document.querySelector('.addBtn')
let addInput = document.querySelector('#addInput')

const list = [
]


function randerList(arr) {
    ListContainer.innerHTML = ''
    arr.map(item => {
        let { id, text } = item
        let divelem = document.createElement('div');
        divelem.className = 'list'
        divelem.innerHTML = `
    <p>${text}</p>
    `
    let buttonElem = document.createElement('button');
    buttonElem.innerText = '❌'
    divelem.appendChild (buttonElem)
    divelem.onclick = ()=>{
        handleRemoveList(id)
    } 
    ListContainer.append(divelem)
    })
}
randerList(list)
function handleAddList(){
    if(addInput.value.trim()===''){
        alert('pleace enter something first')
    }else{ 
    let obj = {
        id: Date.now(),
        text:addInput.value
    }
    list.unshift (obj)
    randerList(list)
    addInput.value = ''
}
}
function handleRemoveList(id){
    const filtredlist = list.filter(obj =>{
        return obj.id !== id
    })
    list.length = 0;
    list.push(...filtredlist)
    randerList(filtredlist)
}
addBtn.addEventListener('click',handleAddList)


// let arr = [1,3,4]
// // arr.length = 0
// arr = []
// console.log(arr);

// let a = []
// let b = [2,4,6]
// let ok = a.push(...b)
// console.log(ok);
