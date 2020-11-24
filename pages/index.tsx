import { DatePicker, Space, Radio, ConfigProvider, Row, Col } from "antd";
import { DirectionType } from "antd/lib/config-provider";
import { DatePicker as DatePickerJalali, Calendar } from "antd-jalali";
import React from "react";
import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";
import GithubRibbon from "../components/github-ribbon"

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
      <GithubRibbon/>
      <Row justify="center">
        <Col span={16}>
          <h2> Ant-Design Jalali Date picker demo with Next.js </h2>
        </Col>
        <Col span={16}>
          <a href="https://github.com/saeedrahimi/antd-jalali"> antd-jalali </a>
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
               <Calendar />
            </Space>
          </ConfigProvider>
        </Col>
      </Row>
    </>
  );
};

export default IndexPage;
