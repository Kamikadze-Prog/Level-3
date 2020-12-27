function DataTable(config, data) {
    const usersTable = document.querySelector(config.parent);
    const table = document.createElement("table"),
        tHead = document.createElement("tHead"),
        tBody = document.createElement("tBody")

    table.id = "table";
    tHead.id = "table-head";
    tBody.id = "table-body";


    usersTable.appendChild(table);
    const Table = document.getElementById("table");
    Table.appendChild(tHead);
    Table.appendChild(tBody);


    makeTableHead(config.columns,   "th")
    makeTableBody(data, "td")

}
function makeTableHead(object,  tagName) {
    let trHead = document.createElement("tr");
    trHead.id = "head-tr"
    const tableHead = document.getElementById("table-head");
    tableHead.append(trHead);
    const headTr = document.getElementById("head-tr");
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
    const tableBody = document.getElementById("table-body");
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
];

DataTable(config1, users);
