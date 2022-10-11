import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='question-ans'>
                <h2>What is  the purpose of react router?</h2>
                <p>Answer: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='question-ans'>
                <h2>How does context api work??</h2>
                <p>Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='question-ans'>
                <h2>How useRef works in react??</h2>
                <p>Answer: The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does as well as to access a DOM element directly. useRef only returns one item. It returns an Object called current. It has re-rendering feature. Initial rendering of a component is done when a component has its pristine, undiluted state values, just like the Card component, its initial render is when the mouseover event is yet to be triggered. Re-rendering of a component is done in a component when one of its local states or props have been updated, this causes the component to call its render method to display the latest elements based on the state update.</p>
            </div>
        </div>
    );
};

export default Blogs;