import React from 'react';
import {
  Card,
  Row,
  Col,
  Divider,
  Space,
  Anchor,
  Table,
  Tag,
  Tabs,
  Alert,
  Timeline,
} from 'antd';
import {
  GlobalOutlined,
  RiseOutlined,
  FallOutlined,
  DollarOutlined,
  BankOutlined,
  // TeamOutlined,
  AlertOutlined,
  // DownloadOutlined,
} from '@ant-design/icons';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import Text from 'antd/es/typography/Text';

const Economics = () => {
  const keyIndicators = [
    { key: '1', indicator: 'GDP Growth', measures: 'Overall economic health', good: '>2–3% real', bad: 'Negative = recession' },
    { key: '2', indicator: 'Inflation (CPI)', measures: 'Purchasing power erosion', good: '1.5–3%', bad: '>5% or deflation' },
    { key: '3', indicator: 'Unemployment Rate', measures: 'Labor market slack', good: '4–5% (natural rate)', bad: '>8%' },
    { key: '4', indicator: 'Interest Rates (Fed Funds)', measures: 'Cost of money', good: 'Neutral ~2–4%', bad: '0% or >6%' },
    { key: '5', indicator: 'Yield Curve (10Y–2Y)', measures: 'Recession signal', good: 'Positive slope', bad: 'Inverted >6 months' },
    { key: '6', indicator: 'Current Account Balance', measures: 'Trade + income flows', good: 'Small deficit/surplus', bad: '>5% GDP deficit' },
  ];

  return (
    <Row>
      <Col span={20}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          <Title level={1}>Economics — Micro & Macro</Title>
          <Paragraph style={{ fontSize: '18px', color: '#595959' }}>
            Understand how economies really work: supply & demand, business cycles, monetary & fiscal policy, inflation, interest rates, and the indicators that move markets.
          </Paragraph>

          {/* 1. Micro vs Macro */}
          <Divider orientation="horizontal">
            <div id="basics">
              <Space><GlobalOutlined /> Microeconomics vs Macroeconomics</Space>
            </div>
          </Divider>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card title="Microeconomics — Individual Markets">
                <Text strong>Core Idea:</Text> Prices are set by Supply & Demand<br /><br />
                Key topics:<br />
                • Elasticity • Consumer & Producer Surplus<br />
                • Market Structures (Perfect Competition → Monopoly)<br />
                • Externalities & Government Intervention
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Macroeconomics — The Big Picture">
                <Text strong>Core Idea:</Text> Total output (GDP) = C + I + G + (X−M)<br /><br />
                Key topics:<br />
                • Growth • Inflation • Unemployment<br />
                • Monetary & Fiscal Policy • International Trade
              </Card>
            </Col>
          </Row>

          {/* 2. Supply & Demand */}
          <Divider orientation="horizontal">
            <div id="supply-demand">
              <Space><RiseOutlined /> Supply and Demand — The Foundation</Space>
            </div>
          </Divider>
          <Card>
            <Row gutter={32}>
              <Col span={12}>
                <Text strong>Demand Curve:</Text> Downward sloping — higher price → lower quantity demanded<br />
                Shifts from: Income, tastes, substitutes, expectations
              </Col>
              <Col span={12}>
                <Text strong>Supply Curve:</Text> Upward sloping — higher price → higher quantity supplied<br />
                Shifts from: Input costs, technology, number of sellers
              </Col>
            </Row>
            <Alert
              title="Market equilibrium = where supply meets demand. Everything in economics starts here."
              type="success"
              showIcon
              style={{ marginTop: 24 }}
            />
          </Card>

          {/* 3. Business Cycle */}
          <Divider orientation="horizontal">
            <div id="cycle">
              <Space><FallOutlined /> The Business Cycle</Space>
            </div>
          </Divider>
          <Timeline
            items={[
              { content: 'Expansion — GDP ↑, unemployment ↓, confidence high' },
              { content: 'Peak — Inflation pressures, Fed raises rates' },
              { content: 'Contraction / Recession — GDP ↓ for 2+ quarters' },
              { content: 'Trough — Bottom, stimulus begins' },
              { content: 'Recovery — Back to expansion' },
            ]}
          />

          {/* 4. Monetary Policy */}
          <Divider orientation="horizontal">
            <div id="monetary">
              <Space><BankOutlined /> Monetary Policy — Central Banks</Space>
            </div>
          </Divider>
          <Tabs
            items={[
              {
                key: 'fed',
                label: 'Federal Reserve (USA)',
                children: (
                  <>
                    Tools: Fed Funds Rate, QE/QT, Reserve Requirements<br />
                    Dual mandate: Maximum employment + 2% inflation<br />
                    2025 rate: Likely 3–4% (neutral zone)
                  </>
                ),
              },
              {
                key: 'ec',
                label: 'ECB, BOE, BOJ, etc.',
                children: 'Similar tools, slightly different mandates (many prioritize only inflation)',
              },
            ]}
          />

          {/* 5. Fiscal Policy */}
          <Divider orientation="horizontal">
            <div id="fiscal">
              Fiscal Policy — Governments
            </div>
          </Divider>
          <Card>
            <Text strong>Expansionary:</Text> Increase spending or cut taxes → stimulates demand<br />
            <Text strong>Contractionary:</Text> Opposite → cools inflation<br /><br />
            <Tag color="red">2020–2022 Example:</Tag> Massive stimulus → inflation spike → rate hikes
          </Card>

          {/* 6. Key Indicators Dashboard */}
          <Divider orientation="horizontal">
            <div id="indicators">
              <Space><DollarOutlined /> Most Important Economic Indicators (2025)</Space>
            </div>
          </Divider>
          <Table
            columns={[
              { title: 'Indicator', dataIndex: 'indicator' },
              { title: 'What It Measures', dataIndex: 'measures' },
              { title: 'Healthy Range', dataIndex: 'good' },
              { title: 'Danger Zone', dataIndex: 'bad' },
            ]}
            dataSource={keyIndicators}
            pagination={false}
            bordered
          />

          {/* 7. Inflation & Interest Rates */}
          <Divider orientation="horizontal">
            <div id="inflation">
              <Space><AlertOutlined /> Inflation, Interest Rates & Bond Yields</Space>
            </div>
          </Divider>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card title="Types of Inflation">
                <Text strong>Demand-pull:</Text> Too much money chasing too few goods<br />
                <Text strong>Cost-push:</Text> Rising input prices (oil, wages)<br />
                <Text strong>Built-in:</Text> Wage-price spiral
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Rule of 72">
                <Text strong>At 7% inflation your money loses half its purchasing power in ~10 years</Text><br />
                <Text>72 ÷ inflation rate = years to halve value</Text>
              </Card>
            </Col>
          </Row>

          {/* 8. Free Resources */}
          {/*<Divider orientation="horizontal">*/}
          {/*  <div id="downloads">*/}
          {/*    <Space><DownloadOutlined /> Free Economics Resources</Space>*/}
          {/*  </div>*/}
          {/*</Divider>*/}
          {/*<Row gutter={[16, 24]}>*/}
          {/*  <Col xs={24} sm={12} lg={8}>*/}
          {/*    <Card hoverable actions={[<a href="/downloads/economic-indicators-calendar-2025.xlsx" download><DownloadOutlined /> Excel</a>]}>*/}
          {/*      <Card.Meta title="2025 Economic Calendar" description="All major data releases dates (NFP, CPI, GDP, FOMC)" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={8}>*/}
          {/*    <Card hoverable actions={[<a href="/downloads/macro-cheat-sheet.pdf" download><DownloadOutlined /> PDF</a>]}>*/}
          {/*      <Card.Meta title="Macro Cheat Sheet" description="All key formulas indicators in one page" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={8}>*/}
          {/*    <Card hoverable actions={[<a href="/downloads/business-cycle-tracker.xlsx" download><DownloadOutlined /> Excel</a>]}>*/}
          {/*      <Card.Meta title="Recession Probability Tracker" description="Yield curve, unemployment data" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          <Divider />
          <Title level={2} style={{ textAlign: 'center', color: '#13c2c2' }}>
            Economics is not about memorizing — it’s about understanding incentives,<br />
            trade-offs, and how policy actually affects real people and markets.
          </Title>
        </div>
      </Col>

      {/* Sidebar Navigation */}
      <Col span={4}>
        <Anchor
          affix={true}
          offsetTop={100}
          items={[
            { key: 'basics', href: '#basics', title: 'Micro vs Macro' },
            { key: 'supply-demand', href: '#supply-demand', title: 'Supply Demand' },
            { key: 'cycle', href: '#cycle', title: 'Business Cycle' },
            { key: 'monetary', href: '#monetary', title: 'Monetary Policy' },
            { key: 'fiscal', href: '#fiscal', title: 'Fiscal Policy' },
            { key: 'indicators', href: '#indicators', title: 'Key Indicators' },
            { key: 'inflation', href: '#inflation', title: 'Inflation Rates' },
            // { key: 'downloads', href: '#downloads', title: 'Free Resources' },
          ]}
        />
      </Col>
    </Row>
  );
};

export default Economics;