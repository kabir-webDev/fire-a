import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const PracticeTodo = () => {



    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
        console.log(res);
        
    })
    })

    

    return (
        <div>
            pokam
        </div>
    );
};

export default PracticeTodo;