const app = {
  moreInfo: null,
  popupWindow: null,
  button: null,
  init() {
    this.moreInfo = document.getElementById('moreInfo');
    this.popupWindow = document.getElementById('popup');
    this.button = document.getElementById('btn');
    this.moreInfo.addEventListener('click', this.showPopap.bind(this));
    this.button.addEventListener('click', this.showPopap.bind(this));
  },
  showPopap() {
    this.popupWindow.classList.toggle('active');
  },
};

app.init();


