/**
* @name TodoComponent
* @extends
* @file postComponent.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class TodoComponent extends Component {

	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);
		this.container.className = 'todoComponent';

		//Create html elements
		this.title = document.createElement('h3');
		this.completed = document.createElement('h3');

		//Add html elements
		this.container.appendChild(this.title);
		this.container.appendChild(this.completed);

		if (this.model.completed) {
			var estado = 'Completado';
		} else {
			var estado = 'Sin completar';
		}


		//Add data to html elements
		this.title.innerHTML = 'To do: ' + this.model.title;
		this.completed.innerHTML = 'Estado: ' + estado;

	}
}