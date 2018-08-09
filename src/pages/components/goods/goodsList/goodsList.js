import React, { Component } from 'react';
import './goodsList.less';
import miniToolTipCtrl from '../../../../common/widget/miniToolTip/miniToolTip'

class GoodsList extends Component {

    componentDidMount() {
        this.getMousePosition()
    }

    getMousePosition= () => {
        document.addEventListener('mousemove', this._renderMiniTitle)
    }

    _renderMiniTitle = (event) => {
        miniToolTipCtrl.create({mouseX: event.clientX, mouseY: event.clientY})
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this._renderMiniTitle)
        miniToolTipCtrl.destroy()
    }
    


    render() {
        return (
            <div className="GoodsList">
            </div>
        );
    }
}

export default GoodsList;