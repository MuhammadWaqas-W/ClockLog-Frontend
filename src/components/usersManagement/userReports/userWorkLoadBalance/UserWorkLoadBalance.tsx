import { Col, Row, Space, Table } from "antd";

import userImage from "../../../../assets/images/users/user-1.svg";
import {
  overallWorkLoadData,
  WorkLoadTableData,
} from "../../../../mock/workLoadBalanceData";
import DynamicCards from "../../../WorkLoadBalance/DynamicCards/dynamicCards";
import TableToolTip from "../../../WorkLoadBalance/tableToolTip/tableToolTip";
import "../../../WorkLoadBalance/workLoadBalance.scss";
import "./style.scss";

const UserWorkLoadBalance = () => {
  const WorkLoadTableColumns: any = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Tracked Time",
      dataIndex: "trackedTime",
      key: "trackedTime",
    },
    {
      title: "Productive Time",
      dataIndex: "productiveTime",
      key: "productiveTime",
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span>Expected Working Hours</span>
          <TableToolTip renderTooltopContent={"expectedWorkingHours"} />
        </div>
      ),
      dataIndex: "expectedWorkingHours",
      key: "expectedWorkingHours",
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span>Min. Effective Hours</span>
          <TableToolTip renderTooltopContent={"minEffectiveHours"} />
        </div>
      ),
      dataIndex: "minEffectiveHours",
      key: "minEffectiveHours",
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span>Utilization Status</span>
          <TableToolTip renderTooltopContent={"utilizationStatus"} />
        </div>
      ),
      key: "utilizationStatus",
      dataIndex: "utilizationStatus",

      render: (_: any, { utilizationStatus }: any) => (
        <>
          {(() => {
            switch (utilizationStatus) {
              case "Healthy":
                return (
                  <div className="workload-tag fs-14 fw-400 bgLightGreenProgress-color">
                    Healthy
                  </div>
                );
              case "Underutilized":
                return (
                  <div className="workload-tag fs-14 fw-400 bgLow-yellow-color">
                    Underutilized
                  </div>
                );
              case "Overutilized":
                return (
                  <div className="workload-tag fs-14 fw-400 bgOrange-color">
                    Overutilized
                  </div>
                );
              default:
                return null;
            }
          })()}
        </>
      ),
    },
  ];

  return (
    <div className="work-load--wrapper" style={{ padding: "0" }}>
      <div className="user-info">
        <div className="user-details">
          <img
            src={userImage}
            alt="user"
            width="40px"
            height="40px"
            className="border-radius-50"
          />
          <div className="user-name-email">
            <h2 className="fs-16 fw-600 title-color m-0">M Waqas</h2>
            <p className="email m-0">mr.vaqas@outlook.com</p>
          </div>
        </div>
        <p className="fs-12 fw-400 line-height-16 date">
          March 13, 2022 &mdash; March 19, 2022
        </p>
      </div>
      <div className="workLoad-mian-card" style={{ marginTop: "50px" }}>
        <DynamicCards dataArray={overallWorkLoadData} />
      </div>
      <div className="wrapper-table wrapper-table-inset custom-scroll-hor user-table">
        <Table
          className="ant-table-content"
          columns={WorkLoadTableColumns}
          dataSource={WorkLoadTableData}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default UserWorkLoadBalance;