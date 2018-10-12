import CmdManager from './cmd/manager'
import Base from './app/base'

const ehomeInit = () => {
    window.ehome = new Object();

    // window.ehome.app = {
    //     base: Base
    // }

    window.ehome.cmd = {
        manager: CmdManager
    }

}

export default {
    ehomeInit
}