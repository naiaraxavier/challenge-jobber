import { ThreeDots } from "react-loader-spinner";

export const Loading = () => {
  return (
    <ThreeDots
      radius="9"
      height="60"
      width="60"
      visible={true}
      color="#3e3d3d"
      wrapperStyle={{}}
      wrapperClass="loading"
      ariaLabel="three-dots-loading"
    />
  );
};
