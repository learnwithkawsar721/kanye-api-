const loadQuots = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = (data) => {
    // console.log(data);
    const quoutscontainer = document.getElementById('quouts');
    quoutscontainer.innerText = data.quote
}