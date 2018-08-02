/**
* @name NavManager
* @extends
* @file navManager.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class NavManager {
	/**
	* @param {data type} name - description.
	*/
	constructor(dataManager) {
		this.dataManager = dataManager;
		this.beesComponent = document.getElementById('beesComponent');
		this.postsComponent = document.getElementById('postsComponent');
		this.todosCompoment = document.getElementById('todosCompoment');
		this.todosCompoment.hidden = true;
	}

	showBees() {
		this.dataManager.bees.forEach(bee => {
			var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
		});
	}

	showBeePosts() {
		this.postsComponent.hidden = false;
		this.todosCompoment.hidden = true;

		this.postsComponent.innerHTML = '';

		var tituloPosts = document.createElement('h2');
		tituloPosts.innerHTML = 'Posts'
		tituloPosts.className = 'h2bees';
		document.getElementById('postsComponent').appendChild(tituloPosts);



		this.dataManager.selectedBee.posts.forEach(post => {
			var postComponent = new PostComponent(post, this.postsComponent, this.dataManager);
		})
	}

	showBeeTodos() {
		this.postsComponent.hidden = true;
		this.todosCompoment.hidden = false;
		this.todosCompoment.innerHTML = '';


		var tituloTodos = document.createElement('h2');
		tituloTodos.innerHTML = 'To Dos'
		tituloTodos.className = 'h2bees';
		document.getElementById('todosCompoment').appendChild(tituloTodos);


		this.dataManager.selectedBee.todos.forEach(todo => {
			var todoComponent = new TodoComponent(todo, this.todosCompoment, this.dataManager);
		})
	}
}