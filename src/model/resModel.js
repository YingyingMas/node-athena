// 建数据模型

class BaseModel {
  constructor(data, message) {
    if (typeof data === 'string') {// 如果直接传入一个字符串参数，则直接作为msg
      this.message = data
      data = null
      message = null
    }
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.errno = 0
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.errno = -1
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}
