const quotes = [
    {
        quote:'I have no special talent. I am only passionately curious.',
        name:'Albert Einstein'
    },
    {
        quote:'The future belongs to those who prepare for it today.',
        name:'Malcolm X'
    },
    {
        quote:'Don’t count the days, make the days count.',
        name:'Muhammad Ali'
    },
    {
        quote:'Well done is better than well said.',
        name:'Benjamin Franklin'
    },
    {
        quote:'It always seems impossible until it’s done.',
        name:'Nelson Mandela'
    },
    {
        quote:'It does not matter how slowly you go so long as you do not stop.',
        name:'Confucius'
    },
    {
        quote:'The best way to predict your future is to create it.',
        name:'Abraham Lincoln'
    },
    {
        quote:'We don’t want to tell our dreams. We want to show them.',
        name:'Cristiano Ronaldo'
    },
    {
        quote:'You’ll never find a rainbow if you’re looking down.',
        name:'Charlie Chaplin'
    },
    {
        quote:'Knowing is not enough; we must apply. Willing is not enough; we must do.',
        name:'Bruce Lee'
    },
    {
        quote:'Life is 10% what happens to us and 90% how we react to it.',
        name:'Dennis P. Kimbro'
    },
    {
        quote:'Live each day as if your life had just begun.',
        name:'Johann Wolfgang Von Goethe'
    },
    {
        quote:'If not us, who? If not now, when?',
        name:'John F. Kennedy'
    },
    {
        quote:'Don’t worry about failures, worry about the chances you miss when you don’t even try.',
        name:'Jack Canfield'
    },
    {
        quote:'Speak less than you know; have more than you show.',
        name:'William Shakespeare'
    },
    {
        quote:'The journey of a thousand miles begins with one step.',
        name:'Lao Tzu'
    },
    {
        quote:'I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.',
        name:'Albert Einstein'
    },
    {
        quote:'We become what we think about.',
        name:'Earl Nightingale'
    },
    /*{
        quote:'Quote Here',
        name:'Author Name'
    },
    {
        quote:'Quote Here',
        name:'Author Name'
    },
    {
        quote:'Quote Here',
        name:'Author Name'
    },
    {
        quote:'Quote Here',
        name:'Author Name'
    },
    {
        quote:'Quote Here',
        name:'Author Name'
    },
    {
        quote:'Quote Here',
        name:'Author Name'
    },*/
]
const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');
quoteBtn.addEventListener('click', displayQuote);

function displayQuote()
{
    let number = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[number].quote;
    quoteAuthor.innerHTML = quotes[number].name;
}
