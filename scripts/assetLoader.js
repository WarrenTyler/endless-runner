let assetsLoaded = 0;
let totalAssets = 0;

function assetLoaded(dic, name) {
  if (this[dic][name].status !== "loading") {
    return;
  }
  this[dic][name].status = "loaded";
  assetsLoaded++;
  if (assetsLoaded === totalAssets && typeof this.finished === "function") {
    this.finished();
  }
}

function downloadAll(imgs) {
  totalAssets = Object.keys(imgs).length;

  for (const img in imgs) {
    if (imgs.hasOwnProperty(img)) {
      const src = imgs[img];

      this.imgs[img] = new Image();
      this.imgs[img].status = "loading";
      this.imgs[img].name = img;
      this.imgs[img].onload = () => assetLoaded.call(this, "imgs", img);
      this.imgs[img].src = src;
    }
  }
}

const assetLoader = {
  imgs: {},
  totalAssets,
  downloadAll,
};

export default assetLoader;

// Usage example:
// import assetLoader from './assetLoader';
// assetLoader.downloadAll(yourImgsObject);
// assetLoader.finished = startGame;
