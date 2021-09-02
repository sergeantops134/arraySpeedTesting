"use strict";

function someComplexAction(inputNumber){
    return Math.sqrt(inputNumber);
}

function arrayInitialization(someArray){
    for (let i = 0; i <1000000; i++){
    someArray.push(Math.round(Math.random()*1000));
    }
}

function testingForEach(someArray){

    let start = Date.now();

    let result = [];
    someArray.forEach(item => {
        result.push(someComplexAction(item));
    });

    let finish = Date.now();

    return finish - start;
}
function testingForOf(someArray){

    let start = Date.now();

    let result = [];
    for (let item of someArray){
        result.push(someComplexAction(item));
    }

    let finish = Date.now();

    return finish - start;
}

function testingFor(someArray){

    let start = Date.now();

    let result = [];
    for (let i = 0; i < someArray.length; i++){
        result.push(someComplexAction(someArray[i]));
    }

    let finish = Date.now();

    return finish - start;
}

function testingMap(someArray){

    let start = Date.now();

    let result = someArray.map((item) => {
        return someComplexAction(item);
    });

    let finish = Date.now();

    return finish - start;
}

function testingForIn(someArray){

    let start = Date.now();

    let result = [];
    for (let key in someArray){
        result.push(someComplexAction(someArray[key]));
    }

    let finish = Date.now();

    return finish - start;
}

function conductingTheTest(someFunction, someArray){
    let results = [];
    for (let i = 0; i < 100; i++){
        results.push(someFunction(someArray));
    }
    let sum = 0;
    results.forEach(item =>{
        sum += item;
    });

    return {
        min: Math.min(...results),
        max: Math.max(...results),
        average: +(sum/100).toFixed(3),
    }
}




let arrayUnderTesting = [];

arrayInitialization(arrayUnderTesting);
