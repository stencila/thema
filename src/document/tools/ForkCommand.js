import { Command } from 'substance'

class ForkCommand extends Command {

  getCommandState (props, context) {
    return {
      disabled: false,
      active: false
    }
  }

  execute (props, context) {
    return {
      status: null
    }
  }

}

export default ForkCommand
