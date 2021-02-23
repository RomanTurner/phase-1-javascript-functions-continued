// Your code here
function mondayWork(todo = "go to the office") {
  return `This Monday, I will ${todo}.`;
}

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function wrapAdjective(Adjective = "*") {
    return function name(compliment = "special") {
        return `You are ${Adjective}${compliment}${Adjective}!`;
    };
}

