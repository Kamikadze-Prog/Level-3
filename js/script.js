function DataTable(config, data) {
    const usersTable = document.querySelector(config.parent);
    const table = document.createElement("table"),
        tHead = document.createElement("tHead"),
        tBody = document.createElement("tBody"),
        colNames = config.columns.map(col => col.title),
        dataValues = config.columns.map(col => col.value);

    usersTable.appendChild(table);
    const Table = document.querySelector('table');
    Table.appendChild(tHead);
    Table.appendChild(tBody);

    makeTableHead(colNames, "th")
    makeTableBody(data, dataValues, "td")
}

function makeTableHead(object, tagName) {
    const trHead = document.createElement("tr"),
        tableHead = document.querySelector('thead');
    tableHead.append(trHead);
    const headTr = tableHead.lastChild,
        typeRow = document.createElement(tagName);
    typeRow.textContent = "№";
    headTr.append(typeRow);
    Object.keys(object)
        .forEach(function eachKey(key) {
            let typeRow = document.createElement(tagName);
            typeRow.textContent = object[key];
            headTr.append(typeRow);
        });
}

function makeTableBody(dataObject, dataValues, tagName) {
    const tableBody = document.querySelector('tbody');

    dataObject.forEach((dataItem, index) => {
        const trBody = document.createElement("tr");
        tableBody.append(trBody);
        let bodyTr = tableBody.lastChild,
            typeRow = document.createElement(tagName);
        typeRow.textContent = index + 1;
        bodyTr.append(typeRow);
        dataValues.forEach(value => {
            typeRow = document.createElement(tagName);
            typeRow.textContent = dataItem[value];
            bodyTr.append(typeRow);
        })
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