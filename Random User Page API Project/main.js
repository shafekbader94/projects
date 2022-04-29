const apiManager = new APIManager();
let usersData = JSON.parse(localStorage.usersData || "[]");
let id = usersData.length;

$("#load").on("click", function () {
  apiManager.loadData();
  /*apiManager.randomUsers()
  apiManager.randomQuote()
  apiManager.pokemon()
  apiManager.reandomText()*/
});

$("#display").on("click", function () {
  const rendering = new Renderer(apiManager.data);
  rendering.renderer();
});

$("#saveUserPage").on("click", function () {
  let usersData = JSON.parse(localStorage.usersData || "[]");
  let id = usersData.length;
  usersData.push({ id: id, apiManager });
  id++;
  localStorage.usersData = JSON.stringify(usersData);
});

$("#loadUserPage").on("click", function () {
  const usersDataLS = JSON.parse(localStorage.usersData || "[]");
  const lastUser = usersDataLS[usersDataLS.length - 1];
  const renderingLS = new Renderer(lastUser.apiManager.data);
  renderingLS.renderer();

});


$(function () {

  $(".dropdown-toggle").click(function () {
    $(this).next(".dropdown").slideToggle();
    $(".dropdown").empty();
    const usersDataLS2 = JSON.parse(localStorage.usersData || "[]");
    usersDataLS2.forEach((element) => {
      let adding = `<li id="${element.id}"> ${element.apiManager.data.mainUser.firstName} ${element.apiManager.data.mainUser.lastName}</li>`;
      $(".dropdown").append(adding);

      $(document).click(function (e) {
        var target = e.target;
        if (
          !$(target).is(".dropdown-toggle") &&
          !$(target).parents().is(".dropdown-toggle")
        ) {
          $(".dropdown").slideUp();
        }
      });
    });
  });
});


  $(".dropdown").on("click" ,"li", function(){
    const usersDataLSD3 = JSON.parse(localStorage.usersData || "[]");
   let processID = $(this).attr("id")
    const renderingLS = new Renderer(usersDataLSD3[processID].apiManager.data)//usersDataLSD.apiManager.data);
    renderingLS.renderer();

  })

