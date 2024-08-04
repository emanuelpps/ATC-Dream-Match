import React from "react";
import widgetIcon from "../../../public/assets/icons/widgetIcon.png";
import Image from "next/image";

type Props = {
  isSideBarShow: boolean;
  setIsSideBarShow: (isShow: boolean) => void;
};

const MobileWidget = ({ isSideBarShow, setIsSideBarShow }: Props) => {
  return (
    <div id="mobile-widget" className="fixed p-5 md:hidden" onClick={() => setIsSideBarShow(!isSideBarShow)}>
      <div
        id="mobile-widget-wrapper"
        className="fixed p-2 bg-white rounded-full"
      >
        <Image src={widgetIcon} alt="Widget Icon" width={30} height={30} />
      </div>
    </div>
  );
};

export default MobileWidget;
