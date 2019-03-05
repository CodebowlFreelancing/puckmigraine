import {format, addDays, setHours, setMinutes} from 'date-fns'
import fiLocale from 'date-fns/locale/fi'
import {curry2, curry3, compose} from 'sanctuary'
import {displayTwoDigits} from './number'

const dateFormatFi = 'D.M.YYYY'
const timeFormatFi = 'HH:mm'

export const now = () => new Date()

// not exactly "today" as cannot sense when date changes but enough for now
export const today = now()

const lazyAddDays = curry2((daysToAdd, date) => addDays(date, daysToAdd))

export const previousDate = lazyAddDays(-1)
export const nextDate = lazyAddDays(1)

const lazySetHours = curry2((hoursToAdd, date) => setHours(date, hoursToAdd))

const lazySetMinutes = curry2((minutesToAdd, date) => setMinutes(date, minutesToAdd))

export const setTime = curry3((date, hours, minutes) => compose(lazySetHours(hours))(lazySetMinutes(minutes))(date))

const display = curry3((dateFormat, locale, date) => format(date, dateFormat, locale))

export const displayDate = display(dateFormatFi)(fiLocale)

export const displayTime = display(timeFormatFi)(fiLocale)

export const displayHourAndMinutes = (hour, minutes) => `${displayTwoDigits(hour)}:${displayTwoDigits(minutes)}`
