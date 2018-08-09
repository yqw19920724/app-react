import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './miniToolTip.less';

class MiniToolTip extends Component {

    constructor(props) {
        super();
        this.timer = undefined;
        this.state = {
            mouseX: props.data.mouseX || 0,
            mouseY: props.data.mouseY || 0
        }
    }

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {
        if(this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.setState({
                mouseX: nextProps.data.mouseX,
                mouseY: nextProps.data.mouseY,
                //content: nextProps.data.content
            })
            this._changeTitleBarPosition();
            this._showTitleAnimation();
        }, 300)
    }

    _changeTitleBarPosition = () => {
        const miniToolTip = document.getElementsByClassName('mini-tool-tip')[0];
        if(miniToolTip) {
            miniToolTip.style.left = `${this.state.mouseX}px`;
            miniToolTip.style.top = `${this.state.mouseY}px`;
        }
    }

    _showTitleAnimation = () => {
        const miniToolTip = document.getElementsByClassName('mini-tool-tip')[0]
        if(miniToolTip) {
            miniToolTip.classList.add('mini-tool-tip-animation');
            setTimeout(() => {
                miniToolTip.classList.remove('mini-tool-tip-animation')
            }, 300)
        }
    }

    render() {
        return (
            <span className="mini-tool-tip">123123</span>
        );
    }
}

class MiniToolTipCtrl {
    constructor({mouseX, mouseY}){
        let elewrap, containerElement;
        containerElement = document.getElementById('mini-tool-tip-wrap');
        if(!containerElement) {
            elewrap = document.getElementsByTagName('body')[0];
            containerElement = document.createElement('div');
            containerElement.setAttribute('id', 'mini-tool-tip-wrap');
            elewrap.appendChild(containerElement);
        }

        this._render({mouseX, mouseY, containerElement})
    }

    _render({mouseX, mouseY, containerElement}) {
        const data = {mouseX, mouseY};
        ReactDom.render(<MiniToolTip data={data} />, containerElement)
    }

    static create({mouseX, mouseY}) {
        return new MiniToolTipCtrl({mouseX, mouseY})
    }

    static destroy() {
        const containerElement = document.getElementById('mini-tool-tip-wrap');
        if(containerElement) {
            //ReactDOM.unmountComponentAtNode(containerElement);
            containerElement.parentNode.removeChild(containerElement);
        }
    }
}

export default MiniToolTipCtrl;
