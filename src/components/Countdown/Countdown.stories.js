import React from "react";
import Countdown from "./Countdown";


export default {

    title: 'ReactComponent/Countdown',
    component: Countdown,
};

const Template = (args) => <Countdown {...args} />;

export const normal = Template.bind({});
normal.args = {
    time: '6',
    setTimeOut: () => { alert('Test') }
}
