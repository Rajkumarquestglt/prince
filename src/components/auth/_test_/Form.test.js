import React from 'react';
import reactDom from 'react-dom';
import FormCard from '../FormCard'
it('renders without crashing',()=>{
    const div =document.createElement('div');
    reactDom.render(<FormCard />,div);
    reactDom.unmountComponentAtNode(div);
});