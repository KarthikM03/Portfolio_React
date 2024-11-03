// import Logo from '../logo.svg'
import HTML from './Icons/html-icon.svg'
import CSS from './Icons/css-icon.svg'
import C from './Icons/c-program-icon.svg'
import Python from './Icons/python-programming-language-icon.svg'
import Git from './Icons/git-icon.svg'
import Github from './Icons/github-icon.svg'
import Javascript from './Icons/javascript-programming-language-icon.svg'
import react from './Icons/react-js-icon.svg'
import tailwind from './Icons/tailwind-css-icon.svg'
import Vs from './Icons/visual-studio-code-icon.svg'
import quiz from './quiz.png'
import Decimal from './Decimal_Conveter.png'
import Pixel from './Pixel_Art.png'
import word from './word_guess.png'


let Data = {
    name:'Karthik',
    Skills:[
        {name:'Programming Language',skill:[{name:'C',img:C},{name:'Python',img:Python},{name:'Java Script',img:Javascript}]},
        {name:'Web Development',skill:[{name:'HTML5',img:HTML},{name:'CSS',img:CSS},{name:'Java Script',img:Javascript},{name:'Tailwind',img:tailwind},{name:'React Js',img:react}]},
        {name:'Tools and Platforms', skill:[{name:'Vs Code',img:Vs},{name:'Git',img:Git},{name:'Github',img:Github}]}
    ],
    projects:[
        {name:'Quiz',skills:['Javascript','React Js','HTML','Tailwind CSS'],img:quiz,live:'https://quiz-game-ochre-nine.vercel.app/',code:'https://github.com/KarthikM03/Quiz-with-React',desc:"This interactive quiz game, built using JavaScript, React JS, Tailwind CSS, and HTML, offers an engaging way to test your knowledge on various topics. Featuring real-time feedback, dynamic score tracking, and seamless transitions between questions, it provides a smooth and responsive user experience. The use of React's component-based architecture ensures easy customization and scalability, making it perfect for both educational and entertainment purposes"},
        {name:'Word Guess',skills:['Javascript','React Js','HTML','Tailwind CSS'],img:word,live:'https://word-guess-tau.vercel.app/',code:'https://github.com/KarthikM03/Word_Guess',desc:"This interactive word guessing game is crafted using JavaScript, React JS, HTML, and Tailwind CSS. It challenges players to guess a word based on clues, providing instant feedback and tracking scores in real-time. The game's sleek and responsive design, powered by Tailwind CSS, ensures a visually appealing and engaging user experience. Perfect for both educational and entertainment purposes, it showcases the power of modern web technologies in creating fun and interactive applications."},
        {name:'Decimal Converter',skills:['Javascript','CSS','HTML'],img:Decimal,live:'https://karthikm03.github.io/Decimal-Converter/',code:'https://github.com/KarthikM03/Decimal-Converter',desc:"This decimal converter, built with JavaScript, HTML, and CSS, allows users to easily convert numbers between different decimal bases. The intuitive interface ensures a smooth user experience, while the underlying JavaScript handles the complex logic for accurate conversions. CSS enhances the visual appeal, making the tool not only functional but also user-friendly and visually engaging. Perfect for educational purposes, quick calculations, and demonstrating the power of web development technologies."},
        {name:'Pixel Art',skills:['Javascript','CSS','HTML'],img:Pixel,live:'https://karthikm03.github.io/Pixel-Art-2.O/',code:'https://github.com/KarthikM03/Pixel-Art-2.O',desc:"This pixel art tool, developed using JavaScript, HTML, and CSS, allows users to create and customize pixel art designs. With an intuitive grid layout, users can select colors and fill cells to bring their pixel creations to life. The responsive and user-friendly interface ensures an enjoyable experience, showcasing the versatility and creativity enabled by these web technologies. Perfect for both beginners and enthusiasts, this tool highlights the fun and simplicity of creating digital art."},
    ]
}
export default Data