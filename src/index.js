import { createLLPageManager, createPage } from 'llpage'
import ajs from 'xajs'
import HistoryRouter from './router/history'

class Fish {
  constructor ({ routes }) {
    this.routes = routes
    this.Router = HistoryRouter
    this.router = new HistoryRouter(routes)
  }

  setup (Router) {
    this.router = new Router(this.routes)
    return this
  }

  listen () {
    this.router.listen()
    return this
  }

  go (path) {
    this.router.go(path)
  }

  forward () {
    this.router.forward()
  }

  back () {
    this.router.back()
  }
}
