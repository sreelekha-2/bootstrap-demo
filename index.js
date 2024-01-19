

const calculator = (() => {

    const x = 5
    return {
        add: function (a, b) {
            return a + b + x
        },
        sub: function (a, b) {
            return a - b
        },
    }
})()

console.log(calculator.add(2, 1))

let count = 0;
const task1 = (cb1) => {
    count += 1
    setTimeout(() => {
        console.log("task1 completed")
        cb1(count)
    }, 2000)
}

const task2 = (countFromTask1, cb2) => {
    setTimeout(() => {
        console.log("task2 completed", countFromTask1)
        cb2()
    }, 2000)
}
const task3 = () => {
    setTimeout(() => {
        console.log("task3 completed")
        // cb3()
    }, 2000)
}
task1((countFromTask1) => {
    task2(countFromTask1, () => {
        task3()
    }
    )
})

// task1(task2(task3))

var a = 20;
function demo() {
    var a = 5;
    console.log(a)
}
demo()
console.log(a)


const person1 = {
    name: "sree",
    age: 20
}
const person2 = person1
console.log(person1)
console.log(person2)

person2.name = "sreelekha"
console.log(person1)
console.log(person2)

const obj1 = {
    fname: "lekha",
    age: 25, getName: () => {
        console.log(fname)
    },
    address: {
        city: "pune"
    }
};
let obj2 = { ...obj1 }
obj2.fname = "lekhasree"
// obj2.address.city="mumbai"//here obj1 address also get changes
obj2 = { ...obj2, address: { city: "mumbai" } }
console.log(obj1)
console.log(obj2)

function sum(a) {
    return (b) => {
        return (c) => {
            if (c) {

                return a + b + c
            }
        }
    }
}

console.log(sum(1)(2)(3))
const arr = [10, 20, 30, 40, 20]
const filteredArr = arr.filter((item, i) => arr.indexOf(item) === i)
console.log(filteredArr)


const str = "arfra"
const len = parseInt(str.length / 2)
console.log(len)
const checkPalindrome = (str) => {

    for (let i = 0; i < len; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return "It is not palindrome"
        }
    }
    return "It is palindrome"
}

console.log(checkPalindrome(str))

const arr2 = [23, 43, 53, 63]
// arr2.forEach(item=>)

const atm = ((initialBalance) => {
    let balance = initialBalance
    function withdraw(amount) {
        if (balance >= amount) {
            balance -= amount
            return balance
        }
        return "Insufficient Balance"
    }
    return { withdraw };

})(1000)

console.log(atm.withdraw(400))
console.log(atm.withdraw(400))
console.log(atm.withdraw(400))

const fetchUsers = () => {
    console.log("called")
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => console.log(data))
}

const debounce = (func, delay) => {
    console.log("debounce...")
    let timer;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func()
        }, delay)
    }
}

// const onSearch = () => {
//     const searchInput = document.getElementById("searchInput")
//     console.log(searchInput.value)
//     // fetchUsers()

//     debounce(fetchUsers, 300)

// }
const throttle=(func,delay)=>{
    let flag=true
    return function(){
      if(flag){
        func()
        flag=false
        setTimeout(()=>{
           flag=true
        },delay)
      }
    }
}

const betterDebounceFunction = debounce(fetchUsers, 300)
const betterThrottleFunction= throttle(fetchUsers, 1000)

document.getElementById("searchInput").addEventListener("keyup",betterDebounceFunction)

window.addEventListener("resize",betterThrottleFunction)



// throw new Error("error... is occured")




