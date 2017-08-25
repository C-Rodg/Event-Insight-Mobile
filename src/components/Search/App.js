import React from 'react';
import Header from './Header';
import Content from './Content';

const App = () => {
    return (
        <div className="app">
            <Header eventTitle="Salesforce World Tour - Toronto 2017" />
            <Content />
        </div>
    );
};

export default App;