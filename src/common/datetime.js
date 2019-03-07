import {format, addDays, getYear, getMonth, getDate, getHours, getMinutes} from 'date-fns'
import fiLocale from 'date-fns/locale/fi'
import {curry} from 'ramda'
import {displayTwoDigits} from './number'

export {getYear, getMonth, getDate, getHours, getMinutes}

const dateFormatFi = 'D.M.YYYY'

export const now = () => new Date()

// not exactly "today" as cannot sense when date changes but enough for now
export const today = now()

// date-fns/fp should solve this, flip however needed
const lazyAddDays = curry((daysToAdd, date) => addDays(date, daysToAdd))

export const previousDate = lazyAddDays(-1)
export const nextDate = lazyAddDays(1)

const display = curry((dateFormat, locale, date) => format(date, dateFormat, locale))

export const displayDate = display(dateFormatFi)(fiLocale)

export const displayHourAndMinutes = (hour, minutes) => `${displayTwoDigits(hour)}:${displayTwoDigits(minutes)}`
