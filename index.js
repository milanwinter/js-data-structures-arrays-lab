// Write your solution here!
const drivers = ["Milo","Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
    drivers
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
    drivers
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
    drivers
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
    drivers
}

function appendDriver(name) {
  const driversTwo = [ ...drivers , name];
  return driversTwo
}

function prependDriver(name) {
    const driversThree = [name, ...drivers]
    return driversThree
}

function removeLastDriver() {
    return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
    return drivers.slice(1)
}