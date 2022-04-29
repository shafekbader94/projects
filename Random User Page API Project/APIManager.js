//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
  }

  randomUsers() {
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/?results=7",
      dataType: "json",
      success: (data) => {
        const users = data.results.map((m) => {
          return {
            firstName: m.name.first,
            lastName: m.name.last,
            address: m.location.city,
            state: m.location.state,
            photo: m.picture.large,
          };
        });

        this.data.mainUser = users[0];
        this.data.frindsUser = users.splice(1, 6);
      },
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }

  randomQuote() {
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest",
      dataType: "json",
      success: (data) => {
        this.data.quote = data.quote;
      },
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }

  pokemon() {
    $.ajax({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(
        Math.random() * 950
      )}`,
      dataType: "json",
      success: (data) => {
        (this.data.pokeName = data.name.charAt(0).toUpperCase() + data.name.slice(1)),
          (this.data.pokePhoto = data.sprites.back_default);
      },
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }

  reandomText() {
    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      dataType: "json",
      success: (data) => {
        this.data.text = data[Math.floor(Math.random() * 5)];
      },
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  }

  loadData(){
   //   this.data = this.data
      this.randomUsers()
      this.randomQuote()
      this.pokemon()
      this.reandomText()
  }
}
