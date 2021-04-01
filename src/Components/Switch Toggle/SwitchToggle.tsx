import React from 'react';

import './SwitchToggle.scss';

interface ISwitchToggle {
    title?: string;
    name?: string;
    divProps?: React.HTMLProps<HTMLLabelElement>;
    labelProps?: React.HTMLProps<HTMLLabelElement>;
    inputProps?: React.HTMLProps<HTMLInputElement>;
}

const SwitchToggle: React.FunctionComponent<ISwitchToggle> = ({ title, inputProps, name, divProps, labelProps }) => {
    return (
        <div className="switch-container">
            <label className="switch" {...divProps}>
                <input name={name} type="checkbox" {...inputProps} />
                <span className="slider round" />
            </label>

            <label className="switch-label" {...labelProps}>
                {title}
            </label>
        </div>
    );
};

export default SwitchToggle;
