import { core } from 'xajs'
import createPage from './createPage'
import { lifecycle } from './mixins'

@core.decorators.mixin(lifecycle)
class View {
  constructor (data = {}) {
    this.$page = createPage(data, this)
  }

  // TODO: proxy?
  get id () {
    return this.$page.id
  }

  get data () {
    return this.$page.data
  }

  get eliminationCount () {
    return this.$page.eliminationCount
  }

  get hasBeenEliminated () {
    return this.$page.hasBeenEliminated
  }

  get hasBeenOpened () {
    return this.$page.hasBeenOpened
  }

  get isDead () {
    return this.$page.isDead
  }

  get isPin () {
    return this.$page.isPin
  }

  get isEliminated () {
    return this.$page.isEliminated
  }

  get isRunning () {
    return this.$page.isRunning
  }
}

export default View
