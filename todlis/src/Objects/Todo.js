export default class Todo
{
    constructor(title = "", color = "#c34bff")
    {
        this.title = title;
        this.start = new Date();
        this.deadline = new Date();
        this.content = [];
        this.color = color;
    }
}