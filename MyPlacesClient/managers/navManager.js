class NavManager {
	constructor(dataManager) {
		this.dataManager = dataManager;
		this.beesComponent = document.getElementById('beesComponent');
	}

	showData(data) {
		//console.log(data);
		var arrayVenues = [];

		for (var i = 0; i < data.response.groups[0].items.length; i++) {
			var id = data.response.groups[0].items[i].venue.id;
			var name = data.response.groups[0].items[i].venue.name;
			var address = data.response.groups[0].items[i].venue.location.address;
			var lat = data.response.groups[0].items[i].venue.location.lat;
			var lng = data.response.groups[0].items[i].venue.location.lng;
			var city = data.response.groups[0].items[i].venue.location.city;
			var state = data.response.groups[0].items[i].venue.location.state;
			var country = data.response.groups[0].items[i].venue.location.country;
			var venue = new Venue(id, name, address, lat, lng, city, state, country);
			arrayVenues.push(venue);
			var venueComponent = new VenueComponent(venue);

		}

		return arrayVenues;
	}

	showCategories(data) {
		console.log(data);

		var arrayCategories = [];
		var lastIndex = 1;

		for (var i = 0; i < data.response.groups[0].items.length; i++) {
			//if (data.response.groups[0].items[lastIndex].venue.categories[0].id == data.response.groups[0].items[i].venue.categories[0].id) {
			//	console.log('Repetido :v');
			//console.log(data.response.groups[0].items[lastIndex].venue.categories[0].id + ' y ' + data.response.groups[0].items[i].venue.categories[0].id);

			//} else {
			var prefix = data.response.groups[0].items[i].venue.categories[0].icon.prefix;
			var suffix = data.response.groups[0].items[i].venue.categories[0].icon.suffix;
			var id = data.response.groups[0].items[i].venue.categories[0].id;
			var name = data.response.groups[0].items[i].venue.categories[0].name;
			var primary = data.response.groups[0].items[i].venue.categories[0].primary;
			var pluralName = data.response.groups[0].items[i].venue.categories[0].pluralName;
			var shortName = data.response.groups[0].items[i].venue.categories[0].shortName;
			var category = new Category(prefix, suffix, id, name, primary, pluralName, shortName);
			arrayCategories.push(category);
		}
		//lastIndex++;
		//}

		return arrayCategories;
	}

}