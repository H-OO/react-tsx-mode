/** 
 * @const spawn 解决跨平台使用npm命令的问题
 * @const args
 * @const scriptIndex
 * @const script
 * @const nodeArgs
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
    const result = spawn.sync(
      'node',
      nodeArgs
        .concat(require.resolve('../scripts/' + script))
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
