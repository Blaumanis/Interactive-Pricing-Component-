const rangeInput = document.getElementById('range')
const toggler = document.getElementById('billing-toggler')

const price = document.querySelector('.price strong')
const month = document.querySelector('.price small')
const pageviews = document.querySelector('.pageviews span')

function togglerFunc(){
    if(rangeInput.value == 1){
        price.innerText = "8.00"
        month.innerText = "/month"
        pageviews.innerText = "10K"
    }else if(rangeInput.value == 2){
        price.innerText = "12.00"
        month.innerText = "/month"
        pageviews.innerText = "50K"
    }else if(rangeInput.value == 3){
        price.innerText = "16.00"
        month.innerText = "/month"
        pageviews.innerText = "100K"
    }else if(rangeInput.value == 4){
        price.innerText = "24.00"
        month.innerText = "/month"
        pageviews.innerText = "500K"
    }else if(rangeInput.value == 5){
        price.innerText = "36.00"
        month.innerText = "/month"
        pageviews.innerText = "1M"
    }

    toggler.checked ?  
    (price.innerText = parseFloat(price.innerText * 12 - ((price.innerText * 12) * 0.25)).toFixed(2), month.innerText = "/year") :
    (price.innerText = price.innerText, month.innerText = month.innerText)
}

rangeInput.addEventListener('input', togglerFunc)
toggler.addEventListener('input', togglerFunc)

