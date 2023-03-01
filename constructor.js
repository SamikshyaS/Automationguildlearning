class form {
    constructor(givenname, formno) {
        console.log("Construstor calling..." + givenname + " " + formno)

        this.name = givenname
        this.formno = formno
    }
    submit() {
        alert(this.name + " : Your form has been submitted sucessfully and your form number is " + this.formno)
    }
    cancel() {
        alert(this.name + " your form " + this.formno + " has been cancelled")
    }

}
//Create and fill a from for "user"
let anjeelaForm = new form("Anjeela", 1234)
let bhumikaForm = new form("Bhumika", 13223)
anjeelaForm.submit()
bhumikaForm.submit()
bhumikaForm.cancel()