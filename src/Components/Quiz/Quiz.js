import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz.data)
    return (
        <div>
            <h1>Quiz of {quiz.data.name}</h1>
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