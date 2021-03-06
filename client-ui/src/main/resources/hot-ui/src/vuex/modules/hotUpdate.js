import axios from "../../utils/axios";
import {SUCCEED} from '@/utils/constant'
import {Message} from "element-ui";

export default {
    state: {
        code: '',
        name: ''
    },
    mutations: {
        setJavaCode(state, {code}) {
            state.code = code
        },
        setJavaCodeName(state, {name}) {
            state.name = name
        }
    },
    actions: {
        hotUpdate({state, rootState}) {
            axios.post(rootState.CLASS_HOT_UPDATE_URL, {
                className: state.name,
                javaCode: state.code
            }).then(() => {
                Message(SUCCEED("更新成功"));
            })
        },
        invokeMethod({rootState}, {className, methodName, paramsJson}) {
            return axios.post(rootState.INVOKE_METHOD_URL, {className, methodName, paramsJson})
        }
    }
}