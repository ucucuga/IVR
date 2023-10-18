import React, { useState, useContext } from "react";
import { ContainerBody, Text, Answer } from "./style.js"
import flag from "./CTF_flag.png"
import {useSound} from 'use-sound';
import pipe from './metal-pipe-clang.mp3';
import { stop } from 'use-sound';

const Test = () => {
  const [answers, setAnswers] = useState([]);
  const [active, setActive] = useState(false);
  const [play, { sound, stop}] = useSound(pipe);

  const handleSound = () => {
    stop();
    play();
  };
  const questions = [
    {
      question: "Любишь работать с чем-нибудь красивым?",
      options: ["Да,внешний вид важен и стараюсь делать все покрасивше ", "Особо не играет роли", "Главное не внешний вид а суть!!!"]
    },
    {
      question: "Как относишься к Linux?",
      options: ["Нормально, могу использовать при необходимости", "Мне особо не хочется возиться с этим", "Непосредственно."]
    },
    {
      question: "Любишь ли математические алгоритмы?",
      options: ["Брух", "Да, прикольная вещь", "Не особо, но иногда приходится"]
    },
    {
      question: "Интересуешься уязвимостями",
      options: ["Да, даже попробовал бы на собственных сайтах", "Не особо", "Да, прикольно еще почитать статьи про то, как нашли новые"]
    },
    {
      question: "Интересно ли спрятать пасхалки в свои фотки в соц.сетях?",
      options: ["Не надо, спасибо", "Кайф имеет", "Трата времени"]
    }
  ];

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const getMostSelectedOption = () => {
    const optionCount = [0, 0, 0];
    answers.forEach((index) => {
      optionCount[index]++;
    });
    const mostSelectedIndex = optionCount.indexOf(Math.max(...optionCount));
    let ans = ""
    if (mostSelectedIndex === 0 ) {
      ans = "О, да ты вэбер! Тебе вероятно понравится работать с уязвимостями сайтов, а также поизучать инъекции! В CTF как раз есть категория WEB"
    } else if (mostSelectedIndex === 1) {
      ans = "Тебе скорее всего зайдет категория криптография/стеганография. Тебе интересно было бы расшифровывать шифры  Необходимо хорошо понимать математику, но также нужно знать много приложений для дешифровки."
    } else if (mostSelectedIndex === 2) {
      ans = "Уффф, твой путь будет не прост, так как ты ревёрсер. Тебя больше интересует работа с железом. И ты либо стал, либо станешь заядлым линуксером. Будь осторожен!!! Есть риск потолстеть, облысеть и начать ругаться на людей добрых."
    }
    return <Answer>{ans}</Answer>;
  };

  return (
    <ContainerBody style={{backgroundImage: `url(${flag})`}} >
      <h1>Кто ты в CTF?</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <Text>{question.question}</Text>

          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                type="checkbox"
                checked={answers[index] === optionIndex}
                onChange={() => handleAnswerSelect(index, optionIndex)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}
      {active === true && getMostSelectedOption()}
      <button onClick={() => {setActive(!active); handleSound()} } className="Button2">
        Показать результаты
      </button>
    </ContainerBody>
  );
};

export default Test;