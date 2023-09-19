// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Parts from '../Parts/Parts';




const Home = () => {
    const [parts, setParts] = useState([]);
    const [selectPart, setSelectPart] = useState([]);
    const [hoursRemaining, setHoursRemaining] = useState(20);
    const [totalCredit, setTotalCredit] = useState(0);

    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setParts(data))
    }, [])
    const handleChoiceCart = (part) => {
        const isExist = selectPart.find(item => item.course_title == part.course_title)
        if(isExist) {
            return alert("You select this card")
        }
        else{
            setSelectPart([...selectPart, part])
        } 
        const updateHoursRemaining = hoursRemaining - part.credit_hours;

        if(updateHoursRemaining >= 0){
            setSelectPart([...selectPart, part]);
            setHoursRemaining(updateHoursRemaining);
        }
        else{
            alert("You don't have enough hours for this course");
        }

        
    }
    return (
        <div className='flex gap-10'>
        <div className='grid grid-cols-3 gap-4'>
            {
                parts.map((part, idx) => (
                    <div key={idx} className="p-5 bg-base-100 shadow-xl w-80 ">
                                <img className='' src={part.img} alt="" />
                                <div className="card-body pt-5">
                                <h2 className="font-bold text-lg">{part.course_title}</h2>
                                <p className="text-gray-500 text-xs my-2">
                                    {part.course_info}
                                </p>
                                
                                <div className="flex justify-between gap-3 mt-3 mb-3 ">
                                    <div className='flex gap-2'>
                                        <p>$</p>
                                        <h1 >Price: {part.price}</h1>
                                    </div>
                                    <div>
                                        
                                        <h1>Credit: {part.credit_hours} hours</h1>
                                    </div>
                                </div>
                                </div>
                                <button onClick={() => handleChoiceCart(part)} className="rounded-lg bg-blue-400 hover:bg-blue-600 text-white my-1 w-[280px] h-12 text-xl shadow-md">
                                    Select
                                </button>
                            </div>

                ))
            }
        </div>
        
            <div className="shadow-xl p-12 h-96">

            <h1 className="text-[#2F80ED] font-bold text-lg">Credit Hour Remaining {hoursRemaining} hr </h1>
            <hr />
            <div className="mt-5 mb-5">
                <h1 className="font-bold">Course Name</h1>
                <Parts selectPart={selectPart}></Parts>
            </div>
            <hr />
            <h1>Total Credit Hour : {totalCredit}</h1>
        </div>
        </div>
            
    );
};


export default Home;