import { ThreeDots } from "react-loader-spinner";

export const Loading = () => {
  return (
    <ThreeDots
      visible={true}
      height="60"
      width="60"
      color="#3e3d3d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass="loading"
    />
  );
};
