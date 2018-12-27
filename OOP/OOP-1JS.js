var customer = {
	name: "Gio",
	speak: function(){
		return "My name is " = this.name;
	},
	address: {
		street: "123 Main",
		city: "Phoenix",
		state: "AZ"
	}
};

document.write(customer.speak()+ "<br />");
document.write(customer.name + " lives at " + customer.address.street + "<br />");

customer.address.country = "US";

document.write(customer.address.country);

function Person(name,street){
	this.name = name;
	this.street = street;

	this.info = function(){
		return "hey";
	}
}