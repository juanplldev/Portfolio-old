export function scrollToAbout()
{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

export function scrollToStack()
{
    window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
    });
};

export function scrollToProjects()
{
    if(window.innerWidth <= 1024)
    {
        window.scrollTo({
            top: window.innerHeight * 3,
            left: 0,
            behavior: "smooth",
        });
    }
    else
    {
        window.scrollTo({
            top: window.innerHeight * 2 - 70,
            left: 0,
            behavior: "smooth",
        });
    };
};

export function scrollToContact()
{
    if(window.innerWidth <= 1024)
    {
        window.scrollTo({
            top: window.innerHeight * 5,
            left: 0,
            behavior: "smooth",
        });
    }
    else
    {
        window.scrollTo({
            top: window.innerHeight * 3,
            left: 0,
            behavior: "smooth",
        });
    };
};