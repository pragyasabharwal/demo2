import Default from './lib/Default'
import Modified from './L1/modified/Index'
import Amazon from './L1/amazon/Index'

export let Main

if (window.location.href.split(':')[2] === '3000/') {
  Main = Default
}
// if(window.location.href.split(':')[2] === '3001/'){
//     Main = Modified
// }
if (window.location.href.split(':')[2] === '3001/') {
  Main = Amazon
}
