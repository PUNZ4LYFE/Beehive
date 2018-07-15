class ToDo {
	constructor(title, body, owner, timestamp) {
        this.title = title;
        this.body = body;
        this.owner = owner;
        if(ptimestamp==null){     
                this.timestamp = new Date();
        } else{
                this.timestamp = new Date(timestamp);

        }
	}

	
}