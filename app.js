let container = document.querySelector('.container');

container.addEventListener('click', (e) => {

    if (e.target.classList.contains('Button1')) {
        let one = e.target.closest('.maxContainer')
        let two = one.querySelector('b')
        let ok = two.classList.toggle('line-through')
        if (ok) {

            two.style.textDecoration = 'line-through';
        } else {
            two.style.textDecoration = 'none';

        }

    }

})

let lowerContainer = document.querySelector('.lowerContainer')
let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let ok = document.querySelector('.ok')
let arr = [
    {
        name: 'maaz',
        email: `wwwmaazahmed1@gmail.com`
    }
]

function objec(ok) {
    lowerContainer.innerHTML = ''
    // arr.length = 0
    ok.map(e => {

        let { name, email } = e
        // let newElement = document.createElement('div');
        let maxContainer = document.createElement('div')
        maxContainer.className = 'maxContainer';
        maxContainer.innerHTML = `   <div class="image">
        <img src="Screenshot 2026-02-17 003549.png" alt="mnmvf">
        </div>
        <div class="text">
        <h3>${name}</h3>
        <p><b class = lineThroughing>${email}</b></p>
        </div>`


        let secNewCon = document.createElement('div')
        let button = document.createElement('button');
        let button1 = document.createElement('button')
        button1.className = 'Button1'
        button1.innerHTML = '✍️'
        button.className = `Button2`;
        button.innerHTML = '⚔️'
        secNewCon.append(button, button1)
        secNewCon.className = 'Btn'
        maxContainer.append(secNewCon)
        button.addEventListener('click', () => {
            deleting(name)
        })

        lowerContainer.append(maxContainer)
    })
}
function secBtn(e) {


}

objec(arr)
function Adding(ok) {
    if (input1.value.trim() === '') {
         Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter Something First!",
        });
        return
    }

    let okk = {
        name: input1.value,
        email: input2.value,
    }
    lowerContainer.innerHTML = ''
    arr.unshift(okk)
    objec(arr)
    input1.value = '';
    input2.value = '';
}
ok.addEventListener('click', Adding)

function filtering() {
    let triger = input1.value
    let okkk = arr.filter(e => {
        return e.name.toLowerCase().includes(triger.toLowerCase()) ||
            e.email.toLowerCase().includes(triger.toLowerCase())
    })
    objec(okkk)
}
input1.addEventListener('input', filtering)

function deleting(id) {
    let delet = arr = arr.filter(e => {
        return e.name !== id
    })
    objec(delet)
}
// let Button2 = document.querySelector('.Button2')
// // Button2.addEventListener('click',deleting(arr.name))