function skillsMember()
{
    // Creating an array of skills
    var skills = ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Python", "Ruby", "C++", "C#", "Java", "Swift"];
    // Creating a variable to store the text
    var text = "";
    // Looping through the skills array
    for (var i = 0; i < skills.length; i++)
    {
        // Storing the text
        text += skills[i] + "<br>";
    }
    // Returning the text
    return text;
}