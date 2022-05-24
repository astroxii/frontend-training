export default class Todo
{
    constructor(title = "", deadline)
    {
        this.title = title || null;
        this.start = new Date();
        this.deadline = deadline;
    }
}