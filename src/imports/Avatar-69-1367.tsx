import imgAvatarImage from "figma:asset/31f433b6f3f2169d0ae793fe5c0bffb1e8f7e405.png";

export default function Avatar() {
  return (
    <div className="relative rounded-[50px] size-full" data-name="avatar">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative size-full">
          <div className="relative rounded-[100px] shrink-0 size-[16px]" data-name="avatar-image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgAvatarImage} />
          </div>
        </div>
      </div>
    </div>
  );
}