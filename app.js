const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height <= 0 || height === '' || isNaN(height)) {
        result.innerText = "Please enter a correct Height"
    }
    else if(weight <= 0 || weight === '' || isNaN(weight)) {
        result.innerText = "Please enter a correct Weight"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if(bmi < 18.6) {
            result.innerText = `${bmi} Under Weight`
        }
        else if(bmi <= 24.9) {
            result.innerText = `${bmi} Normal Range`
        }
        else {
            result.innerText = `${bmi} Overweight`
        }
    }
})