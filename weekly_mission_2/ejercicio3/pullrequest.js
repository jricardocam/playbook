class PullRequest{
    constructor(
        title,
        branchName,
        dateCreated,
        status,
        repositoryNameAssociated,
    ){
        this.title=title,
        this.branchName=branchName,
        this.dateCreated=dateCreated,
        this.status=status,
        this.repositoryNameAssociated=repositoryNameAssociated
    }
}
console.log(PullRequest)
const pull1=new PullRequest("New Pull","New Branc","19/04/2022","Open","RepoNAme")
console.log(pull1)
