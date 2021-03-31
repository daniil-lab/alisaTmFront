import React, { createRef, useMemo, useRef, useState } from 'react';
import { IconType } from 'react-icons/lib';

import './Input.scss';

interface IInput {
    inputProps?: React.HTMLProps<HTMLInputElement>;
    blockProps?: React.HTMLProps<HTMLDivElement>;
    placeholder?: string;
    name?: string;
    icon?: IconType;
    title: string;
    disabled?: boolean | undefined;
}

const Input: React.FunctionComponent<IInput> = ({
    title,
    name,
    inputProps,
    blockProps,
    placeholder,
    icon: Icon,
    disabled,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    useMemo(() => {
        inputRef.current?.value.length !== 0 ? setShowPlaceholder(false) : setShowPlaceholder(true);
    }, [inputRef.current?.value])

    return (
        <div className="input-block" {...blockProps}>
            <label className="base-input-label">{title}</label>
            <div className="input-container">
                <div className="base-input-placeholder-block">
                    {showPlaceholder && (
                        <label className="base-input-placeholder">
                            {Icon && <Icon className="base-input-placeholder-icon" />}
                        </label>
                    )}
                </div>
                <input
                    ref={inputRef}
                    disabled={disabled}
                    name={name}
                    placeholder={placeholder}
                    className={Icon ? 'base-input padding' : 'base-input'}
                    type="text"
                    {...inputProps}
                />
            </div>
        </div>
    );
};

export default Input;
