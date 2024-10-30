import { FC } from "react";

const BgImage: FC = () => {
  return (
    <div className="bg-gray-bg-color rounded-lg px-3 mobileAdaptive:px-10 py-5 tablet:hidden desktop:block desktop:px-[97px] desktop:pt-20 desktop:pb-0 desktop:mt-8">
      <div className="bg-iphoneMob w-full bg-no-repeat bg-center mobileAdaptive:w-[255px] h-[331px] desktop:bg-iphoneDesktop desktop:w-[406px] desktop:h-[656px] desktop:bg-contain desktop:bg-repeat-round desktop:bg-top"></div>
    </div>
  );
};

export default BgImage;
