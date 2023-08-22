function addUser()
{
    user_name = document.getElementById("user_name").ariaValueMax;

    localStorage.setItem("user_name" , user_name)

    window_location = "kwitter_room.html"
}

