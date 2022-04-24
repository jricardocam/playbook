const User =require('./../models/User')

class UserService {
    static create(id,username,name){
        return new User(id,username,name,"Sin bio")
        }
        static getInfo(user){
            //This requirement can also be solved by returning an explicit list.->return  [user.id, id.username, user.name, user.bio]
            return Object.values(user)
        }
        static updateUserUsername(user,newUsername){
            return user.username =newUsername
        }
}
module.exports = UserService
