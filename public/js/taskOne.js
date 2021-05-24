let btnSubmit = document.getElementById('btn-submit')
let render = document.getElementById('render')

btnSubmit.addEventListener('click', (e) => {
    let text = document.getElementById('textField').value
    let textArray = text.split('')
    let stringOneArr = []
    let stringTwoArr = []

    textArray.forEach((ele, index) => {
       if(index % 2 == 0){
           stringOneArr.push(ele)
       }else(
           stringTwoArr.push(ele)
       )
    })
    srtingOne = stringOneArr.join()
    stringTwo = stringTwoArr.join()
    render.innerHTML = `
    <div class='render' id='render'>
        <h2>Result</h2>
        <div class='stringOne'>
            <h4>string 1 :  ${srtingOne}</h4>
        </div>
        <div class="stringTwo">
            <h4>string 2 :  ${srtingOne}</h4>
        </div>
    </div>
    `
})