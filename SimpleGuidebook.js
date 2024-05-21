/* Navigate tabs of the Guidebook */

if ($('body#Pages.act-Pages').length > 0) {
  const guidebookContents = document.querySelectorAll('.guidebook-content');
  const guidebookLinks = document.querySelectorAll('#guidebook-menu ul li a');

  guidebookLinks.forEach((guidebookLink) => {
    guidebookLink.addEventListener('click', function (e) {
      e.preventDefault();
      const tabSelected = this.getAttribute('href').replace('#', '');

      guidebookContents.forEach((guidebookContent) => {
        guidebookContent.classList.remove('active');
      });

      guidebookLinks.forEach((guidebookLink) => {
        guidebookLink.classList.remove('active');
      });

      this.classList.add('active');
      document.getElementById(tabSelected).classList.add('active');
    });
  });
}
