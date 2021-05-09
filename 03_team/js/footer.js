document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn1');
    const hidden_address = document.getElementById('hidden_address');

    btn.addEventListener('click', function () {
        btn.classList.toggle('on');
        hidden_address.classList.toggle('hidden');
    });
});