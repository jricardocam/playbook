class User {
    constructor(id,username,name,bio,dateCreated,lastUpdated){
        this.id=id
        this.username=username
        this.name=name
        this.bio=bio
        this.dateCreated=new Date()
        this.lastUpdated=new Date()
        }
    get getId(){
        return this.id
    }
    get getUsername(){
        return this.username
    }
    get getName(){
        return this.name
    }
    get getBio(){
        return this.bio
    }
    set setUserName(newUserName){
        this.username=newUserName
    }
    set setBio(newBio){
        this.bio=newBio
    }
}
module.exports = User

const user1 = new User(1,"username","name","bio","dateCreated","lastUpdated")
console.log(user1)
