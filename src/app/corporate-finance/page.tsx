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
  BankOutlined,
  CalculatorOutlined,
  StockOutlined,
  DollarOutlined,
  // RiseOutlined,
  // DownloadOutlined,
  // AlertOutlined,
} from '@ant-design/icons';

import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";

const {TabPane} = Tabs;

const CorporateFinance = () => {
  const valuationMethods = [
    {
      key: 1,
      method: 'DCF (Discounted Cash Flow)',
      bestFor: 'Most accurate when forecasts are reliable',
      difficulty: 'High',
      use: '90% of IB/PE valuations'
    },
    {
      key: 2,
      method: 'Comparable Companies (Comps)',
      bestFor: 'Quick market reality check',
      difficulty: 'Low',
      use: 'Trading multiples'
    },
    {
      key: 3,
      method: 'Precedent Transactions',
      bestFor: 'M&A deal pricing',
      difficulty: 'Medium',
      use: 'Control premium insight'
    },
    {
      key: 4,
      method: 'LBO Model',
      bestFor: 'Private equity returns',
      difficulty: 'High',
      use: 'Debt capacity & IRR'
    },
    {
      key: 5,
      method: 'Sum-of-the-Parts / NAV',
      bestFor: 'Conglomerates, real estate, banks',
      difficulty: 'Medium',
      use: 'Break-up value'
    },
  ];

  const columns = [
    {title: 'Valuation Method', dataIndex: 'method', key: 'method'},
    {title: 'Best For', dataIndex: 'bestFor', key: 'bestFor'},
    {title: 'Difficulty', dataIndex: 'difficulty', key: 'difficulty'},
    {title: 'Real-World Use', dataIndex: 'use', key: 'use'},
  ];

  return (
    <Row>
      <Col span={20}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '40px 20px'}}>
          <Title level={1}>Corporate Finance & Valuation</Title>
          <Paragraph style={{fontSize: '18px', color: '#595959'}}>
            Master the tools used by investment banks, private equity, consulting, and Fortune 500 CFOs —
            DCF, Comps, LBO, M&A, Capital Structure, WACC and more — all explained clearly and for free.
          </Paragraph>

          {/* 1. Overview Table */}
          <Divider orientation="horizontal">
            <div id="overview">
              <Space><BankOutlined/> Valuation Methods Compared (2025)</Space>
            </div>
          </Divider>
          <Table columns={columns} dataSource={valuationMethods} pagination={false} bordered/>

          {/* 2. DCF Valuation */}
          <Divider orientation="horizontal">
            <div id="dcf">
              <Space><CalculatorOutlined/> Discounted Cash Flow (DCF) — The Gold Standard</Space>
            </div>
          </Divider>
          <Alert
            title="Warren Buffett: “Intrinsic value is the discounted value of cash that can be taken out of a business during its remaining life.”"
            type="success"
            showIcon
            style={{marginBottom: 24}}
          />
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card title="Two-Stage DCF Steps">
                <Timeline
                  items={[
                    {
                      content: "1. Forecast Free Cash Flow (FCFF) 5–10 years"
                    },
                    {
                      content: "2. Calculate Terminal Value (Gordon Growth or Exit Multiple)"
                    },
                    {
                      content: "3. Discount everything at WACC"
                    },
                    {
                      content: "4. Subtract Net Debt → Equity Value"
                    },
                    {
                      content: "5. Divide by shares outstanding → Fair Value per Share"
                    },

                  ]}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Key Assumptions That Move the Model">
                <Text strong>Revenue growth</Text><br/>
                <Text strong>EBITDA margin</Text><br/>
                <Text strong>CapEx & Working Capital</Text><br/>
                <Text strong>WACC (8–12% typical)</Text><br/>
                <Text strong>Terminal growth (1.5–3% forever)</Text>
              </Card>
            </Col>
          </Row>

          {/* 3. Trading Multiples */}
          <Divider orientation="horizontal">
            <div id="multiples">
              <Space><StockOutlined/> Comparable Companies & Precedent Transactions</Space>
            </div>
          </Divider>
          <Tabs
            items={[
              {
                key: '1',
                label: "Trading Comps",
                children: (<>
                  <Text strong>Common Multiples:</Text><br/>
                  EV / Revenue • EV / EBITDA • P / E • PEG • EV / FCF<br/><br/>
                  <Tag color="blue">Tech: 8–15× EBITDA</Tag>
                  <Tag color="green">Consumer: 6–10×</Tag>
                  <Tag color="volcano">Cyclicals: 4–8×</Tag>
                </>)
              },
              {
                key: '2',
                label: "Precedent M&A Transactions",
                children: (<>
                  Same multiples but include control premium (+20–40%)<br/>
                  Shows what acquirers actually paid
                </>)
              },
            ]}
          />

          {/* 4. LBO Modeling */}
          <Divider orientation="horizontal">
            <div id="lbo">
              Leveraged Buyout (LBO) Modeling
            </div>
          </Divider>
          <Card>
            <Title level={4}>How Private Equity Thinks</Title>
            <Paragraph>
              Buy company using 60–70% debt → improve operations → sell in 3–7 years for 20–30% IRR
            </Paragraph>
            <Text strong>Key Outputs:</Text><br/>
            • IRR (target &gt; 20%) • MOIC (Multiple on Invested Capital, target 2.5–4.0×)<br/>
            • Debt pay-down schedule • Sources & Uses table
          </Card>

          {/* 5. WACC */}
          <Divider orientation="horizontal">
            <div id="wacc">
              <Space><DollarOutlined/> WACC — Weighted Average Cost of Capital</Space>
            </div>
          </Divider>
          <Card>
            <Paragraph>
              <Text code>WACC = (E/V × Re) + (D/V × Rd × (1−Tc))</Text>
            </Paragraph>
            <Row gutter={16}>
              <Col span={8}><Tag color="purple">Cost of Equity Re</Tag> CAPM: Rf + β × (Rm − Rf)</Col>
              <Col span={8}><Tag color="orange">Cost of Debt Rd</Tag> Yield on bonds</Col>
              <Col span={8}><Tag color="cyan">Tax Shield</Tag> Interest is tax-deductible</Col>
            </Row>
            <Text type="secondary" style={{marginTop: '16px 0', display: 'block'}}>
              Typical WACC 2025: Mature company 7–9% | Growth/tech 10–14%
            </Text>
          </Card>

          {/* 6. Capital Structure */}
          <Divider orientation="horizontal">
            <div id="capital">
              Capital Structure & Optimal Debt Level
            </div>
          </Divider>
          <Card>
            <Text>
              Modigliani–Miller (with taxes): More debt → higher value due to tax shield<br/>
              Real world: Too much debt → bankruptcy risk
            </Text>
            <br/><br/>
            <Text strong>Investment-grade companies</Text> → Net Debt / EBITDA &lt; 2.5×<br/>
            <Text strong>Private equity LBOs</Text> → 5–7× common
          </Card>

          {/* 7. M&A Basics */}
          <Divider orientation="horizontal">
            <div id="ma">
              Mergers & Acquisitions 101
            </div>
          </Divider>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card title="Accretion / Dilution">
                Does EPS go up or down post-deal?<br/>
                Depends on P/E paid vs P/E of target
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Synergies">
                Cost savings + revenue upside<br/>
                Typical: 5–15% of target revenue claimed (often overstated)
              </Card>
            </Col>
          </Row>

          {/* 8. Free Downloads – The Real Value */}
          {/*<Divider  orientation="horizontal">*/}
          {/*  <div id="downloads">*/}
          {/*  <Space><DownloadOutlined/> Professional-Grade Free Excel Models (2025)</Space>*/}
          {/*  </div>*/}
          {/*</Divider>*/}
          {/*<Row gutter={[16, 24]}>*/}
          {/*  <Col xs={24} sm={12} lg={8}>*/}
          {/*    <Card hoverable*/}
          {/*          actions={[<a href="/downloads/3-statement-dcf-model.xlsx" download><DownloadOutlined/> Excel</a>]}>*/}
          {/*      <Card.Meta title="Full 3-Statement DCF Model"*/}
          {/*                 description="Integrated P&L → BS → CF, 5+1 yr forecast, WACC, sensitivity"/>*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={8}>*/}
          {/*    <Card hoverable*/}
          {/*          actions={[<a href="/downloads/lbo-model-template.xlsx" download><DownloadOutlined/> Excel</a>]}>*/}
          {/*      <Card.Meta title="Investment Banking LBO Model" description="Sources & Uses, IRR, MOIC, debt schedule"/>*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={8}>*/}
          {/*    <Card hoverable*/}
          {/*          actions={[<a href="/downloads/trading-comps-template.xlsx" download><DownloadOutlined/> Excel</a>]}>*/}
          {/*      <Card.Meta title="Trading Comps + Football Field" description="EV/EBITDA, P/E, automatic charting"/>*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={8}>*/}
          {/*    <Card hoverable actions={[<a href="/downloads/merger-model-accretion-dilution.xlsx"*/}
          {/*                                 download><DownloadOutlined/> Excel</a>]}>*/}
          {/*      <Card.Meta title="M&A Accretion/Dilution Model" description="100% cash, stock mix scenarios"/>*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          <Divider/>
          <Title level={2} style={{textAlign: 'center', color: '#722ed1'}}>
            Master DCF + Comps + LBO → you can value any company on Earth.<br/>
            Download the templates and start practicing today — for free.
          </Title>
        </div>

      </Col>
      <Col span={4}>
        <Anchor
          affix={true}
          offsetTop={100}
          style={{marginBottom: 40}}
          items={[
            {
              key: 'overview',
              href: '#overview',
              title: 'Core Concepts Overview',
            }, {
              key: 'dcf',
              href: '#dcf',
              title: 'Discounted Cash Flow (DCF)',
            },
            {
              key: 'multiples',
              href: '#multiples',
              title: 'Comparable Companies & Precedents',
            }, {
              key: 'lbo',
              href: '#lbo',
              title: 'Leveraged Buyout (LBO) Modeling',
            },
            {
              key: 'wacc',
              href: '#wacc',
              title: 'WACC & Cost of Capital',
            },
            {
              key: 'capital',
              href: '#capital',
              title: 'Capital Structure & Debt vs Equity',
            },
            {
              key: 'ma',
              href: '#ma',
              title: 'Mergers & Acquisitions Basics',
            },
            // {
            //   key: 'downloads',
            //   href: '#downloads',
            //   title: 'Free Excel Models & Templates',
            // },
          ]}
        />
      </Col>
    </Row>
  );
};

export default CorporateFinance;