import React, {Component} from 'react'

export default class InnoSvet extends Component {
  render() {
    return (
        <div className='flex h-100 w-100 bg-white flex-column'>
          <div className='bg-dark-gray w-100 flex justify-between items-center pl4 pr3 f7 white' style={{minHeight: 24}}>
            <div>
              9:41
            </div>
            <div>
              Innogy
            </div>
          </div>
          <div className='flex justify-between items-center bg-dark-gray white ph2' style={{minHeight: 50}}>
            <i class="material-icons">menu</i> 
            <div>
              Spotreba elektriny
            </div>
            <div>
              <i class="material-icons">help_outline</i>
              <i class="material-icons">mail_outline</i>
            </div>
          </div>
          <div className='flex-auto bg-white overflow-auto pa2'>
            <div className="br-pill w-100 flex bg-dark-pink justify-between items-center white pa2">
              <i class="material-icons">flash_on</i>
              <div className='f6'>
                <div className="b">
                  domov
                </div>
                <div className="fw1">
                  Na Blanseku 17, Praha 4 140 00
                </div>
              </div>
              <i class="material-icons">keyboard_arrow_down</i>
            </div>
            <div className="overflow-hidden white br-pill flex justify-between items-center mt2">
              <div className="w-50 bg-purple pa3">
                Spotreba (kWh)
              </div>
              <div className="w-50 bg-light-gray pa3 dark-gray">
                Naklady (Kc)
              </div>
            </div>
            <div className="relative overflow-hidden dark-pink br-pill flex justify-center items-center mt2 pa2 ba b--dark-pink">
              <div>
              Detail spotreby
              </div>
              <i class="material-icons absolute right-0 mr3">keyboard_arrow_right</i>
            </div>
            <div className="overflow-hidden relative bg-dark-pink br-pill flex justify-center items-center mt2 pa2 white">
              <div>
                Nahrat novy stav
              </div>
              <i class="material-icons absolute right-0 mr3">cloud_upload</i>
            </div>
          </div>
        </div>
    )
  }
}