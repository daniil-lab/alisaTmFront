import ContentTabs from '../../Components/Content Tabs/ContentTabs';
import React, { useRef, useState } from 'react';
import ContentWrapper from '../../Components/Content Wrapper/ContentWrapper';
import Input from '../../Components/Inputs/Input/Input';
import { FaBeer, FaChevronLeft, FaDollarSign, FaInfoCircle, FaPencilAlt, FaPlusCircle, FaRubleSign } from 'react-icons/fa';
import Select from '../../Components/Inputs/Select/Select';
import SecondaryButton from '../../Components/Buttons/Secondary Button/SecondaryButton';
import PrimaryButton from '../../Components/Buttons/Primary Button/PrimaryButton';
import SwitchToggle from '../../Components/Switch Toggle/SwitchToggle';
import ModalInput from '../../Components/Inputs/Modal Input/ModalInput';
import TextModal from '../../Components/Inputs/Text Modal/TextModal';
import CurrencyInput from '../../Components/Inputs/Currency Input/CurrencyInput';

import './Projects.scss';

const Projects: React.FunctionComponent = () => {
    const SubHeader: React.FunctionComponent = () => {
        const [projectName, setProjectName] = useState('Проект xxx-xxx');
        const [inputStatus, setInputStatus] = useState(false);

        const inputRef = useRef<HTMLInputElement>(null);

        const handleInput = (e: React.FormEvent<HTMLInputElement>) => setProjectName(e.currentTarget.value);
        const activeInput = () => {
            setInputStatus(true);
            inputRef.current?.focus();
        };
        const disableInput = () => setInputStatus(false);

        return (
            <div className="project-subheader">
                <div className="project-id">
                    {
                        projectName.length !== 0 && <FaChevronLeft className="project-id-icon" />
                    }
                    <p className="project-id-value">{projectName}</p>
                </div>

                <div className="project-name">
                    <input
                        value={projectName}
                        placeholder={"Введите название проекта"}
                        onBlur={() => disableInput()}
                        ref={inputRef}
                        disabled={!inputStatus}
                        onChange={(e: React.FormEvent<HTMLInputElement>) => handleInput(e)}
                        className="project-name-input"
                    />
                    {!inputStatus && <FaPencilAlt onClick={() => activeInput()} className="project-name-pencil" />}
                </div>
            </div>
        );
    };

    const FirstElement: React.FunctionComponent = () => {
        return (
            <>
                <ContentWrapper>
                    <form className="base-form">
                        <div className="form-row">
                            <Select
                                title={"Клиент:"}
                                blockProps={{
                                    style: {
                                        flex: "2 1 auto"
                                    }
                                }}
                                icon={FaInfoCircle}
                                placeholder={"Выберите клиента"}
                                values={[
                                    {
                                        id: 1,
                                        title: "Андрей",
                                        value: "1"
                                    },
                                    {
                                        id: 2,
                                        title: "Артем",
                                        value: "1"
                                    },
                                    {
                                        id: 3,
                                        title: "Никита",
                                        value: "1"
                                    },
                                    {
                                        id: 4,
                                        title: "Иван",
                                        value: "1"
                                    },
                                ]}
                            />
                            <Input
                                title={"С языка:"} 
                                blockProps={{
                                    style: {
                                        flex: "2 1 auto"
                                    }
                                }}
                            />
                            <ModalInput
                                title={"На язык:"}
                                divProps={{
                                    style: {
                                        flex: "3 1 auto"
                                    }
                                }}
                                values={[
                                    {
                                        id: 1,
                                        title: "Английский",
                                        value: "1"
                                    },
                                    {
                                        id: 2,
                                        title: "Итальянский",
                                        value: "1"
                                    },
                                    {
                                        id: 3,
                                        title: "Русский",
                                        value: "1"
                                    },
                                    {
                                        id: 4,
                                        title: "Испанский",
                                        value: "1"
                                    },
                                ]}
                            />
                            <Input
                                title={"Дата начала:"}
                                blockProps={{
                                    style: {
                                        flex: "0 1 auto"
                                    }
                                }}
                                inputProps={{
                                    type: 'date'
                                }}
                            />
                            <Input
                                title={"Окончание:"}
                                blockProps={{
                                    style: {
                                        flex: "0 1 auto"
                                    }
                                }}
                                inputProps={{
                                    type: 'date'
                                }}
                            />
                        </div>

                        <div className="form-row">
                        <TextModal
                                desc={"Назначить"}
                                title={"Контакное лицо:"}
                                divProps={{
                                    style: {
                                        flex: "1.5 1 auto"
                                    }
                                }}
                                values={[
                                    {
                                        id: 1,
                                        title: "Андрей",
                                        value: "1"
                                    },
                                    {
                                        id: 2,
                                        title: "Артем",
                                        value: "1"
                                    },
                                    {
                                        id: 3,
                                        title: "Никита",
                                        value: "1"
                                    },
                                    {
                                        id: 4,
                                        title: "Иван",
                                        value: "1"
                                    },
                                ]}
                            />

                            <Select
                                title={"Специализация:"}
                                blockProps={{
                                    style: {
                                        flex: "1 1 auto"
                                    }
                                }}
                                placeholder={"Специализация"}
                                values={[]}
                            />

                            <div style={{
                                display: 'flex',
                                flex: '3 1 auto'
                            }} />

                            <CurrencyInput
                                title={"Цена для клиента"}
                                blockProps={{
                                    style: {
                                        flex: "1.62 1 auto"
                                    }
                                }}
                                values={[
                                    {
                                        id: 0,
                                        title: "Рубли",
                                        icon: FaRubleSign
                                    },
                                    {
                                        id: 1,
                                        title: "Доллар",
                                        icon: FaDollarSign
                                    }
                                ]}
                            />
                        </div>

                        <div className="form-row">
                            <SwitchToggle
                                title="Расширенные настройки"
                            />
                        </div>
                    </form>
                </ContentWrapper>
                <div className="services-block">
                    <p className="services-block-header">
                        Услуги
                    </p>

                    <div className="services-containers">
                        <div className="service-add-container">
                            <p className="service-header">Добавить услугу</p>

                            <PrimaryButton
                                title="Добавить первую услугу"
                                icon={FaPlusCircle}
                            />
                        </div>
                        <div className="service-template-add">
                            <p className="service-header">Или выбирете шаблон услуг</p>

                            <PrimaryButton
                                title="Добавить шаблон услуг"
                                icon={FaPlusCircle}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const SecondElement: React.FunctionComponent = () => {
        return <p>testtdaadsasddatt</p>;
    };

    const ThirdElement: React.FunctionComponent = () => {
        return <p>testtga24342tt</p>;
    };

    return (
        <ContentTabs
            names={['Проект (2)', 'Финансы', 'Документы', 'Почта']}
            subheader={<SubHeader />}
            components={[<FirstElement />, <SecondElement />, <ThirdElement />]}
        />
    );
};

export default Projects;
