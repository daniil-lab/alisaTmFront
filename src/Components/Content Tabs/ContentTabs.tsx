import React, { useState } from 'react';
import { FaComments, FaFileSignature } from 'react-icons/fa';

import './ContentTabs.scss';

interface IContentTabs {
    components: JSX.Element[];
    names: string[];
}

const ContentTabs: React.FunctionComponent<IContentTabs> = ({ components, names }) => {
    const [activeTab, setActiveTab] = useState(0);

    const changeActiveTab = (tabKey: number) => setActiveTab(tabKey);

    return (
        <div className="content-tabs-container">
            <div className="content-tabs-list-block">
                <div className="content-tabs-names">
                    {names.map((item, idx) => (
                        <div
                            onClick={() => changeActiveTab(idx)}
                            key={idx}
                            className={activeTab === idx ? 'content-tab-block active' : 'content-tab-block'}
                        >
                            <p className={activeTab === idx ? 'content-tab-name active' : 'content-tab-name'}>{item}</p>
                        </div>
                    ))}
                </div>

                <div className="content-tabs-actions">
                    <div className="content-tab-block">
                        <p className="content-tab-name">
                            <FaFileSignature className="content-tab-icon" />
                            История
                        </p>
                    </div>

                    <div className="content-tab-block">
                        <p className="content-tab-name">
                            <FaComments className="content-tab-icon" />
                            Комментарии
                        </p>
                    </div>
                </div>
            </div>

            <div className="content-tabs-content">{components[activeTab]}</div>
        </div>
    );
};

export default ContentTabs;
