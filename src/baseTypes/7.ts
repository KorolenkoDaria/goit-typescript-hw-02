/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isWeekend(params: Week): boolean {
  if (params === Week.Sunday || params === Week.Saturday) {
    return true
  } else { 
    return false; 
  }
}
isWeekend(Week.Sunday);

export {}