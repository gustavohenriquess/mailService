import moment from 'moment'

function validDate(date: any){
  return moment(date).isValid()
}

module.exports = validDate
