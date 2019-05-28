class HistoryRouter {
  constructor (routes) {
    this._routes = routes
    this._engine = window.history
    this.handleState = this.handleState.bind(this)
  }

  handleState (e) {
    
  }

  listen () {
    window.addEventListener('popstate', this.handleState)
  }

  go () {

  }
}

export default HistoryRouter
