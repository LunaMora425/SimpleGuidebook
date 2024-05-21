/* Navigate tabs of the Guidebook */

// it is really important that your scripts are scoped to ONLY run on the spots where they're needed
// in this case, the guidebook navigation should ONLY ever run on a jcink webpage
// this code assumes your board wrappers are using <body id="<!-- |input_act| -->"> and so says
// "if the body has an id of 'Pages', then run this code",
// but if not, you should adjust accordingly
if ($('body#Pages').length > 0) {
  // get ALL of your guidebook sections with the .guidebook-content class
  const guidebookContents = document.querySelectorAll('.guidebook-content');
  // get ALL of your guidebook links
  const guidebookLinks = document.querySelectorAll('#guidebook-menu ul li a');

  // for each guidebook link from the list
  guidebookLinks.forEach((guidebookLink) => {
    // add an event listener to work on click
    guidebookLink.addEventListener('click', function (e) {
      // stop it from acting like a link
      e.preventDefault();
      // get the name of the tab that was clicked
      const tabSelected = this.getAttribute('href').replace('#', '');

      // remove the active class from all guidebook content and links
      guidebookContents.forEach((guidebookContent) => {
        guidebookContent.classList.remove('active');
      });

      guidebookLinks.forEach((guidebookLink) => {
        guidebookLink.classList.remove('active');
      });

      // add the active class to the link itself
      this.classList.add('active');
      // add the active class to the guidebook content with the same name as the link clicked
      document.getElementById(tabSelected).classList.add('active');
    });
  });
}
