function btn_click() {
    const btn = document.getElementById('btn1');
    btn.classList.toggle('on');

    const hidden_address = document.getElementById('hidden_address');
    hidden_address.classList.toggle('hidden');
}