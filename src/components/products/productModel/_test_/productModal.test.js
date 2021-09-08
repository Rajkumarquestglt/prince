import React from 'react';
import reactDom from 'react-dom';
import ProductModel from '../ProductModel';
it('renders without crashing',()=>{
    const div =document.createElement('div');
    reactDom.render(<ProductModel />,div);
    reactDom.unmountComponentAtNode(div);
});