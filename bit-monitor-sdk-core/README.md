# bit-monitor-sdk-core

This is a simple log tool for usage in browser.

Dont like Java or the other language, we lack good log tool in browser environment, which can help us trace errors or problems more efficiently.

So this is what bit-monitor-sdk-core try to do.

Welcome to develop together or put an issue.

## Installation

```shell script
npm install bit-monitor-sdk-core
```

## Usage
1.create instance

```javascript
// Common JS
var BitMonitorSdkCore = require("bit-monitor-sdk-core/lib/bit-monitor-sdk-core.min");
var monitor = new BitMonitorSdkCore();
```

```javascript
// Or in ES Modules
import BitMonitorSdkCore from 'bit-monitor-sdk-core/lib/bit-monitor-sdk-core.min';

var monitor = new BitMonitorSdkCore();
```

2.init with your own config
```javascript
var config = {
    projectIdentifier: '',
    captureJsError: true,
    captureResourceError: true,
    captureAjaxError: true,
    captureConsoleError: false,
    isAutoUpload: true, // if true, monitor will call errorHandler automatically
    isEnableBuffer: false, // if true, monitor will create a buffer pool and save the concurrency info
    bufferCapacity: 10, // the capacity of buffer pool
    errorHandler: function (data) {
        // something to do with data
    }
};
monitor.init(config);
```

3.(optional)switch errorHandler automation
```javascript
monitor.setIsAutoUpload(false); // stop
monitor.setIsAutoUpload(true); // restart
```

## License
bit-monitor-sdk-core is under the MIT License.