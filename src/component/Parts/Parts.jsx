
// eslint-disable-next-line react/prop-types
const Parts = ({selectPart}) => {
    return (
        <div>
            {
                // eslint-disable-next-line react/prop-types
                selectPart.map(part => (
                    <li key={part.course_title}>
                        {part.course_title}
                    </li>
                ))
            }
        </div>
        
    );
};

export default Parts;