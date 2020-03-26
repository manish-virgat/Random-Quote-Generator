const quotes = [
    {
        name:'I have no special talent. I am only passionately curious.',
        quote:'Albert Einstein'
    },
    {
        name:'The future belongs to those who prepare for it today.',
        quote:'Malcolm X'
    },
    {
        name:'Don’t count the days, make the days count.',
        quote:'Muhammad Ali'
    },
    {
        name:'Well done is better than well said.',
        quote:'Benjamin Franklin'
    },
    {
        name:'It always seems impossible until it’s done.',
        quote:'Nelson Mandela'
    },
    {
        name:'It does not matter how slowly you go so long as you do not stop.',
        quote:'Confucius'
    },
    {
        name:'The best way to predict your future is to create it.',
        quote:'Abraham Lincoln'
    },
    {
        name:'We don’t want to tell our dreams. We want to show them.',
        quote:'Cristiano Ronaldo'
    },
    {
        name:'You’ll never find a rainbow if you’re looking down.',
        quote:'Charlie Chaplin'
    },
    {
        name:'Knowing is not enough; we must apply. Willing is not enough; we must do.',
        quote:'Bruce Lee'
    },
    /*{
        name:'author number 6',
        quote:'quote number 6'
    },
    {
        name:'author number 6',
        quote:'quote number 6'
    },
    {
        name:'author number 6',
        quote:'quote number 6'
    },
    {
        name:'author number 6',
        quote:'quote number 6'
    },
    {
        name:'author number 6',
        quote:'quote number 6'
    }*/
]
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');
quoteBtn.addEventListener('click', displayQuote);

function displayQuote()
{
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
