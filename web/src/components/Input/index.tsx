import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>
{
    label: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) =>
{
    return(
        <div id="Input">
            <div className="input-block">
                <label htmlFor={name}>{label}</label>
                <input type="text" id={name} {...rest} />
            </div>
        </div>
    );
}

export default Input;