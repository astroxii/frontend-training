export default class Todo
{
    constructor(title = "", color = "#c34bff", id)
    {
        this.title = title;
        this.start = new Date();
        this.deadline = new Date();
        this.content = [];
        this.color = color;
        this.id = id;
    }
}