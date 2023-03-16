// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers)=>
    ([drivers[0] , drivers[1]])



const returnLastTwoDrivers = (drivers)=>
    ([drivers[2] , drivers[3]])

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(drive){
    return function (amount){
        return drive*amount;
    }
}
const fareDoubler= createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers=(arrayOfDrivers, anyDriver)=>anyDriver(arrayOfDrivers);


