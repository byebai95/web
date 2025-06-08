function add_event() {
    let table = document.getElementById("table");
    // console.log(table);
    let length = table.rows.length;
    // console.log(length);

    let new_row = table.insertRow(length);
    new_row.innerHTML = `
        <td>未命名</td>
        <td>0</td>
        <td>null</td>
        <td>
            <button onclick="edit_event(this)">编辑</button>
            <button onclick="delete_event(this)">删除</button>
        </td>
    `
}

function edit_event(button) {
    let cell = button.parentElement;
    let row = cell.parentElement;
    let td = row.children;
    let name = prompt("请输入姓名");
    let age = prompt("请输入年龄");
    let sex = prompt("请输入性别");
    if (name == null || age == null || sex == null) {
        alert("请输入完整信息");
        return;
    }
    td[0].innerHTML = name;
    td[1].innerHTML = age;
    td[2].innerHTML = sex;
}

function delete_event(button) {
    let cell = button.parentElement;  // 获取按钮所在的单元格
    let row = cell.parentElement;     // 获取单元格所在的行
    row.remove();                     // 删除整行
}
