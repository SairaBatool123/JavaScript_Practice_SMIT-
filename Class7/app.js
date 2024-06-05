// ****************************Class # 7*******************************

var courses = ["Gaditeck", "Techno Kids", "digital marketing", "Web development", "Graphic Designing", "3D Animation"];
document.write(courses)
document.write("<br>")
courses.push("Designing")
document.write(courses)
document.write("<br>")
courses.pop()
document.write(courses)
document.write("<br>")
courses.shift()
document.write(courses)
document.write("<br>")
courses.unshift("New course")
document.write(courses)
document.write("<br>")

//SPLICE
courses.unshift("New course")
document.write(courses)
document.write("<br>")
//SLICE
courses.unshift("New course")
document.write(courses)

document.write("<select>" +
    '<option  value= '+courses[1]+'>' + courses[1] + '</option>'
    + "</select>")
document.write("<br>")


