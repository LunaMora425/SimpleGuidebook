/** Navigate tabs of the Guidebook
 * This is the same code as SimpleGuidebook.js, but written in jQuery instead of vanilla JavaScript.
 * You can choose whichever version you like more to use.
 */

// it is really important that your scripts are scoped to ONLY run on the spots where they're needed
// in this case, the guidebook navigation should ONLY ever run on a jcink webpage
// where the guidebook is present
if ($('#guidebook-container').length > 0) {
  // get ALL of your guidebook sections with the .guidebook-content class
  const guidebookSections = $('.guidebook-content');
  // get ALL of your guidebook links
  const guidebookLinks = $('#guidebook-menu ul li a');

  /** Navigate Tab on Menu Click */
  // for each guidebook link on the list
  guidebookLinks.on('click', function (e) {
    e.preventDefault(); // prevent it from acting like a link, aka reloading the page
    const tabName = $(this).attr('href').replace('#', ''); // grab the name of the tab from the link
    history.pushState(null, '', '#' + tabName); // this changes the URL in the address bar without reloading the page
    activateTab(tabName); // show the right tab on the screen
  });

  /** Navigate Tab on Page Load */
  // if there's a hash in the URL
  if (window.location.hash) {
    const tabName = window.location.hash.replace('#', ''); // grab the name of the tab from the link
    activateTab(tabName); // show the right tab on the screen
  }

  /** Helper Function to Change Tabs */
  function activateTab(tabName) {
    // for each guidebook section
    guidebookSections.removeClass('active'); // remove the active class from whichever section is currently shown
    // if the section ID has the same name as the tab we want to show
    $('#' + tabName).addClass('active'); // add the active class to that section

    // for each guidebook link
    guidebookLinks.removeClass('active'); // remove the active class from whichever link is currently active
    // if the link's href has the same name as the tab we want to show
    guidebookLinks.filter('[href="#' + tabName + '"]').addClass('active'); // add the active class to that link
  }
}
