function DataTable(config, data) {
    const usersTable = document.querySelector(config.parent);
    const table = document.createElement("table"),
        tHead = document.createElement("tHead"),
        tBody = document.createElement("tBody")
 

    usersTable.appendChild(table);
    const Table = document.querySelector('table');
    Table.appendChild(tHead);
    Table.appendChild(tBody);


    makeTableHead(config.columns,   "th")
    makeTableBody(data, "td")

}
function makeTableHead(object,  tagName) {
    let trHead = document.createElement("tr");
    trHead.id = "head-tr"
    const tableHead = document.querySelector('thead');
    tableHead.append(trHead);
    const headTr = tableHead.lastChild
    let typeRow = document.createElement(tagName);
    typeRow.textContent = "№";
    headTr.append(typeRow);
    Object.keys(object)
        .forEach(function eachKey(key) {
            for (let value in object[key]) {
                let typeRow = document.createElement(tagName);
                if (value === "value") continue;    // skip value from config1
                typeRow.textContent = object[key][value];
                headTr.append(typeRow);
            }
        });
}
function makeTableBody(object, tagName) {
    const tableBody = document.querySelector('tbody');
    Object.keys(object)
        .forEach(function eachKey(key) {
            let trBody = document.createElement("tr");
            tableBody.append(trBody);
            let bodyTr = tableBody.lastChild;
            for (let value in object[key]) {
                let typeRow = document.createElement(tagName);
                if (value === 'id') {   // display users id value 1, 2, 3...
                    typeRow.textContent = `${key * 1 + 1}`;
                    bodyTr.append(typeRow);
                    continue;
                }
                typeRow.textContent = object[key][value];
                bodyTr.append(typeRow);
            }
        });
}

const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Имя', value: 'name'},
        {title: 'Фамилия', value: 'surname'},
        {title: 'Возраст', value: 'age'},
    ]
};

const users = [
    {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
    {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
    {id: 30052, name: 'Теневой', surname: 'Васечка', age: 15},
    {id: 30053, name: 'Клон', surname: 'Васечки', age: 15},
    {id: 30054, name: 'Просто', surname: 'Чел', age: 99},
    {id: 30055, name: 'Саня', surname: 'Сосед', age: 30},
    {id: 30056, name: 'Друг', surname: 'Сани', age: 33},

];

DataTable(config1, users);
