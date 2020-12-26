function DataTable(config, data) {
    const usersTable = document.querySelector(config.parent);
    const table = document.createElement("table"),
        tHead = document.createElement("tHead"),
        tBody = document.createElement("tBody"),
        trHead = document.createElement("tr"),
        trBody = document.createElement("tr");

    table.id = "table";
    tHead.id = "table-head";
    tBody.id = "table-body";
    trHead.id = "head-tr"
    trBody.id = "body-tr"

    usersTable.appendChild(table);
    const Table = document.getElementById("table");
    Table.appendChild(tHead);
    Table.appendChild(tBody);

    const tableHead = document.getElementById("table-head");
    const tableBody = document.getElementById("table-body");
    tableHead.append(trHead);
    tableBody.append(trBody);

    const headTr = document.getElementById("head-tr");
    const bodyTr = document.getElementById("body-tr");

    /*Add Head columns*/
    makeTableRows(data, bodyTr, "td")
    /*Add Body columns*/
    makeTableRows(config.columns, headTr, "th")
}

function makeTableRows(object, tableRow, tagName) {
    if (tagName === "th") {
        let typeRow = document.createElement(tagName);
        typeRow.id = `head-${tagName}`;
        typeRow.textContent = "№";
        tableRow.append(typeRow);
    }
    Object.keys(object)
        .forEach(function eachKey(key) {
            for (let value in object[key]) {
                let typeRow = document.createElement(tagName);
                typeRow.id = `head-${tagName}`;
                if (value === "value") continue;    // skip value from config1
                if (value === 'id') {   // display users id value 1, 2, 3...
                    typeRow.textContent = `${key * 1 + 1}`;
                    tableRow.append(typeRow);
                    continue;
                }
                typeRow.textContent = object[key][value];
                tableRow.append(typeRow);
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
