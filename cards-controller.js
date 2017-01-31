function CardsController() {


  var dataStore = new MarvelService()


  dataStore.getCharacters(ready)

  this.onAdd = function (charIndex) {
    //this function will take the player that was clicked and add them to your team through the dataStore.

    dataStore.addToMyCharacters(charIndex);
    draw(dataStore.getMarvelCharacters(), dataStore.getMyCharacters());
  }

  this.onRemove = function (charIndex) {
    //this will remove the character from your team
    dataStore.removeMyCharacter(charIndex)
    draw(dataStore.getMarvelCharacters(), dataStore.getMyCharacters());

  }

  function ready(data) {
    draw(data, [])
  }

  function draw(marvelList, myList) {
    //target is the id of the element where the list will be rendered
    var marvelElem = document.getElementById('marvel-characters')
    var myElem = document.getElementById('my-characters')
    marvelElem.innerHTML = ''
    myElem.innerHTML = ''

    var marvelTemplate = ''
    var myTemplate = ''

    for (var i in marvelList) {
      var character = marvelList[i];
      marvelTemplate += ` <br>
          <div class="card">
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100px">
            <h3>${character.name}</h3>
            <div> 
              <button class="btn-success" onclick="cardsCtrl.onAdd(${character.id})" id="${character.id}">Add to Team</button>
            </div>
          <div>
        `
    }

    for (var i in myList) {
      var character = myList[i];
      myTemplate += `<br>
          <div class="card">
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100">
            <h3>${character.name}</h3>
            <div>
              <button class="btn-danger" onclick="cardsCtrl.onRemove(${character.id})" id="${character.id}">DESTROY FOREVER</button>
            </div>
          <div>
          `
    }

    marvelElem.innerHTML = marvelTemplate
    myElem.innerHTML = myTemplate;

  }


}