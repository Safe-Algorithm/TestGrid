import Paragraph from "./Paragraph";
import ServiceNameIcon from "../assets/Name.svg";
import VersionIcon from "../assets/Version.svg";
import ProductNameIcon from "../assets/Product.svg";
import PortIDIcon from "../assets/Port.svg";
interface ResultBigCardProps {
  serviceName: string;
  version: string;
  productName: string;
  portID: string;
}
export default function ResultBigCard({
  serviceName,
  version,
  productName,
  portID,
}: ResultBigCardProps) {
  return (
    <div className=" bg-lightgreen1 p-4 border border-lightgreen2 rounded-md grid xl:grid-cols-2">
      {serviceName && (
        <div>
          <div className="flex">
            <img src={ServiceNameIcon} className=" mr-4" />
            <Paragraph className=" font-bold">Service Name</Paragraph>
          </div>
          <Paragraph className=" font-bold text-center text-darkgreen">
            {serviceName}
          </Paragraph>
        </div>
      )}
      {version && (
        <div>
          <div className="flex">
            <img src={VersionIcon} className=" mr-4" />
            <Paragraph className=" font-bold">Version</Paragraph>
          </div>
          <Paragraph className=" font-bold text-center text-darkgreen">
            {version}
          </Paragraph>
        </div>
      )}
      {productName && (
        <div>
          <div className="flex">
            <img src={ProductNameIcon} className=" mr-4" />
            <Paragraph className=" font-bold">Service Name</Paragraph>
          </div>
          <Paragraph className=" font-bold text-center text-darkgreen">
            {productName}
          </Paragraph>
        </div>
      )}
      {portID && (
        <div>
          <div className="flex">
            <img src={PortIDIcon} className=" mr-4" />
            <Paragraph className=" font-bold">Port ID</Paragraph>
          </div>
          <Paragraph className=" font-bold text-center text-darkgreen">
            {portID}
          </Paragraph>
        </div>
      )}
    </div>
  );
}
