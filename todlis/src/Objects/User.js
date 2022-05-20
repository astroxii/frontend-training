export default class User
{
    constructor()
    {
        this.isNew = true;
        this.username = null;
        this.preferences = 
        {
            sidenav: true,
            startScreen: "Welcome"
        };
        this.todos = [];
        this.reminders = [];
    }
}