function MarvelService() {


  var key = '?apikey=e44062bbc76b37176b08325d5265a0f3';
  var baseUrl = 'http://gateway.marvel.com/v1/public/'

  var marvelCharacters = [];
  var myCharacters = [];


  this.getMarvelCharacters = function () {
    //what should this function return
    return marvelCharacters.slice(0, marvelCharacters.length);

  }

  this.getMyCharacters = function () {
    //what should this function return
    return myCharacters.slice(0, myCharacters.length);


  }

  this.addToMyCharacters = function (id) {
    //in order to add a character to your list you will first need to find 
    //the character by its id in the marvelCharacters array

    var theCheck = this.checkMyCharacters(id);
debugger
    if (theCheck == false) {
      for (var i = 0; i < marvelCharacters.length; i++) {
        console.log(marvelCharacters[i].id, 'all chars')
        var charId = marvelCharacters[i].id;
        if (charId == id) {
          myCharacters.push(marvelCharacters[i])
        }
      }
    }
    console.log(myCharacters);
  }

  this.checkMyCharacters = function (id) {
    debugger
    console.log(myCharacters);
    if (myCharacters.length != 0) {
      
      for (i = 0; i < myCharacters.length; i++) {
        if (myCharacters[i].id == id) {
          return true;
        }
      }
    } return false;
  }
  this.removeMyCharacter = function (id) {
    //you need to find the character that you want to remove by its id
    //and remove it.
    debugger
    for (var i = 0; i < myCharacters.length; i++) {
      if (myCharacters[i].id == id) {
        myCharacters.splice(i, 1);
      }
    } console.log(myCharacters);

  }


  this.getCharacters = function (callWhenDone) {
    var data = localStorage.getItem('MarvelData')
    if (data) {
      marvelCharacters = JSON.parse(data);

      return callWhenDone(marvelCharacters)
    }
    $.get(baseUrl + 'characters' + key, function (response) {
      localStorage.setItem('MarvelData', JSON.stringify(response.data.results))
      marvelCharacters = response.data.results;

      callWhenDone(marvelCharacters)
    })
  }


}


