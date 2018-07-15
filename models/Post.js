class Post {
	constructor(fbkey, ptitle, pbody, bee, ptimestamp, comments) {
        this.fbkey = fbkey;
        this.title = ptitle;
        this.body = pbody;
        this.bee = bee;
        this.comments = comments;
        if(ptimestamp==null){     
                this.timestamp = new Date();
        } else{
                this.timestamp = new Date(ptimestamp);

        }

        if(this.bee.name === 'Karla'){
                this.editable = true;
        }

	}

	
}