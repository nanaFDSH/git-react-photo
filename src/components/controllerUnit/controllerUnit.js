import React, {Component} from 'react';
import './unit.css'

class ControllerUnit extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {

        if (this.props.arrange.isCenter) {
            this.props.inverse();
        } else {
            this.props.center();
        }

        e.stopPropagation();
        e.preventDefault();
    }

    render() {
        let controllerUnitClassName = 'controller-unit';

        // 如果对应的是居中图片，则显示对应的居中态
        if (this.props.arrange.isCenter) {
            controllerUnitClassName += ' is-center';

            // 如果对应的翻转态，则对应按钮的翻转态
            if (this.props.arrange.isInverse) {
                controllerUnitClassName += ' is-inverse';
            }
        }
        return (
            <span className={controllerUnitClassName} onClick={this.handleClick}></span>
        );
    }
}

export default ControllerUnit;