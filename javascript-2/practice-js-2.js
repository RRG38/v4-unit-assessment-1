/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = 'Git is a version control system used to track the progress of our projects. It allows us to commit changes at various points in the development process.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = 'GitHub is the website where our git repositories are stored. To store our code remotely, we can "push" our commits to github.'

//////////////////PROBLEMS 3 - 9////////////////////
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
let init = {
    description: 'initializes git in your current repository. This means that git will start watching all of the files and directories in that location.tiates git',
    code: 'git init'
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description: 'We are able to easily make copies of existing repositories on GitHub, this is called cloning. First you need to copy the url for the github repo that you wish to clone down to your local machine then navigate to the directory that you want to clone the repo into. Once you are in the correct directory run:',
    code: 'git clone <url>'
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let status = {
    description: 'to check what stage of the process you are on to push your code to github',
    code: 'git status'
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description: ' tells git to track any changes that have been made. This is the command you can run to start the process of pushing your code to github.',
    code: 'git add .'
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {
    description: 'After staging your code using git add . we now need to commit our changes. This is the final step we will take before pushing our code to github. Think about commits as check points or save points in your code. You will need to provide a message about the commit using the -m flag.',
    code: 'git commit -m"message of your changes"'
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE


//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    description: 'After staging and commiting your code, it is now ready to be pushed up to github. When your code is ready to be pushed, run:',
    code: 'git push origin master'
}
