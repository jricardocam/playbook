class User {
    constructor(id,username,name,bio,dateCreated,lastUpdated){
        this.id=id
        this.username=username
        this.name=name
        this.bio=bio
        this.dateCreated=dateCreated
        this.lastUpdated=lastUpdated
        }
}
module.exports = User

const user1 = new User(1,"username","name","bio","dateCreated","lastUpdated")
console.log(user1)
