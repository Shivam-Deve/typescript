let phone = document.getElementById('phone') as HTMLInputElement;

// OR

phone = <HTMLInputElement>document.getElementById('phone');

// now we can see properties related to input elements
phone.value; // for example