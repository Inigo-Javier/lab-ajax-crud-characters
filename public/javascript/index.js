const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then((response)=>{

        let test =''
        
        response.data.forEach(elem => {test +=
      `
        <div class="character-info">
          <div class="name">Name: ${elem.name}</div>
          <div class="occupation">Ocupacion: ${elem.occupation}</div>
          <div class="cartoon">Dibujo: ${elem.cartoon}</div>
          <div class="weapon">Arma: ${elem.weapon}</div>
        </div>

      `});
      document.querySelector('.characters-container').innerHTML = test
      });
      
      
  })
  

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let valor = document.querySelector('input[name="character-id"]').value

    // console.log(valor)
    charactersAPI
      .getOneRegister(valor)
      .then(({data})=> {

        // console.log(data.name)

        let test =''

        test +=`<div class="character-info">
              <div class="name">Name: ${data.name}</div>
              <div class="occupation">Ocupacion: ${data.occupation}</div>
              <div class="cartoon">Dibujo: ${data.cartoon}</div>
              <div class="weapon">Arma: ${data.weapon}</div>
            </div>`
          document.querySelector('.characters-container').innerHTML = test

      })


  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    
    let valor = document.querySelector('input[name="character-id"]').value
    
    charactersAPI
      .deleteOneRegister(valor)
      
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
