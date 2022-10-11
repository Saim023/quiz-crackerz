import React, { useState } from 'react';
import './QuizDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid';

const QuizDetails = ({ qz }) => {
    const { id, name, question, options, correctAnswer } = qz;
    // console.log(correctAnswer)

    const handleAnswer = (e) => {

        // console.log(e)


        if (e === correctAnswer) {
            toast("Congratulations!! Your answer is correct!!")
        }
        else {
            toast('Sorry!! Your answer is wrong!!')
        }
    }

    const handleCorrectAnswer = () => {
        toast(`Correct answer is : ${correctAnswer}`)
        console.log(correctAnswer)
    }

    return (
        <div>
            <div className='question-container'>
                <div>
                    <h3 className='quiz-question'>{ } {question.slice(3, -4)}</h3>
                </div>
                <div>
                    <EyeIcon className="question-icon" onClick={() => handleCorrectAnswer()} ></EyeIcon>

                </div>

            </div>
            <div className='quiz-options'>
                {
                    options.map(option => <div>
                        <input onClick={(e) => handleAnswer(e.target.value)} type="radio" name={id} value={option} />{option}
                    </div>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuizDetails;