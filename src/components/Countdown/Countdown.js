import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Countdown extends Component {
    constructor(props) {
        super(props);
        this.tTime = this.props.time;
        this.state = {
            time: {},
            seconds: 0,
            visible: false,
            currentCount: 3
        };
        this.timer = 0;
        this.countDown = this.countDown.bind(this);
    }


    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            h: hours,
            m: minutes,
            s: seconds
        };
        return obj;
    }
    // UNSAFE_componentWillMount() {
    //     this.timer = setInterval(this.countDown, 1000);
    //     this.setState({ seconds: this.props.time });
    // }
    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        // UNSAFE_componentWillMount
        this.timer = setInterval(this.countDown, 1000);
        this.setState({ seconds: this.props.time });
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds
        });

        // Check if we're at zero.
        if (seconds === 0) {
            clearInterval(this.timer);
            if (this.props.setTimeOut) {
                this.props.setTimeOut();
                this.interval = setInterval(() => {
                    this.setState({ currentCount: this.state.currentCount - 1 });
                    if (this.state.currentCount === 0) {
                        clearInterval(this.interval);
                        this.setState({ visible: false });
                    }
                }, 1000);
            }
        }


    }
    render() {
        return (
            <div className="Timer" key={this.props.key} >

                {/*00:*/}
                {this.state.time.m < 10
                    ? "0" + this.state.time.m
                    : this.state.time.m}:{this.state.time.s < 10
                        ? "0" + this.state.time.s
                        : this.state.time.s}


            </div>
        );
    }
}
Countdown.propTypes = {
    time: PropTypes.string.isRequired,
    key: PropTypes.number,
    setTimeOut: PropTypes.func


}

export default Countdown;