function fun(t) {
    console.log(t.checked)
    if ( t.checked == true )
    {
        t.parentNode.classList.add("checked");
    }
    else
    {
        t.parentNode.classList.remove("checked");
    }
}
