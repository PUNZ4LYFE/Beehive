class NetManager {
	constructor(dataManager, navManager) {
		this.dataManager = dataManager;
		this.navManager = navManager;
		this.url = 'http://localhost:3000';
	}

	init() {
		this.requestCategories();
		this.requestData();
	}

	requestData() {
		var request = new XMLHttpRequest();

		request.open('GET', this.url + '/data', true);
		request.setRequestHeader('Access-Control-Allow-Origin', '*');

		request.onreadystatechange = this.requestDataCallback.bind(this);
		request.send();
	}

	requestDataCallback(e) {
		var request = e.target;
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var data = JSON.parse(request.responseText);
				//var venueJSON = JSON.stringify(data);

				var arrayVenues = this.navManager.showData(data);
				this.updateJsons(arrayVenues);

			} else {
				console.log('Error on request');
			}
		}
	}

	updateJsons(data) {
		var request = new XMLHttpRequest();
		request.open('POST', this.url + '/data', true);
		request.setRequestHeader('Access-Control-Allow-Origin', '*');
		request.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
		request.onreadystatechange = this.updateJsonsCallback;
		request.send(JSON.stringify(data));
	}

	updateJsonsCallback(event) {
		var request = event.target;
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				requestData();
			}
		}
	}




	requestCategories() {
		var request = new XMLHttpRequest();

		request.open('GET', this.url + '/categories', true);
		request.setRequestHeader('Access-Control-Allow-Origin', '*');

		request.onreadystatechange = this.requestCategoriesCallback.bind(this);
		request.send();
	}

	requestCategoriesCallback(e) {
		var request = e.target;
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var data = JSON.parse(request.responseText);
				//var venueJSON = JSON.stringify(data);

				var arrayCategories = this.navManager.showCategories(data);
				this.updateJsonsCategories(arrayCategories);

			} else {
				console.log('Error on request');
			}
		}
	}

	updateJsonsCategories(data) {
		console.log('Here: ' + data);

		var request = new XMLHttpRequest();
		request.open('POST', this.url + '/categories', true);
		request.setRequestHeader('Access-Control-Allow-Origin', '*');
		request.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
		request.onreadystatechange = this.updateJsonsCategoriesCallback;
		request.send(JSON.stringify(data));
	}

	updateJsonsCategoriesCallback(event) {
		var request = event.target;
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				requestData();
			}
		}
	}






}