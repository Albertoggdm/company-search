var timerId

export const debounceFunction = (func, delay) => {
  clearTimeout(timerId)
  timerId = setTimeout(func, delay)
}

export const isABNsearchTerm = (searchItem) => searchItem.match(/^(\d *?){11}$/)
