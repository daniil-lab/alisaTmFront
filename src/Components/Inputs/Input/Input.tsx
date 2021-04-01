import React, { createRef, useMemo, useRef, useState } from 'react';
import { IconType } from 'react-icons/lib';

import './Input.scss';

interface IInput {
    inputProps?: React.HTMLProps<HTMLInputElement>;
    blockProps?: React.HTMLProps<HTMLDivElement>;
    iconProps?: React.HTMLProps<SVGAElement>;
    containerProps?: React.HTMLProps<HTMLDivElement>;
    placeholder?: string;
    name?: string;
    icon?: IconType;
    iconRight?: IconType;
    title?: string;
    disabled?: boolean | undefined;
}

const Input: React.FunctionComponent<IInput> = ({
    title,
    name,
    inputProps,
    blockProps,
    placeholder,
    iconProps,
    icon: Icon,
    iconRight: IconRight,
    disabled,
    containerProps,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    useMemo(() => {
        if(inputRef.current) {
            inputRef.current?.value.length !== 0 ? setShowPlaceholder(false) : setShowPlaceholder(true);
        }
    }, [inputRef.current?.value]);

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => e.currentTarget.value.length !== 0 ? setShowPlaceholder(false) : setShowPlaceholder(true);

    return (
        <div className="input-block" {...blockProps}>
            <label className="base-input-label">{title}</label>
            <div className="input-container" {...containerProps} >
                {
                    Icon ?
                        <Icon className="base-input-placeholder-icon" {...iconProps} />
                    :
                        IconRight ?
                            <IconRight className="base-input-placeholder-icon right" {...iconProps} />
                        :
                            null
                }
                <input
                    ref={inputRef}
                    disabled={disabled}
                    name={name}
                    placeholder={placeholder}
                    className={Icon ? 'base-input padding' : 'base-input'}
                    type="text"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleInput(e)}
                    {...inputProps}
                />
            </div>
        </div>
    );
};

export default Input;
