const slider = 
{
    element: document.getElementById("slider"),
    currentSlide: 0,
    next: function()
    {
        if(this.currentSlide < 2)
        {this.currentSlide++;}
        else
        {this.currentSlide = 0;}

        this.updateSlide();
    },
    prev: function()
    {
        if(this.currentSlide > 0)
        {this.currentSlide--;}
        else
        {this.currentSlide = 2;}

        this.updateSlide();
    },
    updateSlide: function()
    {this.element.style.backgroundImage = `url(./images/slide${this.currentSlide+1}.jpg)`;}
}