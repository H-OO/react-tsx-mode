/** 
 * @const spawn 解决跨平台调用node问题
 * @const args isArr 获取终端命令参数 ['build']
 * @const scriptIndex isNum `['build'].findIndex(x => x === 'build')` 方法返回`build`在数组中的下标，不存在则返回 -1
 * @const script isStr 获取终端参数 'build'
 * @const nodeArgs // isArr []
 * process.exit(result.status); // result.status === 0 代表构建成功
 */
const spawn = require('cross-spawn');
const args = process.argv.slice(2);

const scriptIndex = args.findIndex(
  x => x === 'start' || x === 'build'
);
const script = scriptIndex === -1 ? args[0] : args[scriptIndex]; // 参数(start|build)
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

switch (script) {
  case 'start':
  case 'build': {
    // 模块名
    const moduleName = script === 'build' ? 'webpack' : 'webpack-dev-server';
    // 配置文件
    const configFileName = 'webpack.' + script === 'build' ? 'pro' : 'dev';
    const result = spawn.sync(
      moduleName,
      nodeArgs
        .concat('--config')
        .concat(require.resolve('../config/' + configFileName))
        .concat(args.slice(scriptIndex + 1)),
      { stdio: 'inherit' }
    );
    if (result.signal) {
      // 构建失败
      console.log('err -> build failed');
      process.exit(1);
    }
    process.exit(result.status);
    break;
  }
  default:
    // 未知命令
    console.log('Unknown script "' + script + '".');
    break;
}
