

const fstPerson = {
    fname: "Sreelekha",
    lname: "Kutikanti",
    printFullName: function (hometown, state) {
        console.log(this.fname + " " + this.lname + " from " + hometown + ", " + state)
    }
}

fstPerson.printFullName("Bangalore","Karnataka")

const secPerson = {
    fname: "Srinu",
    lname: "Kutikanti"
}

fstPerson.printFullName.call(secPerson, "Hyderabad", "Telangana")

fstPerson.printFullName.apply(secPerson, ["Hyderabad", "Telangana"])

const printMyName=fstPerson.printFullName.bind(secPerson,"Mumbai")
printMyName("Maharshtra")
