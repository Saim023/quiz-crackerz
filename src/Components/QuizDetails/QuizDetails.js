import React from 'react';
import './QuizDetails.css';

const QuizDetails = ({ qz }) => {
    const { id, name, question, options } = qz;
    // console.log(qz)

    return (
        <div>
            <h3 className='quiz-question'>{ } {question}</h3>
            <div className='quiz-options'>
                {
                    options.map(option => <div>
                        <input type="radio" name={id} />{option}
                    </div>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;