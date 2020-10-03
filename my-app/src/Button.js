import React from "react"

// title is for passing an arguement

const Button = ({title}) => (
    <div>
        <button className="button">{title}</button>;
    </div>
);

export default Button;