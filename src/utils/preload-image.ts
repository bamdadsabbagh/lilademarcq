export function preloadImage(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const image = new window.Image();
    image.src = url;
    image.onload = () => {
      resolve(true);
    };
    image.onerror = () => {
      resolve(false);
    };
  });
}
