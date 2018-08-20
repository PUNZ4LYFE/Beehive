/**
* @name NewPostComponent
* @extends
* @file newPostComponent.js
* @author Esteban Padilla <ep@estebanpadilla.com>
* @version 1.0.0
*/
class NewPostComponent {
	constructor(dataManager) {
		//super(model, parent, dataManager);

		this.title = document.getElementById('postTitle').value;
		this.body = document.getElementById('postBody').value;
		this.okBtn = document.getElementById('agregarPost');
		this.dataManager = dataManager;

		this.okBtn.onclick = this.okBtnClick.bind(this);

		this.postsCounter = 100000;
	}

	okBtnClick(e) {

		this.postsCounter++;

		var post = {
			userId: 11,
			id: this.postsCounter,
			title: this.title,
			body: this.body,
			comments: []
		}

		//POST REQUEST
		if (this.dataManager.user.posts) {
			this.dataManager.user.posts.push(post);
		} else {
			this.dataManager.user.posts = [];
			this.dataManager.user.posts.push(post);
		}

		//POST REQUEST CALLBACK
		this.dataManager.navManager.showBeePosts();

		e.preventDefault();
	}
}