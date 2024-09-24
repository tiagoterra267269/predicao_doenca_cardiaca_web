// =========================================================================================================================================================================================================
// #region "Upload"
// =========================================================================================================================================================================================================
document.getElementById('uploadForm').onsubmit = async function (event) {
  event.preventDefault();

  const formData = new FormData();
  const fileInput = document.getElementById('fileInput');
  formData.append('file', fileInput.files[0]);

  try {
    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData
    });

    fileInput.value = "";

    const result = await response.json();
    alert('Modelo carregado com Sucesso!');
  } catch (error) {
    alert('Erro ao fazer upload!');
  }

};
// =========================================================================================================================================================================================================
// #endregion "Enviar"
// =========================================================================================================================================================================================================
document.getElementById('btnEnviar').onclick = async function (event) {
  event.preventDefault();

  if (ValidaPreenchimento()) {

    const formData = CarregaDadosFormulario();

    EnviaParaPredicao(formData);

  }
};

function CarregaDadosFormulario() {
  var formData = new FormData();
  formData.append('age', inputage.value);
  formData.append('sex', inputsex.value);
  formData.append('cp', inputcp.value);
  formData.append('trestbps', inputtrestbps.value);
  formData.append('chol', inputchol.value);
  formData.append('fbs', inputfbs.value);
  formData.append('restecg', inputrestecg.value);
  formData.append('thalach', inputthalach.value);
  formData.append('exang', inputexang.value);
  formData.append('oldpeak', inputoldpeak.value);
  formData.append('slope', inputslope.value);
  formData.append('ca', inputca.value);
  formData.append('thal', inputthal.value);
  return formData;
}

function ValidaPreenchimento() {
  var validado = false;
  if (inputage.value == ''){
    mostrarAlerta("Comprimento da sépala é obrigatório!")
  }
  else if (inputsex.value == ''){
    mostrarAlertaa("Largura a sépala é obrigatória!")
  }
  else if (inputcp.value == ''){
    mostrarAlerta("Comprimento da pétala é obrigatório!")
  }
  else if (inputtrestbps.value == ''){
    mostrarAlerta("Largura a pétala é obrigatória!")
  }
  else if (inputchol.value == ''){
    mostrarAlertaa("Largura a sépala é obrigatória!")
  }
  else if (inputfbs.value == ''){
    mostrarAlerta("Comprimento da pétala é obrigatório!")
  }
  else if (inputrestecg.value == ''){
    mostrarAlerta("Largura a pétala é obrigatória!")
  }
  else if (inputthalach.value == ''){
    mostrarAlertaa("Largura a sépala é obrigatória!")
  }
  else if (inputexang.value == ''){
    mostrarAlerta("Comprimento da pétala é obrigatório!")
  }
  else if (inputoldpeak.value == ''){
    mostrarAlerta("Largura a pétala é obrigatória!")
  }
  else if (inputslope.value == ''){
    mostrarAlertaa("Largura a sépala é obrigatória!")
  }
  else if (inputca.value == ''){
    mostrarAlerta("Comprimento da pétala é obrigatório!")
  }
  else if (inputthal.value == ''){
    mostrarAlerta("Largura a pétala é obrigatória!")
  }
  else{
    validado = true;
  }
  return validado;
}

async function EnviaParaPredicao(formData) {
  let url = 'http://localhost:5000/predizer';
  await fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.nome == null) {
        alert(data.message)
      }
      else
        alert(data.nome);
    })
    .catch((error) => {
      console.error('Error:', error);
      mostrarAlerta('Error:', error);
    });
}

function mostrarAlerta(mensagem) {
  alert(mensagem);
}