import { useEffect, useState } from "react";

const Details = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Details;