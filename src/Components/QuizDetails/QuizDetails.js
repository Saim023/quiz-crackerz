import React, { useState } from 'react';
import './QuizDetails.css';

const QuizDetails = ({ qz }) => {
    const { id, name, question, options, correctAnswer } = qz;
    // console.log(correctAnswer)

    const handleAnswer = (e) => {

        console.log(e)


        if (e === correctAnswer) {
            alert("Congratulations!! Your answer is correct!!")
        }
        else {
            alert('Sorry!! Your answer is wrong!!')
        }
    }

    return (
        <div>
            <h3 className='quiz-question'>{ } {question}</h3>
            <div className='quiz-options'>
                {
                    options.map(option => <div>
                        <input onClick={(e) => handleAnswer(e.target.value)} type="radio" name={id} value={option} />{option}
                    </div>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;