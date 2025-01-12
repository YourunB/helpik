const question = document.getElementById('question');
const answer = 	document.getElementById('answer');

const data = [
	{ question: "Противошоковый набор включает следующие лекарственные препараты:", answer: "Эпинефрин" },
	{ question: "Препаратом выбора для оказания первой медицинской помощи при анафилаксии следует считать:", answer: "Эпинефрин" },
	{ question: "Эпинефрин при оказании первой помощи при анафилаксии следует вводить:", answer: "Внутримышечно" },
	{ question: "Анафилаксия может развиться после воздействия на организм:", answer: "Холода" }
];



const getAnswer = () => {
	const chars = question.value.toLowerCase();
	let result = "";
	
	for (let i = 0; i < data.length; i++) {
		if (data[i].question.toLowerCase().includes(chars)) {
			result += `\nВопрос: ${data[i].question}\nОтвет: ${data[i].answer}\n`;
		}
	}

	if (chars.length > 0) answer.innerText = result;
	else answer.innerText = '';
}