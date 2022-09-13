import React from "react";
import Dropdown from "./Dropdown";


export default {

    title: 'ReactComponent/Dropdown',
    component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const normal = Template.bind({});
normal.args = {
    title:'choose item ',
    items:[
        { name: 'one', value: '1' }, 
        { name: 'two', value: '2' },
        { name: 'three', value: '3' }
        ]
}
export const disabledItem = Template.bind({});
disabledItem.args = {
    title:'choose item ',
    items:[
        { name: 'one', value: '1' }, 
        { name: 'two', value: '2' ,disabled:true},
        { name: 'three', value: '3' }
        ]
}
