import {
  creative,
  interaction,
  lightMode,
  material,
  minimal,
  modern
} from "@/assets/images/custom-theme/utils.js";
import { img1, img2, img3, img4 } from "@/assets/images/sidebar/utils.js";

export const layoutThemeTypes = [
  {
    value: "default",
    src: lightMode,
    title: "Default"
  },
  {
    value: "material",
    src: material,
    title: "Material"
  },

  {
    value: "creative",
    src: creative,
    title: "Creative"
  },
  {
    value: "minimal",
    src: minimal,
    title: "Minimal"
  },
  {
    value: "modern",
    src: modern,
    title: "Modern"
  },
  {
    value: "interaction",
    src: interaction,
    title: "Interaction"
  }
];
export const layoutSideBarImages = [
  {
    value: "img-1",
    src: img1
  },
  {
    value: "img-2",
    src: img2
  },
  {
    value: "img-3",
    src: img3
  },
  {
    value: "img-4",
    src: img4
  }
];
