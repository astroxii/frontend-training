export default class User
{
    constructor()
    {
        this.isNew = true;
        this.username = null;
        this.preferences = 
        {
            sidenav: true,
            startView: "Welcome",
            theme: "dark"
        };
        this.todos = [];
        this.reminders = [];
    }
}