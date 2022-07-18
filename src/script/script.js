const app = {
  moreInfo: null,
  popupWindow: null,
  closeButton: null,
  init() {
    this.moreInfo = document.getElementById('moreInfo');
    this.popupWindow = document.getElementById('popup');
    this.closeButton = document.getElementById('btn');
    this.moreInfo.addEventListener('click', this.showPopap.bind(this));
    this.closeButton.addEventListener('click', this.showPopap.bind(this));
  },
  showPopap() {
    this.popupWindow.classList.toggle('active');
  },
};

app.init();


