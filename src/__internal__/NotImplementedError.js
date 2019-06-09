class NotImplementedError extends Error {
  constructor (method) {
    super ()
    this.message = `[fish] ${method} not implemented, please check it.`
  }
}

export default NotImplementedError