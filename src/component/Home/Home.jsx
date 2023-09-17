// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Parts from '../Parts/Parts';



const Home = () => {
    const [home, setHome] = useState([]);

    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setHome(data))
    }, [])
    return (
        home.map((parts, idx) => <Parts key={idx} parts={parts}></Parts>)
    );
};


export default Home;