import { createLLPageManager } from 'llpage'
import ajs from 'xajs'
import path2exp from 'path-to-regexp'
import HistoryRouter from './router/history'

/**
 * @example
 * 
 * // define
 * const fish = new Fish({
 *   routes: {
 *     '/homepage': Home,
 *     '/detail/:id': Detail
 *   }
 * })
 * 
 * // listen
 * fish.listen()
 * 
 * // View
 * class Home extends Fish.View {
 *   onCreate () {
 *     
 *   }
 * }
 * 
 */
class Fish {
  constructor ({ routes }) {
    this.routes = this.preproccess(routes)
    this.Router = HistoryRouter
    this.router = new HistoryRouter(this.routes)
  }

  preproccess (routes) {
    for (let route in routes) {

    }
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
