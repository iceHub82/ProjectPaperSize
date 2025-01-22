// Handle changes to the page size radio buttons
document.querySelectorAll('input[type=radio][name=pageSize]').forEach(function (radio) {
  radio.addEventListener('change', function () {
    var page = document.querySelector('page');
    switch (this.value) {
      case 'A5':
        page.setAttribute('size', 'A5');
        break;
      case 'A4':
        page.setAttribute('size', 'A4');
        break;
      case 'A3':
        page.setAttribute('size', 'A3');
        break;
    }
  });
});

// Handle changes to the page layout radio buttons
document.querySelectorAll('input[type=radio][name=pageLayout]').forEach(function (radio) {
  radio.addEventListener('change', function () {
    var page = document.querySelector('page');
    switch (this.value) {
      case 'portrait':
        page.setAttribute('layout', 'portrait');
        break;
      case 'landscape':
        page.setAttribute('layout', 'landscape');
        break;
    }
  });
});

// Handle changes to the dark mode toggle switch
document.querySelector('#darkmodeSwitch').addEventListener('change', function () {
  document.body.classList.toggle('dark-body');
});
