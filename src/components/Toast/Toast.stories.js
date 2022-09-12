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
    type: 'success',
    visible: true

}
export const danger = Template.bind({});
danger.args = {
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
