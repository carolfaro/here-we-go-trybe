window.onload = function(){
    let select = document.querySelector('select');
    select.addEventListener('change', function (){
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;

        localStorage.setItem('ultima cor do fundo', selected.value);
    })

    let inputFontSize = document.querySelector('input[name="fonte-size"]');
    inputFontSize.addEventListener('change', function(){
        let p = document.querySelector('p');
        p.style.fontSize = `${inputFontSize.valeu}px`;

        localStorage.setItem('ultimo tamanho da fonte', `${inputFontSize.value}px`);
    })
// depois do onload pq ele vai antes de tudo pro servidor
    let corSalva = localStorage.getItem('ultima cor do fundo');
    document.body.backgroundColor = corSalva;

    let tamanhoSalvo = localStorage.getItem('ultimo tamanho da fonte');
    let p = querySelector('p');
    p.style.fontSize = tamanhoSalvo;
}