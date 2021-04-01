import React, { useState } from 'react';
import { IconType } from 'react-icons/lib';
import Input from '../Input/Input';

import './Select.scss';

interface IOption {
    title: string;
    value: any;
    id: number;
}

interface ISelect {
    title: string;
    values: IOption[];
    icon?: IconType;
    iconRight?: IconType;
    name?: string;
    placeholder?: string;
    blockProps?: React.HTMLProps<HTMLDivElement>;
}

type Selected = number | null;

const Select: React.FunctionComponent<ISelect> = ({
    title,
    iconRight,
    placeholder,
    icon,
    blockProps,
    name,
    values,
}) => {
    const [showExpanded, setShowExpaded] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selected, setSelected] = useState<Selected>(null);
    const [filteredValue, setFilteredValue] = useState<IOption[]>([]);

    const selectItem = (e: React.MouseEvent<HTMLDivElement>, id: typeof selected): void => {
        e.preventDefault();
        setInputValue('');
        setSelected(id);
    };

    const showValues = (): void => setShowExpaded(true);

    const hideValues = (): void => setShowExpaded(false);

    const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
        setSelected(null);
        setInputValue(e.currentTarget.value);

        if (e.currentTarget.value.length !== 0) {
            const arr: IOption[] = [];

            values.forEach(value => {
                if (value.title.includes(e.currentTarget.value)) {
                    arr.push(value);
                }
            });

            setFilteredValue(arr);
        }
    };

    const getValueById = (id: number): IOption => {
        let val: IOption = {
            title: 'None',
            value: 'None',
            id: 0,
        };

        for (const value of values) {
            if (value.id === id) {
                val = value;
                break;
            }
        }

        return val;
    };

    return (
        <div className="base-select-block" {...blockProps}>
            <Input
                name={name}
                title={title}
                placeholder={placeholder}
                icon={icon}
                iconRight={iconRight}
                inputProps={{
                    onChange: (e: React.FormEvent<HTMLInputElement>) => handleInput(e),
                    onFocus: () => showValues(),
                    onBlur: () => setTimeout(() => hideValues(), 300),
                    value: inputValue.length === 0 ? (!selected ? '' : getValueById(selected).title) : inputValue,
                }}
            />

            {showExpanded && (
                <div className="base-select-values-container">
                    {inputValue.length === 0 ? (
                        values.length !== 0 ? (
                            values.map((value, idx) => (
                                <div
                                    onClick={(e: React.MouseEvent<HTMLDivElement>) => selectItem(e, value.id)}
                                    className="base-select-value-block"
                                >
                                    <p className="base-select-value">{value.title}</p>
                                </div>
                            ))
                        ) : (
                            <div className="base-select-value-block">
                                <p className="base-select-value">Ничего не найдено!</p>
                            </div>
                        )
                    ) : filteredValue.length !== 0 ? (
                        filteredValue.map((value, idx) => (
                            <div
                                onClick={(e: React.MouseEvent<HTMLDivElement>) => selectItem(e, value.id)}
                                className="base-select-value-block"
                                key={idx}
                            >
                                <p className="base-select-value">{value.title}</p>
                            </div>
                        ))
                    ) : (
                        <div className="base-select-value-block">
                            <p className="base-select-value">Ничего не найдено!</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Select;
