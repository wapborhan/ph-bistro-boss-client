const Cover = ({ backImage, title, desc }) => {
  return (
    <div
      className="hero h-[300px]"
      style={{
        backgroundImage: `url(${
          backImage
            ? backImage
            : "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
        })`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title && title}</h1>
          <p className="mb-5">{desc && desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
