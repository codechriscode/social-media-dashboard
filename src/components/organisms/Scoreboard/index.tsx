import MainCard from "../../molecules/Cards/MainCard";
import mock from "../../../mock/payload.json";

export default function Overview() {

  return (
    <div className="overview">
      {mock.media.map((medium) => {
        return (
          <MainCard
            name={medium.name}
            status={medium.status}
            username={medium.username}
          />
        );
      })}
    </div>
  );
}
