import ContentTabs from '../../Components/Content Tabs/ContentTabs';
import React from 'react';
import ContentWrapper from '../../Components/Content Wrapper/ContentWrapper';
import Input from '../../Components/Input/Input';
import { FaBeer } from 'react-icons/fa';
import Select from '../../Components/Select/Select';

const Projects: React.FunctionComponent = () => {
    const FirstElement: React.FunctionComponent = () => {
        return (
            <ContentWrapper>
                <Input title="Тест" />
                <Input title="Тест" />
                <Input icon={FaBeer} title="Тест" />
                <Input icon={FaBeer} placeholder="Testsssss" title="Тест" />
                <Select title={'Test'} values={[{
                    title: "firts",
                    id: 1,
                    value: '1'
                }, {
                    id: 2,
                    title: "firts",
                    value: '1'
                }]} />
            </ContentWrapper>
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
            names={['First', 'Second', 'Third']}
            components={[<FirstElement />, <SecondElement />, <ThirdElement />]}
        />
    );
};

export default Projects;
