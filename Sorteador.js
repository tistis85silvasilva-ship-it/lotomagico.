function gerarNumeros() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  const numeros = [];

  while (numeros.length < 6) {
    const num = Math.floor(Math.random() * 60) + 1;
    if (!numeros.includes(num)) {
      numeros.push(num);
    }
  }

  numeros.forEach(n => {
    const div = document.createElement('div');
    div.className = 'numero';
    div.textContent = n;
    resultado.appendChild(div);
  });

  confetti({ particleCount: 100, spread: 70 });
}
