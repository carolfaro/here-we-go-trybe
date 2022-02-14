function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function creatDaysMonth () {
  let ulDays = document.querySelector("#days");

    for (let index = 0; index < dezDaysList.length; index += 1 ) {
        let creatLi = document.createElement('li');
        let indexDay = dezDaysList[index];

        if (indexDay === 24 | indexDay === 31) {
          creatLi.className = 'day holiday';
          creatLi.innerHTML = indexDay;
          ulDays.appendChild(creatLi);

        } else if (indexDay === 4 | indexDay === 11 | indexDay === 18) {
          creatLi.className = 'day friday';
          creatLi.innerHTML = indexDay;
          ulDays.appendChild(creatLi);
        } else if (indexDay === 25) {
          creatLi.className = 'day holiday friday'
          creatLi.innerHTML = indexDay;
          ulDays,appendChild(creatLi);
        } else {
          creatLi.className = 'day';
          creatLi.innerHTML = indexDay;
          ulDays.appendChild(creatLi);
        }
      }
    }
       

creatDaysMonth();

function holiday (feriados) {
  

}

console.log(ulDays)