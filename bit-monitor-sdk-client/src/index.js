import BitMonitorSdkCore from '../../bit-monitor-sdk-core/lib/bit-monitor-sdk-core.min';
import {
    getParamsFromScript
} from './service/domService';
import {
    getByProjectIdentifier
} from './service/projectService';
import {
    uploadLog
} from './service/monitorService';
import {
    getUuid
} from './utils/uuidHelper';

// 从script标签中获取项目信息
getParamsFromScript(projectIdentifier => {

    getByProjectIdentifier(projectIdentifier, res => {

        const {
            projectIdentifier,
            activeFuncs,
            isAutoUpload
        } = res;
        const funcs = activeFuncs.length ? activeFuncs.split(',') : [];
        const checkEnabled = funcName => funcs.indexOf(funcName) > -1;

        const uuid = getUuid();

        const monitor = new BitMonitorSdkCore();
        const config = {
            projectIdentifier: projectIdentifier,
            captureJsError: checkEnabled('jsError'),
            captureResourceError: checkEnabled('ResourceLoadError'),
            captureAjaxError: checkEnabled('httpError'),
            captureConsoleError: checkEnabled('customError'),
            isAutoUpload: isAutoUpload, // if true, monitor will call errorHandler automatically
            isEnableBuffer: false, // if true, monitor will create a buffer pool and save the concurrency info
            bufferCapacity: 10, // the capacity of buffer pool
            errorHandler: (data) => {
                // something to do with data
                // console.log('[log]bit-monitor-sdk', data);
                uploadLog({
                    ...data,
                    cUuid: uuid
                });
            }
        };
        monitor.init(config);

        console.log('[log]bit-monitor-sdk', '开启成功');
    });
});
