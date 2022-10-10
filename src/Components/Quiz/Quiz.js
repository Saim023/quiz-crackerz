import React from 'react';

const Quiz = ({ quiz }) => {
    const { id, name, img, total } = quiz;
    console.log(quiz)
    return (
        <div>
            <h1>Quiz Area:</h1>
            <p>Id: {id}</p>
            <p>Topic: {name}</p>
            <p>Total Quiz: {total}</p>
        </div>
    );
};

export default Quiz;