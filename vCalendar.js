let calendar = function (library) {
  let container = document.body;
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let appendCalendar = function (year, month) {
    const tableId = 'calendar';
    let table = library.getElement(tableId);
    if(table !== null){
      library.deleteElement(table);
    }
    let current = new Date();
    year = year === undefined ? current.getFullYear() : year;
    month = month === undefined ? current.getMonth() : month;

    let date = new Date(year, month);
    
    table = library.createElement('table');
    library.setAttributeToElement(table, 'id', tableId);

    let caption = library.createElement('caption');
    let monthElement = library.createElement('div');
    let monthText = months[month] + ' ' + year;
    library.changeText(monthElement, monthText);
    library.appendElement(caption, monthElement);

    let prevMonth = library.createElement('button');
    library.changeText(prevMonth, 'Prev. Month');
    library.addEventListener(prevMonth, 'click', () => {
      month = month === 0 ? 0 : month - 1;
      appendCalendar(year, month);
    })
    library.appendElement(caption, prevMonth);

    let nextMonth = library.createElement('button');
    library.changeText(nextMonth, 'Next Month');
    library.addEventListener(nextMonth, 'click', () => {
      month = month === 11 ? 11 : month + 1;
      appendCalendar(year, month);
    })
    library.appendElement(caption, nextMonth);

    let prevYear = library.createElement('button');
    library.changeText(prevYear, 'Prev. Year');
    library.addEventListener(prevYear, 'click', () => {
      year = current.getFullYear() - 1 === year ? year : year - 1;
      appendCalendar(year, month);
    })
    library.appendElement(caption, prevYear);

    let nextYear = library.createElement('button');
    library.changeText(nextYear, 'Next Year');
    library.addEventListener(nextYear, 'click', () => {
      year = current.getFullYear() + 1 === year ? year : year + 1;
      appendCalendar(year, month);
    })
    library.appendElement(caption, nextYear);

    library.appendElement(table, caption);

    let row = library.createElement('tr');

    let lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    let counter = 0;
    let currentDay = current.getDate();

    let createEvent = function(event){
      let clickedDay = event.target;
      let containerForCreate = library.createElement("div");
      let textEvent = library.createElement("input");
      let buttonEvent = library.createElement("button");
      library.appendElement(containerForCreate, textEvent);
      library.appendElement(containerForCreate, buttonEvent);
      library.changeText(buttonEvent, "Create")
      library.appendElement(container, containerForCreate);
      let saveEvent = function(){
        let dayText = library.createElement("div");
        library.changeText(dayText, textEvent.value);
        library.appendElement(clickedDay, dayText)
        Array.from(library.getChild(containerForCreate))
        .forEach(child => library.deleteElement(child));
      };
      library.addEventListener(buttonEvent, "click", saveEvent);
      
    };

    for(let i = 1; i <= lastDayOfMonth; i++){
      let day = library.createElement('td');
      library.changeText(day, i);
      library.addEventListener(day, "click", createEvent);

      if(i === currentDay && year === current.getFullYear() && month === current.getMonth()){
        library.addStyle(day, {color: "red"});
      }

      if(counter === 7) {
        library.appendElement(table, row);
        row = library.createElement('tr');
        counter = 0;
      }
      library.appendElement(row, day);
      counter++;
    }
    library.appendElement(table, row);
    library.appendElement(container, table);
  }
  appendCalendar();
}