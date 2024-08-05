import { MutableRefObject } from "react";
import { HomeExpertiseImageHoverRef } from "app/components/molecules/home-expertise-image-hover";

export default class HomeExpertiseImageController {
  static imageRef: MutableRefObject<HomeExpertiseImageHoverRef | null>;
  static setImageRef = (
    ref: MutableRefObject<HomeExpertiseImageHoverRef | null>
  ) => {
    this.imageRef = ref;
  };

  static animateIn = () => {
    this.imageRef.current?.animateIn();
  };

  static animateOut = () => {
    this.imageRef.current?.animateOut();
  };
}
