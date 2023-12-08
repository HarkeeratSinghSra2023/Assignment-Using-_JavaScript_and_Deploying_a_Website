// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
const submit_button = document.getElementById('submit-button');
const contact_page = document.getElementById('contact-page');

submit_button.addEventListener('click', function(event) 
{

event.preventDefault();
  //So Now A html element has to be created for applying the CSS.
  const message = document.createElement('p');
  //Set the content of created html element with string variable "Thank you for your message"
  message.textContent = 'Thank you for your message';
  //No we Set the font size for the created html element
  message.style.fontSize = '24px';
   // We will Clear the inner HTML of the contactPage element
  contact_page.innerHTML = '';
  // Now Append the message element to contactPage element
  contact_page.appendChild(message);
});
