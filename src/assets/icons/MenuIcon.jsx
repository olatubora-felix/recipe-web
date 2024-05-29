/* eslint-disable react/prop-types */

export const MenuIcon = ({ color = '#001018', ...res }) => {
  return (
    <>
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...res}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.25 0.333374H19.75V2.50004H0.25V0.333374ZM0.25 7.91671H19.75V10.0834H0.25V7.91671ZM19.75 15.5H0.25V17.6667H19.75V15.5Z"
          fill={color}
        />
      </svg>
    </>
  );
};
