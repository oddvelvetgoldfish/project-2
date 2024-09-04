import { IGif } from "@giphy/js-types";

const getImagePreview = (gif: IGif) => {
  return gif.images.original.mp4 || "";
};

interface Props {
  gif: IGif;
}
export const GifCard = ({ gif }: Props) => {
  return (
    <video
      src={getImagePreview(gif)}
      playsInline
      autoPlay
      muted
      loop
      className="w-full py-1"
    />
  );
};
