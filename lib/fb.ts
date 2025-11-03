export const facebookPixelId = "138553019289982";

export const trackFbPageView = async () => {
  const { default: ReactPixel } = await import("react-facebook-pixel");
  console.log(facebookPixelId);
  ReactPixel.init(facebookPixelId);
  ReactPixel.pageView();
};

export const trackLead = async (data: { email: string; name: string }) => {
  const { default: ReactPixel } = await import("react-facebook-pixel");
  console.log("Tracklead", facebookPixelId);
  ReactPixel.init(facebookPixelId);
  ReactPixel.track("Lead", data);
};
