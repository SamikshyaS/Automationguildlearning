class form {
    submit() {
        alert(this.name + " : Your form has been submitted sucessfully and your form number is " + this.formno)
    }
    cancel() {
        alert(this.name + " has cancelled the form" + this.formno)
    }
    fill(givenname, formno) {

        //yo call garyo vani esle name dincha
        this.name = givenname
        //yo chai form number halna
        this.formno = formno
    }
}
//Create a from for "user"
let anjeelaForm = new form()

anjeelaForm.fill("Anjeela", 2444)

let bhumikaForm = new form()
bhumikaForm.fill("Bhumika", 1443)

anjeelaForm.submit()
bhumikaForm.submit()
bhumikaForm.cancel()