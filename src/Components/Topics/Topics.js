import React from 'react';
import './Topics.css';

const Topics = ({ topic }) => {
    const { id, logo, name, total } = topic;
    console.log(topic)
    return (
        <div className='topics'>
            <div className='topic-logo'>
                <img src={logo} alt="" />
                <div>
                    <h1>{name}</h1>
                    <p>Total Quiz: {total}</p>
                    <button className='topic-btn'>Start Quiz</button>
                </div>
            </div>

        </div>
    );
};

export default Topics;