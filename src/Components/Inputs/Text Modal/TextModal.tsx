import React, { useState, useMemo } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import Input from '../Input/Input';

import './TextModal.scss';

interface ITextModalValue {
    id: number;
    value: any;
    title: string;
}

interface ITextModal {
    desc?: string;
    title?: string;
    values: ITextModalValue[];
    divProps?: React.HTMLProps<HTMLDivElement>;
    inputProps?: React.HTMLProps<HTMLInputElement>;
}

type Selected = any;

const TextModal: React.FunctionComponent<ITextModal> = ({ title, desc, inputProps, divProps, values }) => {
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState<Selected>(null);
    const [filteredValues, setFilteredValues] = useState<ITextModalValue[]>([]);
    const [searchInput, setSearchInput] = useState('');

    const openModal = (): void => setShowModal(true); 
    const hideModal = (): void => {
        setShowModal(false);
        setSearchInput('');
    };
    const setValue = (value: any): void => {
        setSelected(value.id);
        hideModal();
    };
    const handleSearch = (e: React.FormEvent<HTMLInputElement>): void => {
        setSelected(null);
        setSearchInput(e.currentTarget.value);
    }

    useMemo(() => {
        if(searchInput.length !== 0) {
            const arr: ITextModalValue[] = [];

            values?.forEach(value => {
                if(value.title.includes(searchInput)) {
                    arr.push(value);
                }
            });

            setFilteredValues(arr);
        }
    }, [searchInput])

    const getValueById = (selected: any): ITextModalValue => {
        let initial: ITextModalValue = {
            id: 0,
            value: "None",
            title: "None"
        };

        if(values) {
            for(const value of values) {
                if(value.id === selected) {
                    initial = value;
                    break;
                }
            }
        }
        
        return initial;
    }

    return (
        <div className="text-modal-block" {...divProps} >
            <label className="text-modal-label">{title}</label>
            <p onClick={() => openModal()} className="text-modal">
                {selected ? getValueById(selected).title : desc}
            </p>

            {
                    showModal &&
                    <div className="text-modal-input-modal-container">
                        <div className="text-modal-input-modal">
                            <div className="text-modal-close-block">
                                <FaTimesCircle onClick={() => hideModal()} className="text-modal-close-icon" />
                            </div>
                            <div className="text-modal-input-search">
                                <Input placeholder="Введите текст для поиска" title="Поиск по названию" inputProps={{
                                    onChange: (e: React.FormEvent<HTMLInputElement>) => handleSearch(e)
                                }} />
                            </div>
                            <div className="text-modal-input-values">
                                {
                                    values &&
                                        searchInput.length === 0 ?
                                            values.map((value, idx) => (
                                                <div onClick={() => setValue(value)} key={idx} className="text-modal-input-value-block">
                                                    <p className="text-modal-input-value">
                                                        {value.title}
                                                    </p>
                                                </div>
                                            ))
                                        :
                                            filteredValues.map((value, idx) => (
                                                <div onClick={() => setValue(value)} key={idx} className="text-modal-input-value-block">
                                                    <p className="text-modal-input-value">
                                                        {value.title}
                                                    </p>
                                                </div>
                                            ))
                                }
                            </div>
                        </div>
                    </div>
                }
        </div>
    );
};

export default TextModal;
