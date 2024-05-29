import banner from '../../../assets/images/banner1.png';
const Banner = () => {
  return (
    <section
      className=" bg-cover bg-center h-[355px] md:p-10 p-4 w-full"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className=" h-full flex  flex-col justify-center text-white w-full">
        <h2 className="font-medium text-2xl text-secondary">Trending now</h2>
        <p className="font-bold md:text-[40px] leading-[1.3] text-3xl  text-inherit md:w-[446px] w-full">
          Mike’s famous salad with cheese
        </p>
        <h5 className="font-medium text-inherit  text-sm">By John Mike</h5>
      </div>
    </section>
  );
};

export default Banner;
