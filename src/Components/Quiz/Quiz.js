import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
import './Quiz.css';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz.data)
    return (
        <div>
            <h1 className='quiz-name'>Quiz of {quiz.data.name}</h1>
            <div className='quiz-logo'>
                <img src={quiz.data.logo} alt="" />
            </div>
            {
                Object.values(quiz.data.questions).map(qz => <QuizDetails
                    key={qz.id}
                    qz={qz}
                ></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;