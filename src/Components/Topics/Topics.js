import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css';

const Topics = ({ topic, }) => {
    const { id, logo, name, total } = topic;

    return (
        <div className='topics'>
            <div className='topic-logo'>
                <img src={logo} alt="" />
                <div>
                    <h1>{name}</h1>
                    <p>Total Quiz: {total}</p>
                    <Link to={`/quiz/${id}`}>

                        <button className='topic-btn'>Start Quiz</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Topics;