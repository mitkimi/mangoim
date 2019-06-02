export function querySystem () {
  var agent = navigator.userAgent.toLowerCase()
  var isMac = /macintosh|mac os x/i.test(navigator.userAgent)
  let sys = ''
  if (agent.indexOf('win32') >= 0 || agent.indexOf('wow32') >= 0) {
    // alert('这是windows32位系统')
    sys = 'win'
  } else if (agent.indexOf('win64') >= 0 || agent.indexOf('wow64') >= 0) {
    // alert('这是windows64位系统')
    sys = 'win'
  } else if (isMac) {
    // alert('这是mac系统')
    sys = 'mac'
  }
  return sys
}
