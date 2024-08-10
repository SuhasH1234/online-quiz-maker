// QuestionBank.js

const qBank = [
	{
		id: 1,
		question: "What does the '<a>' tag in HTML define?",
		options: ["Paragraph","Link","Image","Header"],
		answer: "Link",
	},
	{
		id: 2,
		question: "Which CSS property is used to change the text color of an element?",
		options: ["font-style","text-color","color","background-color"],
		answer: "color",
	},
	{
		id: 3,
		question: "Which of the following is the correct way to write a comment in JavaScript?",
		options: ["<!-- This is a comment -->","# This is a comment","/* This is a comment */","// This is a comment"],
		answer: "// This is a comment"
	},
	{
		id: 4,
		question: "Which method in React component lifecycle is called after the component is rendered for the first time?",
		options: ["componentWillMount","componentDidMount","componentDidUpdate","componentWillUpdate"],
		answer: "componentDidMount"
	},
	{
		id: 5,
		question: "How do you select an element with the id 'header' in JavaScript?",
		options: ["document.getElementByClassName('header')","document.querySelector('.header')","document.getElementById('header')","document.querySelectorAll('#header')"],
		answer: "document.getElementById('header')"
	},
]

export default qBank;
