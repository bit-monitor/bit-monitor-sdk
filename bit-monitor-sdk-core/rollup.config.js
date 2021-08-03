// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import {
    terser
} from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: [{
        file: 'lib/bit-monitor-sdk-core.js',
        format: 'umd',
        name: 'bitMonitorSdkCore'
    }, {
        file: 'lib/bit-monitor-sdk-core.min.js',
        format: 'umd',
        name: 'bitMonitorSdkCore',
        plugins: [terser()]
    }],
    plugins: [
        resolve(),
        babel({
            babelHelpers: 'bundled'
        })
    ]
};