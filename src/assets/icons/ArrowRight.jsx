/* eslint-disable react/prop-types */
export const ArrowRight = ({ color = 'white', ...res }) => {
  return (
    <>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...res}
      >
        <path
          d="M14.2697 13L8.90723 7.63749L10.4391 6.10565L17.3334 13L10.4391 19.8943L8.90723 18.3625L14.2697 13Z"
          fill={color}
        />
      </svg>
    </>
  );
};
