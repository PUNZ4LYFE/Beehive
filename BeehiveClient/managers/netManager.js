/**
* @name NetManager
* @extends
* @file netManager.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class NetManager {
	constructor(dataManager, navManager) {
		this.dataManager = dataManager;
		this.navManager = navManager;
		this.url = 'http://localhost:3000';

	}

	init() {
		this.requestUsers();
	}

	requestUsers() {
		var request = new XMLHttpRequest();
		//request.open('GET', './data/users.json', true);

		request.open('GET', this.url + '/users', true);
		request.setRequestHeader('Access-Control-Allow-Origin', '*'); //solicitar permiso porque viene de otro dominio

		request.onreadystatechange = this.requestUsersCallback.bind(this);
		request.send();
	}

	requestUsersCallback(e) {
		var request = e.target;
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				//console.log(this);
				var bees = JSON.parse(request.responseText);
				for (const id in bees) {
					this.dataManager.bees.push(bees[id]);
				}

				this.requestPosts();
				this.requestTodos();
				this.navManager.showBees();

			} else {
				console.log('Error on request');
			}
		}
	}

	requestPosts() {
		var request = new XMLHttpRequest();
		//request.open('GET', './data/posts.json', true);

		request.open('GET', this.url + '/posts', true);
		request.setRequestHeader('Access-Control-Allow-Origin', '*'); //solicitar permiso porque viene de otro dominio


		request.onreadystatechange = this.requestPostCallback.bind(this);
		request.send();
	}

	requestPostCallback(e) {
		var request = e.target;
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var posts = JSON.parse(request.responseText);
				for (const id in posts) {
					this.dataManager.addPostToBee(posts[id]);
				}
				this.requestComments();
			} else {
				console.log('Error on request');
			}
		}
	}

	requestComments() {
		var request = new XMLHttpRequest();
		//request.open('GET', './data/comments.json', true);

		request.open('GET', this.url + '/comments', true);
		request.setRequestHeader('Access-Control-Allow-Origin', '*'); //solicitar permiso porque viene de otro dominio

		request.onreadystatechange = this.requestCommentsCallback.bind(this);
		request.send();
	}

	requestCommentsCallback(e) {
		var request = e.target;
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var comments = JSON.parse(request.responseText);
				for (const id in comments) {
					this.dataManager.addCommentToPost(comments[id]);
				}

				//HACK
				this.dataManager.selectedBee = this.dataManager.bees[1];
				this.navManager.showBeePosts();

			} else {
				console.log('Error on request');
			}
		}
	}

	requestTodos() {
		var request = new XMLHttpRequest();
		//request.open('GET', './data/todos.json', true);
		request.open('GET', this.url + '/todos', true);
		request.setRequestHeader('Access-Control-Allow-Origin', '*'); //solicitar permiso porque viene de otro dominio

		request.onreadystatechange = this.requestTodosCallback.bind(this);
		request.send();
	}

	requestTodosCallback(e) {
		var request = e.target;
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var todos = JSON.parse(request.responseText);
				for (const id in todos) {
					this.dataManager.addTodoToBee(todos[id]);
				}
			} else {
				console.log('Error on request');
			}
		}
	}




	postPost(event) {
		var title = document.getElementById('postTitle').value;
		var body = document.getElementById('postBody').value;
		var post = {
			userId: 11,
			id: this.postsCounter,
			title: title,
			body: body,
			comments: []
		}
		var request = new XMLHttpRequest();
		//this.url = 'http://localhost:3000';
		request.open('POST', this.url + '/posts', true);
		request.setRequestHeader('Access-Control-Allow-Origin', '*');
		request.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
		request.onreadystatechange = this.sendPostCallback;
		request.send(JSON.stringify(post));
		document.getElementById('postTitle').value = '';
		document.getElementById('postBody').value = '';
		this.navManager.showBeePosts;
	}

	sendPostCallback(event) {
		var request = event.target;
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				//requestAllPosts();
			}
		}
	}







	postTodo(event) {
		var title = document.getElementById('inputTodo').value;
		var todo = {
			userId: 11,
			id: this.postsCounter,
			title: title,
			completed: false
		}
		var request = new XMLHttpRequest();
		this.url = 'http://localhost:3000';
		request.open('POST', this.url + '/todos', true);
		request.setRequestHeader('Access-Control-Allow-Origin', '*');
		request.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
		request.onreadystatechange = this.sendTodoCallback;
		request.send(JSON.stringify(todo));
		document.getElementById('inputTodo').value = '';
		this.navManager.showBeePosts;
	}

	sendTodoCallback(event) {
		var request = event.target;
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				//requestAllPosts();
			}
		}
	}

}