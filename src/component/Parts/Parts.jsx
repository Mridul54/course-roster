import PropTypes from 'prop-types';

const Parts = ({parts}) => {
    const {img, course_name, course_detail, price, credit_hours} = parts;
    return (
        <div className=''>
                <div className="card w-80 bg-base-100 shadow-xl ">
                <figure className="px-5 pt-5">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body px-5 pt-5">
                    <h2 className="card-title text-lg font-bold">{course_name}</h2>
                    <p className='text-xs my-2'>{course_detail}</p>
                    <div className="card-actions">
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <p>$</p>
                                <p>Price: {price}</p>
                            </div>
                            <div>
                                
                                <p>Credit: {credit_hours}hr</p>
                            </div>
                        </div>
                    <button className="btn btn-primary bg-blue-500 text-white w-[280px] h-9 rounded-lg my-5">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Parts.PropTypes = {
    parts: PropTypes.object.isRequired
}
export default Parts;