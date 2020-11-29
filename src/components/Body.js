import React from "react";


// export default props => {
export const Body = props => {
    return (
        <div>
            <p> Let's do it!</p>
            <p>{props.text}</p>
            <p>{props.myFunc(88, 11)}</p>
        </div>
    );
};

// export default Body;

export const Body2 = () => (
    <div>
        <div>Hi</div>

    </div>
)