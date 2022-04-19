const PullRequest ={
    title:"New Pull",
    branchName:"Main",
    dateCreated:"16/04/2022",
    status:"Open",
    repositoryNameAssociated:"Name Repo",
    getStatus: function(){
        return `Pull request status "${this.status}"`
    },
    getTitleAndName: function(){
        return `Title: ${this.title} RepoName: ${this.repositoryNameAssociated}`
    }
}

console.log("Objeto Pull Request")
console.log(PullRequest.getStatus())
console.log(PullRequest.getTitleAndName())