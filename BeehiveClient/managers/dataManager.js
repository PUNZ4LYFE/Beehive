/**
* @name DataManager
* @extends
* @file dataManager.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class DataManager {
	/**
	* @param {data type} name - description.
	*/
	constructor() {
		this.bees = [];
		this.user = {
			"id": 11,
			"name": "Karla Porras",
			"username": "PUNZ4LYFE",
			"email": "kporras@logosoftla.com",
			"address": {
				"street": "Villa de Tulín",
				"suite": "24F",
				"city": "San José",
				"zipcode": "11702",
				"geo": {
					"lat": "-37.3159",
					"lng": "81.1496"
				}
			},
			"phone": "83466643",
			"website": "",
			"company": {
				"name": "Logosoft",
				"catchPhrase": "Hacemos que su empresa gane",
				"bs": "idk lol"
			}
		};
		this.selectedBee = null;
		this.navManager = null;
		this.netManager = null;
	}

	addPostToBee(post) {
		this.bees.forEach(bee => {
			if (bee.id == post.userId) {
				if (bee.posts) {
					bee.posts.push(post);
					return;
				} else {
					bee.posts = [];
					bee.posts.push(post);
					return;
				}
			}
		});
	}

	addCommentToPost(comment) {
		this.bees.forEach(bee => {
			bee.posts.forEach(post => {
				if (post.id == comment.postId) {
					if (post.comments) {
						post.comments.push(comment);
					} else {
						post.comments = [];
						post.comments.push(comment);
					}
				}
			});
		});
	}

	showSelectedBeePosts(bee) {
		this.selectedBee = bee;
		this.navManager.showBeePosts();
	}

	showSelectedBeeTodos(bee) {
		this.selectedBee = bee;
		this.navManager.showBeeTodos();
	}

	addTodoToBee(todo) {
		this.bees.forEach(bee => {
			if (bee.id == todo.userId) {
				if (bee.todos) {
					bee.todos.push(todo);
					return;
				} else {
					bee.todos = [];
					bee.todos.push(todo);
					return;
				}
			}
		});
	}

}