
export default {
  launchIntoFullscreen: (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    }
  },
  findErrorCode: (code) => {
    return Object.keys(jSW.RcCode).find(k => jSW.RcCode[k] == code)
  },
  checkFlash: () => {
    let hasFlash = false
    let flashVersion
    if (navigator.plugins && navigator.plugins.length > 0) {
      let swf = navigator.plugins['Shockwave Flash']
      if (swf) {
        hasFlash = true
        var codes = swf.description.split(' ')
        for (var i = 0; i < codes.length; ++i) {
          if (isNaN(parseInt(codes[i]))) continue
          flashVersion = parseInt(codes[i])
        }
      }
    }
    return { f: hasFlash, v: flashVersion }
  },
  exitFullscreen: () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  },
  randomString: (len) => {
    len = len || 31
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'   
    var maxPos = $chars.length
    var pwd = ''
    for (let i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd
  },
  ErrorHandle: (code, cb) => {
    if (code == jSW.RcCode.RC_CODE_E_DISCONNECTED) {
      cb()
    }
  }
  // getCookie: (name, defaultValue) => {
  //   let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  //   var arr = document.cookie.match(reg)
  //   if (arr) {
  //     return unescape(arr[2])
  //   } else {
  //     return defaultValue
  //   }
  // }
}
