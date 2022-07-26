addEls = [
    'Новый фильм',
    'Час на велике',
    'Написать небольшой проект',
    'Дополнительно почитать roadmap',
    'Тренировка 1',
    'Тренировка 2',
    'Посмотреть сериальчик',
    'Бицепс, Трицепс',
    'Плечи',
    'Предплечья',
]

template = ''
addEls.forEach(function(item, i) {
    i++
    temp = `
    <li>
        <input type="checkbox" id="${i}" onclick="fun(this)">
        <label for="${i}">${item}</label>
    </li>
    `

    template += temp
});
document.querySelector('.add').innerHTML = template


document.addEventListener('DOMContentLoaded', function() {

    for(var item in localStorage)
    {
        if(item.length <= 2)
        {
            document.getElementById(`${item}`).click()
        }
    }

})

function fun(t) {
    if ( t.checked == true )
    {
        localStorage.setItem(t.id, true);
        t.parentNode.classList.add("checked");
    }
    else
    {
        localStorage.removeItem(t.id);
        t.parentNode.classList.remove("checked");
    }
}

document.querySelector('button').addEventListener('click', function() {
    const result = confirm('Очистить все?');
    if (result) {
        for(var item in localStorage)
        {
            if(item.length <= 2)
            {
                document.getElementById(`${item}`).click()
            }
        }
    }
})
