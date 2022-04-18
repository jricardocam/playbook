const issue={
    title:"Live 2",
    repositoryNameAssociated:"LaunchX",
    status:"Open",
    numberOfComments:25,
    labels:2,
    author:"carlogilmar",
    dateCreated:"14/04/2022",
    lastUpdated:"Yesterday",
    getTitleAndAuthor: function(){
        return `Author: ${this.author}`
    },
    getGeneralInfo: function(){
        return `This issue was created by ${this.author} on ${this.dateCreated}`
    }
}

console.log("Nombre del issue:" + issue.title)
console.log(issue.getGeneralInfo())