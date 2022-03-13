document.addEventListener('DOMContentLoaded', function() {
  const btns = document.querySelectorAll('.tabs-list__btn');

  btns.forEach(function(tabsBTN) {
    tabsBTN.addEventListener('click', function(event){
      const path = event.target.dataset.path;

      document.querySelectorAll('.tabs-content').forEach(function(tabContent) {
        tabContent.classList.remove('tabs-content-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content-active');

      btns.forEach(function (btn) {
        btn.classList.remove('active');
      });

      this.classList.add('active');
    })
  })
})
