class Employee {
    constructor() {
        var name;
        var rating;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getRating() {
        return this.rating;
    }
    setRating(rating) {
        this.rating = rating;
    }
}
var emp = new Employee();
emp.setName("Samikshya ko rating chai");
emp.setRating(10);
document.writeln(emp.getName() + " " + emp.getRating());