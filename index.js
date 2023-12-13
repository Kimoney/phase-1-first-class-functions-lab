// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers){
    let firstTwo = drivers.slice(0,2);
    return firstTwo;
}
// you can select the last n number of elements using a negative sign followed by n

const returnLastTwoDrivers = function (drivers){
    let lastTwo = drivers.slice(-2);
    return lastTwo
}

// An array that has functions as elements

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// Fare multiplier is a function that returns a function a

function createFareMultiplier (number){
    return function multiplier (fare){
        return fare * number
    }
}

// Fare doubler that uses the function returned by Fare multiplier

 const fareDoubler = function(multiplier){
    return multiplier * 2;
 }

// Fare tripler that uses the function returned by Fare multiplier

const fareTripler = function(multiplier){
    return multiplier * 3;
 }

// returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// returns the last two drivers when passed returnLastTwoDrivers() as the second argument

function selectDifferentDrivers (drivers, returnLastTwoDrivers){
    let selectee;
    if (drivers){
        selectee = returnLastTwoDrivers(drivers);
        return selectee
    }
    else if(returnLastTwoDrivers){
      return returnLastTwoDrivers
    }
}