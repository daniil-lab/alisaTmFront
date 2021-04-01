import React, { useMemo, useState } from 'react';
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
import Input from '../Input/Input';

import './ModalInput.scss';

interface IModalInputValue {
    id: number;
    value: string;
    title: string;
}

interface IModalInput {
    title?: string;
    divProps?: React.HTMLProps<HTMLDivElement>;
    inputProps?: React.HTMLProps<HTMLInputElement>;
    placeholder?: string;
    values?: IModalInputValue[];
    blockProps?: React.HTMLProps<HTMLDivElement>;
}

type Selected = any;

const ModalInput: React.FunctionComponent<IModalInput> = ({ title, placeholder, blockProps, inputProps, divProps, values }) => {
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState<Selected>(null);
    const [filteredValues, setFilteredValues] = useState<IModalInputValue[]>([]);
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
            const arr: IModalInputValue[] = [];

            values?.forEach(value => {
                if(value.title.includes(searchInput)) {
                    arr.push(value);
                }
            });

            setFilteredValues(arr);
        }
    }, [searchInput])

    const getValueById = (selected: any): IModalInputValue => {
        let initial: IModalInputValue = {
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
        <div className="modal-input-block" {...divProps} >
            <label className="modal-input-container">
                <Input
                    blockProps={{
                        ...blockProps
                    }}
                    containerProps={{
                        style: {
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }
                    }}
                    iconRight={FaPlusCircle}
                    iconProps={{
                        style: {
                            color: '#004146',
                            paddingRight: 10,
                            cursor: 'pointer'
                        },
                        onClick: () => openModal()
                    }}
                    placeholder={placeholder}
                    title={title}
                    inputProps={{
                        value: selected ? getValueById(selected)?.title : '',
                        disabled: true,
                        ...inputProps
                    }}
                />
            </label>
                {
                    showModal &&
                    <div className="modal-input-modal-container">
                        <div className="modal-input-modal">
                            <div className="modal-close-block">
                                <FaTimesCircle onClick={() => hideModal()} className="modal-close-icon" />
                            </div>
                            <div className="modal-input-search">
                                <Input placeholder="Введите текст для поиска" title="Поиск по названию" inputProps={{
                                    onChange: (e: React.FormEvent<HTMLInputElement>) => handleSearch(e)
                                }} />
                            </div>
                            <div className="modal-input-values">
                                {
                                    values &&
                                        searchInput.length === 0 ?
                                            values.map((value, idx) => (
                                                <div onClick={() => setValue(value)} key={idx} className="modal-input-value-block">
                                                    <p className="modal-input-value">
                                                        {value.title}
                                                    </p>
                                                </div>
                                            ))
                                        :
                                            filteredValues.map((value, idx) => (
                                                <div onClick={() => setValue(value)} key={idx} className="modal-input-value-block">
                                                    <p className="modal-input-value">
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

export default ModalInput;
