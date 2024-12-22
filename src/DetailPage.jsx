import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const { seasonInfo } = location.state || {};
  console.log(seasonInfo);

  return <>test</>;
};

export default DetailPage;
