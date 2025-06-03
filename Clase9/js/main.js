const campos = ['nombre', 'email', 'password', 'edad', 'telefono', 'direccion', 'ciudad', 'cp', 'dni'];

const validators = {
  nombre: v => v.length > 6 && v.includes(' ') ? '' : 'Debe tener más de 6 letras y al menos un espacio.',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Formato de email inválido.',
  password: v => /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(v) ? '' : 'Al menos 8 caracteres, letras y números.',
  edad: v => Number(v) >= 18 ? '' : 'Debe ser mayor o igual a 18.',
  telefono: v => /^\d{7,}$/.test(v) ? '' : 'Al menos 7 dígitos sin símbolos.',
  direccion: v => /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\s).{5,}$/.test(v) ? '' : 'Debe tener letras, números y un espacio.',
  ciudad: v => v.length >= 3 ? '' : 'Debe tener al menos 3 caracteres.',
  cp: v => v.length >= 3 ? '' : 'Debe tener al menos 3 caracteres.',
  dni: v => /^\d{7,8}$/.test(v) ? '' : 'Debe tener 7 u 8 dígitos.'
};

campos.forEach(id => {
  const input = document.getElementById(id);
  const errorDiv = document.getElementById('error-' + id);

  input.addEventListener('blur', () => {
    const value = input.value.trim();
    const error = validators[id](value);
    if (error) {
      input.classList.add('error-input');
      errorDiv.textContent = error;
    }
  });

  input.addEventListener('focus', () => {
    input.classList.remove('error-input');
    errorDiv.textContent = '';
  });
});

document.getElementById('nombre').addEventListener('input', (e) => {
  const valor = e.target.value.trim();
  document.getElementById('titulo').textContent = valor ? 'HOLA ' + valor.toUpperCase() : 'HOLA';
});

document.getElementById('formulario').addEventListener('submit', e => {
  e.preventDefault();
  let errores = [];

  campos.forEach(id => {
    const valor = document.getElementById(id).value.trim();
    const error = validators[id](valor);
    if (error) {
      errores.push(`${id}: ${error}`);
      document.getElementById(id).classList.add('error-input');
      document.getElementById('error-' + id).textContent = error;
    }
  });

  if (errores.length === 0) {
    const formData = campos.map(id => `${id}: ${document.getElementById(id).value.trim()}`).join('\n');
    alert('Formulario enviado correctamente');
  } else {
    alert('Errores:\n' + errores.join('\n'));
  }
});
