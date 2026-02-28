let todo = [];

let req = prompt("please enter your request");

while(req!="quit")
{

    if(req == "list")
    {
        console.log("------------");
        for(task of todo)
        {
            console.log(task)
        }
        console.log("------------");
    }
    else if(req == "add"){
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete")
    {
        let task = prompt("please enter the task you want to add");
        let index = todo.indexOf(task);
        if(index >= 0)
        {
            todo.splice(index, 1);
            console.log("task deleted")
        }
        else{
            console.log("task that you are asking me to delete is invalid");
        }
    }
    else{
        console.log("Wrong request");
    }

    req = prompt("please enter your request");
}