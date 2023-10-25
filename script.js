document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o envio do formulário padrão

  // Obtenha os valores dos campos de usuário e senha
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simulação de autenticação (substitua por lógica real)
  if (username === 'usuario' && password === 'senha') {
      // Exiba a mensagem de boas-vindas
      document.getElementById('welcomeMessage').style.display = 'block';
      document.getElementById('usernameDisplay').textContent = username;
  } else {
      alert('Credenciais inválidas. Tente novamente.');
  }
});
