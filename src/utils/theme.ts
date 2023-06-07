export function getPrimaryThemeToken(primaryColor: string) {
  // 将十六进制颜色值转换为 RGB 数组
  const red = parseInt(primaryColor.slice(1, 3), 16);
  const green = parseInt(primaryColor.slice(3, 5), 16);
  const blue = parseInt(primaryColor.slice(5, 7), 16);

  // 将 RGB 值与透明度合并为 RGBA 值
  const alphaValue = 0.6;
  const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${alphaValue})`;

  return {
    colorPrimary: primaryColor,
    colorLink: primaryColor,
    colorLinkHover: rgbaColor,
  };
}
