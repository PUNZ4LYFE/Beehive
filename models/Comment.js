class Comment {
	constructor(body, owner, timestamp) {
        this.body = body;
        this.owner = owner;
        if(timestamp==null){     
                this.timestamp = new Date();
        } else{
                this.timestamp = new Date(timestamp);

        }
	}

	
}