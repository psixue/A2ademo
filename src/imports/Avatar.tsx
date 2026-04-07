import imgAvatarImage from "figma:asset/b5c611a6acf5d0300f5ea2cd4d0cc83c09723f19.png";

export default function Avatar() {
  return (
    <div className="relative rounded-[100px] size-full" data-name="avatar">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative size-full">
          <div className="relative rounded-[100px] shrink-0 size-[16px]" data-name="avatar-image">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
              <div className="absolute bg-[#1ddbc2] inset-0 rounded-[100px]" />
              <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgAvatarImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}