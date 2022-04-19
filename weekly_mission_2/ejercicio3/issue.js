class Issue{
    constructor(
        title,
        repositoryNameAssociated,
        status,
        numberOfComments,
        labels,
        author,
        dateCreated,
        lastUpdated,        
    ){
        this.title=title,
        this.repositoryNameAssociated=repositoryNameAssociated,
        this.status=status,
        this.numberOfComments=numberOfComments,
        this.labels=labels,
        this.author=author,
        this.dateCreated=dateCreated,
        this.lastUpdated=lastUpdated
    }
    getTitleAndAuthor(){
        return `Author: ${this.author}`
    }
    getGeneralInfo(){
        return `This issue was created by ${this.author} on ${this.dateCreated}`
    }
}

console.log(Issue)
const issue1=new Issue("Live2","Launchx","Open",25,2,"carlogilmar","14/04/2022","Yesterday")
console.log(issue1)
console.log("Nombre del issue:" + issue1.title)
console.log(issue1.getGeneralInfo())