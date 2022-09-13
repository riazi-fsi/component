import React from "react";
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
    refToggleContainer = React.createRef();
    state = {
        showOptions: false,
        title: this.props.title
    };

    componentDidMount() {
        window.addEventListener("click", this.onClickOutsideHandler);
    }

    componentWillUnmount() {
        window.addEventListener("click", this.onClickOutsideHandler);
    }

    onClickHandler = () => {
        this.setState(state => ({
            showOptions: !state.showOptions
        }));
    };
    // for close dropdow when click other side page
    onClickOutsideHandler = e => {
        if (
            this.state.showOptions &&
            !this.refToggleContainer.current.contains(e.target)
        ) {
            this.setState({ showOptions: false });
        }
    };
    handlerGetValue = (value) => {
        this.setState({
            title: value,
            showOptions: false
        })
        this.props.onClick(value);
    }
    render() {
        return (
            <div>
                <div
                    ref={this.refToggleContainer}
                    className="relative" >
                    <button className="dropdown-toggle" onClick={this.onClickHandler}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 mr-2 " role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                        >
                            <path
                                fill="currentColor"
                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                            ></path>
                        </svg>
                        {this.state.title}
                    </button>
                    {this.state.showOptions ? (
                        <ul className="dropdown-menu" >
                            {this.props.items.map(function (item, i) {
                                return (
                                    <li value={item.value} key={i} id={i}

                                    >
                                        <p
                                            onClick={() => this.handlerGetValue(item.value)}
                                            className={item.disabled ? 'dropdown-item whitespace-nowrap bg-transparent text-gray-400  pointer-events-none  ' :
                                                ' dropdown-item'}
                                             >{item.name}</p>
                                    </li>
                                );
                            }, this)}

                        </ul>
                    ) : null}
                </div>
            </div>
        );
    }
}

Dropdown.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired,
        disabled: PropTypes.bool
    })).isRequired


}
export default Dropdown;



//example for user
{/*<Dropdown title={faLanguage.register.loginMethod}*/ }
{/*items={[*/ }

{/*{*/ }
{/*'name': faLanguage.register.staticPassword,*/ }
{/*'value': 'staticPassword'*/ }

{/*},*/ }
{/*{*/ }
{/*'name': faLanguage.register.signaturePassword,*/ }
{/*'value': "signaturePassword"*/ }

{/*},*/ }
{/*]}*/ }
{/*onClick={this.handleDropdown}*/ }
{/*/>*/ }
