class Bee {
        constructor(name, username, email, phone, address, company, toDo, posts) {
                this.name = name;
                this.username = username;
                this.email = email;
                this.phone = phone;
                this.address = new Address(address);
                this.company = new Company(company);
                this.toDo = toDo;
                this.posts = posts;
        }
}