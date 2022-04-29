class Renderer {
  constructor(data) {
    this.data = data;
  }

  renderer() {
    const data = this.data;

    $(".user-container").empty();
    const aboutUser = $("#aboutUser-template").html();
    const aboutUserTemplate = Handlebars.compile(aboutUser);
    let aboutUserNewHTML = aboutUserTemplate(data);
    $(".user-container").append(aboutUserNewHTML);

    $(".quote-container").empty();
    const favQute = $("#favQuote-template").html();
    const favQuteTemplate = Handlebars.compile(favQute);
    let favQuteNewHTML = favQuteTemplate(data);
    $(".quote-container").append(favQuteNewHTML);

    $(".friends-container").empty();
    const aboutUserFriends = $("#aboutUserFriends-template").html();
    const aboutUserFriendsTemplate = Handlebars.compile(aboutUserFriends);
    let aboutUserFriendsNewHTML = aboutUserFriendsTemplate(data);
    $(".friends-container").append(aboutUserFriendsNewHTML);

    $(".pokemon-container").empty();
    const aboutPokemon = $("#aboutPokemon-template").html();
    const aboutPokemonTemplate = Handlebars.compile(aboutPokemon);
    let aboutPokemonNewHTML = aboutPokemonTemplate(data);
    $(".pokemon-container").append(aboutPokemonNewHTML);

    $(".meat-container").empty();
    const aboutMe = $("#aboutMe-template").html();
    const aboutMeTemplate = Handlebars.compile(aboutMe);
    let aboutMeNewHTML = aboutMeTemplate(data);
    $(".meat-container").append(aboutMeNewHTML);
  }
}
