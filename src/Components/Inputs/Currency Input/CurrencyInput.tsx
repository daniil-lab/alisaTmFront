import React, { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import Input from '../Input/Input';

import './CurrencyInput.scss';

interface IOption {
    title: string;
    id: number;
    icon: IconType;
}

interface ISelect {
    title: string;
    values: IOption[];
    icon?: IconType;
    name?: string;
    placeholder?: string;
    blockProps?: React.HTMLProps<HTMLDivElement>;
}

type Selected = number | null;

const CurrencyInput: React.FunctionComponent<ISelect> = ({ title, placeholder, icon, blockProps, name, values }) => {
    const [showExpanded, setShowExpaded] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selected, setSelected] = useState<Selected>(0);

    const selectItem = (id: typeof selected): void => {
        setInputValue('');
        setSelected(id);
    };

    const showValues = (): void => setShowExpaded(true);

    const hideValues = (): void => setShowExpaded(false);

    const getValueById = (): IOption => {
        let initial: IOption = {
            id: 0,
            title: 'None',
            icon: FaQuestion,
        };

        if (values) {
            for (const value of values) {
                if (value.id === selected) {
                    initial = value;
                    break;
                }
            }
        }

        return initial;
    };

    return (
        <div className="base-currency-input-block" {...blockProps}>
            <Input
                containerProps={{
                    style: {
                        display: 'flex',
                        justifyContent: 'flex-end',
                    },
                }}
                name={name}
                title={title}
                placeholder={placeholder}
                iconRight={getValueById().icon}
                inputProps={{
                    onFocus: () => showValues(),
                    onBlur: () => setTimeout(() => hideValues(), 300),
                }}
            />

            {showExpanded && (
                <div className="base-currency-input-values-container">
                    {values ? (
                        values.map((value, idx) => (
                            <div onClick={() => selectItem(value.id)} className="base-currency-input-value-block">
                                <p className="base-currency-input-value">{value.title}</p>
                            </div>
                        ))
                    ) : (
                        <div className="base-currency-input-value-block">
                            <p className="base-currency-input-value">Ничего не найдено!</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CurrencyInput;
