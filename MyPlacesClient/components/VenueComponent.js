class VenueComponent {

    constructor(venue) {
        this.venue = venue;
        this.container = document.createElement('div');
        this.container.className = 'venues';
        //this.container.className = '';

        //Create html elements
        this.id = document.createElement('h2');
        this.name = document.createElement('h2');
        this.address = document.createElement('h2');
        this.lat = document.createElement('h2');
        this.lng = document.createElement('h2');
        this.city = document.createElement('h2');
        this.state = document.createElement('h2');
        this.country = document.createElement('h2');

        this.id.innerHTML = 'ID: ' + this.venue.id;
        this.name.innerHTML = 'Name: ' + this.venue.name;
        this.address.innerHTML = 'Address: ' + this.venue.address;
        this.lat.innerHTML = 'Latitude: ' + this.venue.lat;
        this.lng.innerHTML = 'Longitude: ' + this.venue.lng;
        this.city.innerHTML = 'City: ' + this.venue.city;
        this.state.innerHTML = 'State: ' + this.venue.state;
        this.country.innerHTML = 'Country: ' + this.venue.country;

        if (this.venue.city == undefined) {
            this.city.innerHTML = 'City: Desconocido';
        }

        if (this.venue.state == undefined) {
            this.state.innerHTML = 'State: Desconocido';
        }

        if (this.venue.country == undefined) {
            this.country.innerHTML = 'Country: Desconocido';
        }

        this.container.appendChild(this.id);
        this.container.appendChild(this.name);
        this.container.appendChild(this.address);
        this.container.appendChild(this.lat);
        this.container.appendChild(this.lng);
        this.container.appendChild(this.city);
        this.container.appendChild(this.state);
        this.container.appendChild(this.country);

        document.body.appendChild(this.container);

    }
}