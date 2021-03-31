import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
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
    name?: string;
    placeholder?: string;
}

type Selected =  number | null;

const Select: React.FunctionComponent<ISelect> = ({ title, placeholder, name, values }) => {

    const [showExpanded, setShowExpaded] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selected, setSelected] = useState<Selected>(null);

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
    };

    const getValueById = (id: number): IOption => {
        let val: IOption = {
            title: "None",
            value: "None",
            id: 0
        };

        for(let value of values) {
            if(value.id === id) {
                val = value;
                break;
            }
        }

        return val;
    }

    return (
        <div className="base-select-block">
            <Input title={title} icon={FaBeer} inputProps={{
                onChange: (e: React.FormEvent<HTMLInputElement>) => handleInput(e),
                onFocus: () => showValues(),
                onBlur: () => setTimeout(() => hideValues(), 300),
                value: inputValue.length === 0 ? !selected ? '' : getValueById(selected).title : inputValue
            }} />
            
            {
                showExpanded &&
                <div className="base-select-values-container">
                {
                    values.map((value, idx) => (
                        <div onClick={(e: React.MouseEvent<HTMLDivElement>) => selectItem(e, value.id)} className="base-select-value-block">
                            <p className="base-select-value">{value.title}</p>
                        </div>
                    ))
                }
                </div>
            }
        </div>
    );
};

export default Select;
