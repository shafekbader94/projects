class Model {
  constructor() {
    this.cityData = [];
  }
  async getDataFromDB() {
    const cities = await $.get("/cities");
    cities.forEach((c) => {
      this.cityData.push({ ...c, saved: true });
    });

    return this.cityData;
  }
  async getCityDataByName(cityName) {
    let cityWithQ = `q=${cityName}`;

    const city = await $.get(`/city/${cityWithQ}`); //1
    this.cityData.unshift(city); //2
    return this.cityData; //3
  }

  async getCityDataByLocation(cityName) {
    let cords = `lat=${cityName.latitude}&lon=${cityName.longitude}`;
    const cityCor = await $.get(`/city/${cords}`);

    this.cityData.unshift(cityCor); //2
    return this.cityData; //3
  }

  async saveCity(cityName) {
    let checkCityFound = this.cityData.find((c) => c.name === cityName);
    checkCityFound["saved"] = true;

    const city = await $.ajax({
      url: "/city",
      type: "POST",
      data: checkCityFound,
    });
    console.log("POST complete");
  }

  async removeCity(cityName) {
    const deleteThisCity = await $.ajax({
      type: "DELETE",
      url: `/city/${cityName}`,
    });

    const deletedThisCity = this.cityData.find((c) => c.name === cityName);
    deletedThisCity.saved = false;
    this.cityData.splice(
      this.cityData.findIndex((city) => city.name === cityName),
      1
    );
  }

  async updateCity(cityName) {
    try {
      const updateThisCity = await $.ajax({
        type: "PUT",
        url: `/city/${cityName}`,
      });

      const index = this.cityData.findIndex(
        (city) => city.name === updateThisCity.name
      );
      this.cityData[index] = {
        ...updateThisCity,
        saved: this.cityData[index].saved,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
