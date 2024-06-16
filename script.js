// script.js
document.addEventListener('DOMContentLoaded', function() {
  const openBoxBtn = document.getElementById('open-box-btn');
  const giftContent = document.getElementById('gift-content');

  openBoxBtn.addEventListener('click', function() {
    openBoxBtn.style.display = 'none';
    giftContent.style.display = 'block';
  });
});
