import React, {Component} from 'react';
import './figure.css'

class ImgFigure extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {

        if (this.props.arrange.isCenter) {
            this.props.inverse();  // 调用父组件方法 旋转
        } else {
            this.props.center();  // 调用父组件方法 居中
        }


        e.stopPropagation();
        e.preventDefault();
    }

    render() {

        let styleObj = {};
        let styleObj2 = {};

        // 如果props属性中指定了这张图片位置，则使用
        if (this.props.arrange.pos) {
            styleObj = this.props.arrange.pos;
        }
        // 如果图片的旋转角度有值且不为0，添加旋转角度
        if (this.props.arrange.rotate) {
            (['MozTransform', 'msTransform', 'WebkitTransform', 'transform']).forEach(function (value) {
                styleObj2[value] = 'rotate(' + this.props.arrange.rotate + 'deg)';
            }.bind(this));
        }


        if (this.props.arrange.isCenter) {
            styleObj2.zIndex = 11;
        }

        let imgFigureClassName = 'img-figure';
        // 调用父组件的参数
        imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';

        return(
            <figure className={imgFigureClassName}
                    style={Object.assign({}, styleObj, styleObj2)}
                    onClick={this.handleClick}
                    ref={this.props.domRef}>
                <img src={this.props.data.imageURL}
                     alt={this.props.data.title}
                />
                <figcaption>
                    <h2 className="img-title">{this.props.data.title}</h2>
                    <div className="img-back"  onClick={this.handleClick}>
                        <p>
                            {this.props.data.desc}
                        </p>
                    </div>
                </figcaption>
            </figure>
        )
    }

}

export default ImgFigure;
