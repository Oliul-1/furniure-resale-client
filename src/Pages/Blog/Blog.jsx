import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 m-auto'>
            <div className="card my-2 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center">What are the different ways to manage a state in a React application?</h2>
                    <p>Global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>
                </div>
            </div>

            <div className="card my-2 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            
            <div className="card my-2 border-slate-800 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>

            <div className="card my-2 border-slate-800 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p>Vue provides higher ability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;