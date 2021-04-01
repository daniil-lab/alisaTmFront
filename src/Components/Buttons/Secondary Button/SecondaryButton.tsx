import React from 'react';
import { IconType } from 'react-icons/lib';

import './SecondaryButton.scss';

interface ISecondaryButton {
    title: string;
    divProps?: React.HTMLProps<HTMLDivElement>;
    textProps?: React.HTMLProps<HTMLParagraphElement>;
    onClick?: () => {};
    icon?: IconType;
}

const SecondaryButton: React.FunctionComponent<ISecondaryButton> = ({
    title,
    divProps,
    textProps,
    onClick,
    icon: Icon,
}) => {
    return (
        <div className="secondary-button-block" onClick={onClick} {...divProps}>
            <p className="secondary-button-text" {...textProps}>
                {title}
            </p>
            {Icon && <Icon className="secondary-button-icon" />}
        </div>
    );
};

export default SecondaryButton;
