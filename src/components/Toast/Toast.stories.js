import React from "react";
import Toast from "./Toast";


export default {

    title: 'ReactComponent/Toast',
    component: Toast,
};

const Template = (args) => <Toast {...args} />;

export const normal = Template.bind({});
normal.args = {
    title: "title",
    message: 'message',
    type: 'info',
    visible: true

}
export const type = Template.bind({});
type.args = {
    title: "title",
    message: 'message',
    type: 'danger',
    visible: true,

}
export const close = Template.bind({});
close.args = {
    title: "title",
    message: 'message',
    type: 'danger',
    close: true,
    visible: true,


}
