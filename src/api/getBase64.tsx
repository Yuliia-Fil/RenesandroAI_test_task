export const getBase64 = (img: HTMLImageElement) => {
  const canvas = document.createElement("canvas");

  const size = 280;
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d")!;

  const scale = Math.min(size / img.width, size / img.height);
  const w = img.width * scale;
  const h = img.height * scale;

  const x = (size - w) / 2;
  const y = (size - h) / 2;
  ctx.drawImage(img, x, y, w, h);

  return canvas.toDataURL("image/png").replace(/^data:image\/\w+;base64,/, "");
};
