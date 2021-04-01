import React from 'react';
import { IconType } from 'react-icons/lib';

import './PrimaryButton.scss';

interface IPrimaryButton {
    title: string;
    divProps?: React.HTMLProps<HTMLDivElement>;
    textProps?: React.HTMLProps<HTMLParagraphElement>;
    onClick?: () => {};
    icon?: IconType;
}

const PrimaryButton: React.FunctionComponent<IPrimaryButton> = ({
    title,
    divProps,
    textProps,
    onClick,
    icon: Icon,
}) => {
    return (
        <div className="primary-button-block" onClick={onClick} {...divProps}>
            <p className="primary-button-text" {...textProps}>
                {title}
            </p>
            {Icon && <Icon className="primary-button-icon" />}
        </div>
    );
};

export default PrimaryButton;
