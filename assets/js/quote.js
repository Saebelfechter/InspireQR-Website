const quotes = [{
    quote: 'It is hard to fail but it is worse never to have tried to succeed.', 
    writer: '-Theodore Roosevelt'
},
{
    quote: 'That which does not kill us makes us stronger.', 
    writer: '-Friedrich Nietzsche'
},
{
    quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', 
    writer: '-Winston Churchill'
},
{
    quote: 'My mission in life is not merely to survive, but to thrive.', 
    writer: '-Maya Angelou'
},
{
    quote: 'Live each day as if your life had just begun.', 
    writer: '-Johann Wolfgang Von Goethe'
},
{
    quote: 'The journey of a thousand miles begins with one step.', 
    writer: '-Lao Tzu'
},
{
    quote: 'If I cannot do great things, I can do small things in a great way.', 
    writer: '-Martin Luther King Jr.'
},
{
    quote: 'Inspiration comes from within yourself. One has to be positive. When you\’re positive, good things happen.', 
    writer: '-Deep Roy'
},
{
    quote: 'The best and most beautiful things in the world cannot be seen or even touched – they must be felt with the heart.', 
    writer: '-Helen Keller'
},
{
    quote: 'If you don\’t stand for something you will fall for anything.', 
    writer: '-Malcolm X'
},
{
    quote: 'Do, or do not. There is no try.', 
    writer: '-Yoda'
},
{
    quote: 'Let us sacrifice our today so that our children can have a better tomorrow.', 
    writer: '-A. P. J. Abdul Kalam'
},
{
    quote: 'Keep your face always toward the sunshine - and shadows will fall behind you.', 
    writer: '-Walt Whitman'
},
{
    quote: 'Coming together is a beginning; keeping together is progress; working together is success.', 
    writer: '-Edward Everett Hale'
},
{
    quote: 'There is nothing on this earth more to be prized than true friendship.', 
    writer: '-Thomas Aquinas'
},
{
    quote: 'The beginning is the most important part of the work.', 
    writer: '-Plato'
},
{
    quote: 'Life is not a problem to be solved, but a reality to be experienced.', 
    writer: '-Soren Kierkegaard'
},
{
    quote: 'I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.', 
    writer: '-Muriel Strode'
},
{
    quote: 'I have no special talent. I am only passionately curious.', 
    writer: '-Albert Einstein'
},
{
    quote: 'Those who dare to fail miserably can achieve greatly.', 
    writer: '-John F. Kennedy'
},
{
    quote: 'I think, therefore I am.', 
    writer: '-René Descartes'
},
{
    quote: 'All I was doing was trying to get home from work.', 
    writer: '-Rosa Parks'
},
{
    quote: 'Beauty is in the eye of the beholder.', 
    writer: '-Margaret Wolfe Hungerford'
},
{
    quote: 'It\'s not who I am underneath, but what I do that defines me.', 
    writer: '-Bruce Wayne'
},
{
    quote: 'There is nothing impossible to they who will try.', 
    writer: '-Alexander the Great'
},
{
    quote: 'You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.', 
    writer: '-Duchess Meghan'
},
{
    quote: 'For me, becoming isn\’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn\'t end.', 
    writer: '-Michelle Obama'
},
{
    quote: 'Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.', 
    writer: '-Lady Gaga'
},
{
    quote: 'All you need is the plan, the road map, and the courage to press on to your destination.', 
    writer: '-Earl Nightingale'
},
{
    quote: 'The only way to do great work is to love what you do.',
    writer: '-Steve Jobs'
},
{
    quote: 'Believe you can and you’re halfway there.',
    writer: '-Theodore Roosevelt'
},
{
    quote: 'Your time is limited, don’t waste it living someone else’s life.',
    writer: '-Steve Jobs'
},
{
    quote: 'Don’t count the days, make the days count.',
    writer: '-Muhammad Ali'
},
{
    quote: 'Success is not in what you have, but who you are.',
    writer: '-Bo Bennett'
},
{
    quote: 'Act as if what you do makes a difference. It does.',
    writer: '-William James'
},
{
    quote: 'You don’t have to be rich to sparkle.',
    writer: '-Brighton Mandy Hale'
},
{
    quote: 'Dream big, work hard, stay focused, and surround yourself with good people.',
    writer: '-Anonymous'
},
{
    quote: 'The best way to predict the future is to invent it.',
    writer: '-Alan Kay'
},
{
    quote: 'Life is what happens when you’re busy making other plans.',
    writer: '-John Lennon'
},
{
    quote: 'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
    writer: '-Christian D. Larson'
},
{
    quote: 'Don’t watch the clock; do what it does. Keep going.',
    writer: '-Sam Levenson'
},
{
    quote: 'Don’t cry because it’s over, smile because it happened.',
    writer: '-Dr. Seuss'
},
{
    quote: 'Life is 10% what happens to us and 90% how we react to it.',
    writer: '-Charles R. Swindoll'
},
{
    quote: 'The purpose of our lives is to be happy.',
    writer: '-Dalai Lama'
},
{
    quote: 'You are never too old to set another goal or to dream a new dream.',
    writer: '-C.S. Lewis'
},
{
    quote: 'The future belongs to those who believe in the beauty of their dreams.',
    writer: '-Eleanor Roosevelt'
},
{
    quote: 'The best preparation for tomorrow is doing your best today.',
    writer: '-H. Jackson Brown Jr.'
},
{
    quote: 'Life is really simple, but we insist on making it complicated.',
    writer: '-Confucius'
},
{
    quote: 'The only limit to our realization of tomorrow will be our doubts of today.',
    writer: '-Franklin D. Roosevelt'
}
]

let btn = document.querySelector("#Qbtn")
let quote = document.querySelector(".quote")
let writer = document.querySelector(".writer")

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})