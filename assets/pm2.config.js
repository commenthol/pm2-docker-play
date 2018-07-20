/**
 * @see https://pm2.io/doc/en/runtime/reference/ecosystem-file/
 */
const os = require('os')

const script = 'app.js'
const cwd = __dirname
const exec_mode = 'cluster'
const uid = 'node' // use user name instead of id!!!
const output = '/dev/null'
const error = '/dev/null'
const log = '/dev/null'

module.exports = {
  apps: [
    {
      name: 'appMaster',
      args: ['--master'],
      instances: 1,
      exec_mode,
      script,
      cwd,
      uid,
      log,
      output,
      error
    }, {
      name: 'app',
      args: [],
      instances: os.cpus().length - 1,
      exec_mode,
      script,
      cwd,
      uid,
      log,
      output,
      error
    }
  ]
}
