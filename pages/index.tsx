import { DatePicker, Space, Radio, ConfigProvider, Row, Col } from "antd";
import { DirectionType } from "antd/lib/config-provider";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import React from "react";
import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";
const IndexPage = () => {
  const [direction, setDirection] = React.useState<DirectionType>("rtl");
  const [locale, setLocale] = React.useState(fa_IR);

  const changeDirection = (e: any) => {
    const directionValue = e.target.value;
    setDirection(directionValue);
  };
  const changeLocale = (e: any) => {
    const localeValue = e.target.value;
    setLocale(localeValue);
  };

  return (
    <>
      <style jsx>{`
        .fork-ribbon {
          box-sizing: initial;
          position: fixed;
          padding: 5px 45px;
          width: 128px;
          top: 50px;
          right: -50px;
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
          box-shadow: 0 0 0 3px #07b280, 0 0 20px -3px rgba(0, 0, 0, 0.5);
          text-shadow: 0 0 0 #ffffff, 0 0 5px rgba(0, 0, 0, 0.3);
          background-color: #07b280;
          color: #ffffff;
          font-size: 13px;
          font-family: sans-serif;
          text-decoration: none;
          font-weight: bold;
          border: 2px dotted #ffffff;
          -webkit-backface-visibility: hidden;
          letter-spacing: 0.5px;
        }
      `}</style>

      <a href="https://github.com/saeedrahimi/nextjs-antd-jalali-example" className="fork-ribbon">
        Fork me on GitHub
      </a>
      <Row justify="center">
        <Col span={16}>
          <h2> Ant-Design Jalali Date picker </h2>
        </Col>
        <Col span={16}>
          <Space direction="horizontal" align="center" size={12}>
            <div style={{ marginBottom: 16 }}>
              <span style={{ marginRight: 16 }}>Change direction of components: </span>
              <Radio.Group defaultValue={direction} onChange={changeDirection}>
                <Radio.Button key="ltr" value="ltr">
                  LTR
                </Radio.Button>
                <Radio.Button key="rtl" value="rtl">
                  RTL
                </Radio.Button>
              </Radio.Group>
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={{ marginRight: 16 }}>Change locale of components: </span>
              <Radio.Group defaultValue={locale} onChange={changeLocale}>
                <Radio.Button key="en" value={en_US}>
                  EN
                </Radio.Button>
                <Radio.Button key="fa" value={fa_IR}>
                  FA_IR
                </Radio.Button>
              </Radio.Group>
            </div>
          </Space>
          </Col>
        <Col span={18}>
          <ConfigProvider locale={locale} direction={direction}>
            <Space direction="vertical" style={{width:"100%"}} size={12}>
              Gregorian: <DatePicker />
              Jalali: <DatePickerJalali direction="rtl" />
              Jalali RangePicker: <DatePickerJalali.RangePicker />
            </Space>
          </ConfigProvider>
        </Col>
      </Row>
    </>
  );
};

export default IndexPage;
