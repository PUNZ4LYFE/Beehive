class BeeComponent {
	constructor(bee) {
        this.bee = bee;
        //this.postUIkey = post.fbkey;

        this.container = document.createElement('div');
        this.title = document.createElement('h2');
        this.body = document.createElement('p');
        this.postsButton = document.createElement('input');
        this.postsButton.type = 'button';
        this.postsButton.value = 'Posts';
        this.todosButton = document.createElement('input');
        this.todosButton.type = 'button';
        this.todosButton.value = 'To Dos';

        this.postsButton.onclick = showPosts;

        function showPosts(event){
                var currentbee = event.path[1].bee;
                console.log(event.path[1].bee.posts[0]);
                for(var i = 0; i > currentbee.posts.length; i++){
                        var postTestUI = new PostComponent(event.path[1].bee.posts[0]);
                }             
        }

        this.container.appendChild(this.title);
        this.container.appendChild(this.body);
        this.container.appendChild(this.postsButton);
        this.container.appendChild(this.todosButton);

        this.title.innerText = this.bee.name;
        this.body.innerText = this.bee.username + '\n' + this.bee.email + '\n' + this.bee.phone + '\n' + this.bee.address.geo.geo;
        this.container.classList = 'beeStyle';
        //if(this.post.editable == true){
        //        this.container.classList.add('editable');
        //}

        this.container.bee = this.bee;
        document.getElementById('bees').appendChild(this.container);
	}

	
}