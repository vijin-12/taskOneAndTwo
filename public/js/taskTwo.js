let btnSubmit = document.getElementById('btn-submit')
let render = document.getElementById('render')

btnSubmit.addEventListener('click', (ele) => {
    let string1 = document.getElementById('textFieldOne').value;
    let string2 = document.getElementById('textFieldTwo').value;
    let combinedSting = combineString(string1, string2) 
    render.innerHTML = `
    <div class="result">
        <h4>output:  ${combinedSting}</h4>
    </div>
    `
})


function combineString(string1, string2) {

    let length = string1.length >= string2.length ? string1.length : string2.length
    let output = ''

    for(i=0; i < length; i++){
        if(i < string1.length) {
            output += string1[i]
        }

        if(i < string2.length) {
            output += string2[i]
        }
    }
    return output
}

