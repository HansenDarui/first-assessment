/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////



/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

var gitDefinition

gitDefinition = ("Git provides command line in a clean way, allowing you to access files and send them to GitHub")
  console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

var gitHubDefinition = ("GitHub is a website coders use to store and share code, it uses the cloud to store your code.")
    console.log(gitHubDefinition)

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

var init = ("'Description: This is what initializes a local repository where you currently are in git', 'Code: git init'")
    console.log(init)

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

var clone = ("'Description: takes a existing repository and copies it to your directory', 'Code: git clone'")
    console.log(clone)

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

var status = ("'Description: tell me about this repository', 'Code: git status'")
  console.log(status)

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

var add = ("'Description: Adds a file to be tracked', 'Code: git add fileName'")
    console.log(add)

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

var commit = ("'Description: Create a snapshot of the files im tracking', 'Code: git commit -m'")
    console.log(commit)

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

var push = ("'Description: Uploads local file or folder to remote repository', 'Code: git push'")
    console.log(push)