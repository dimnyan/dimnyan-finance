'use client'
import React from 'react';
import {
  Card,
  Row,
  Col,
  Divider,
  Anchor,
  Table,
  Tag,
  Alert,
  Timeline,
  Progress,
  Statistic,
} from 'antd';
import {
  CalculatorOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  CrownOutlined,
  FireOutlined,
} from '@ant-design/icons';
import { createStyles } from 'antd-style';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import Text from 'antd/es/typography/Text';

const useStyles = createStyles(({ token }) => ({
  card: {
    height: '100%',
    transition: 'all 0.3s',
    '&:hover': { transform: 'translateY(-6px)', boxShadow: token.boxShadow },
  },
  heroStat: {
    textAlign: 'center',
    padding: '28px',
    // background: 'linear-gradient(135deg, #722ed1 0%, #9d57f8 100%)',
    borderRadius: 16,
    transition: 'all 0.3s',
    boxShadow: token.boxShadow,
    '&:hover': {transform: 'translateY(-6px)', },
    // color: 'white',
    marginBottom: 24,
  },
}));

const CorporateFinance = () => {
  const { styles } = useStyles();

  return (
    <Row>
      <Col span={20}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

          {/* Hero + Elite Stats */}
          <Title level={1}>Corporate Finance & Valuation</Title>
          <Paragraph style={{ fontSize: '19px', color: '#595959', maxWidth: '900px' }}>
            Master the exact tools used by Goldman Sachs, Blackstone, McKinsey, and Fortune 500 CFOs —
            DCF, LBO, Comps, M&A, WACC, Capital Structure — with professional Excel models used in real $10B+ deals.
          </Paragraph>

          <Row gutter={[24, 24]} style={{ margin: '48px 0' }}>
            <Col xs={24} sm={12} lg={6}>
              <Card className={styles.heroStat}>
                <Statistic title="Avg IB Analyst Salary" value="$250K+"  />
                <Text>1st Year (2025)</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card className={styles.heroStat}>
                <Statistic title="PE Associates" value="$400K+"  />
                <Text>Total comp</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card className={styles.heroStat}>
                <Statistic title="Global M&A Volume" value="$4.1T"  />
                <Text>2025 YTD</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card className={styles.heroStat}>
                <Statistic title="Models You'll Master" value="7" suffix=" Pro-Grade"  />
                <Text>Free below</Text>
              </Card>
            </Col>
          </Row>

          {/* 1. Valuation Methods Master Table */}
          <Divider/>
            <div id="overview">
              <Title level={3}><CrownOutlined /> Valuation Methods Used in Real Deals (2025)</Title>
            </div>
          <div className={'p-3'}></div>

          <Table
            pagination={false}
            bordered
            dataSource={[
              { key: '1', method: 'DCF (2-Stage)', best: 'Most accurate intrinsic value', difficulty: 'High', use: '90% of IB/PE models', color: '#722ed1' },
              { key: '2', method: 'Trading Comps', best: 'Market reality check', difficulty: 'Low', use: 'Football field anchor', color: '#1890ff' },
              { key: '3', method: 'Precedent Transactions', best: 'M&A pricing + control premium', difficulty: 'Medium', use: 'Deal comps', color: '#13c2c2' },
              { key: '4', method: 'LBO Model', best: 'Private equity returns', difficulty: 'Very High', use: 'IRR/MOIC target', color: '#f5222d' },
              { key: '5', method: 'Sum-of-the-Parts', best: 'Conglomerates, banks, REITs', difficulty: 'Medium', use: 'Break-up value', color: '#fa8c16' },
              { key: '6', method: 'Football Field', best: 'Final valuation summary', difficulty: 'Low', use: 'Pitch book page 1', color: '#52c41a' },
            ]}
            columns={[
              { title: 'Method', dataIndex: 'method', render: (t) => <Text strong>{t}</Text> },
              { title: 'Best For', dataIndex: 'best' },
              { title: 'Difficulty', dataIndex: 'difficulty', render: (t) => <Tag color={t.includes('High') ? 'red' : t.includes('Medium') ? 'orange' : 'green'}>{t}</Tag> },
              { title: 'Real-World Use', dataIndex: 'use' },
            ]}
          />

          {/* 2. DCF Mastery */}
          <Divider />
            <div id="dcf">
              <Title level={3}><CalculatorOutlined /> DCF Valuation — The Gold Standard</Title>
            </div>
          <div className={'p-3'}></div>

          <Alert
            title="“Intrinsic value is the DCF of future cash flows.” — Warren Buffett, Charlie Munger, Aswath Damodaran"
            type="success"
            showIcon
            style={{ marginBottom: 32 }}
          />
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card title="Professional Two-Stage DCF Flow">
                <Timeline
                  items={[
                    { content: '1. Build 5–10 year 3-statement model (P&L → BS → CF)' },
                    { content: '2. Forecast Unlevered Free Cash Flow (FCFF)' },
                    { content: '3. Terminal Value: Gordon Growth (2.5%) or Exit Multiple (12× EBITDA)' },
                    { content: '4. Discount at WACC (8–12%)' },
                    { content: '5. Enterprise Value → Equity Value (– Net Debt)' },
                    { content: '6. Sensitivity: WACC vs Growth football field' },
                  ]}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Typical 2025 Assumptions">
                <Text strong>WACC:</Text> 8–10% mature, 11–14% growth<br/>
                <Text strong>Terminal Growth:</Text> 2–3% (GDP+)<br/>
                <Text strong>Exit Multiple:</Text> 10–15× EBITDA<br/>
                <Text strong>Margin Expansion:</Text> +200–500 bps<br/>
                <Text strong>CapEx:</Text> 3–8% of revenue long-term
              </Card>
            </Col>
          </Row>

          {/* 3. LBO Deep Dive */}
          <Divider />
            <div id="lbo">
              <Title level={3}><ThunderboltOutlined /> Leveraged Buyout (LBO) — Private Equity Bible</Title>
            </div>
          <div className={'p-3'}></div>

          <Card style={{ background: '#fff2e8', marginBottom: 32 }}>
            <Title level={3}>How $100M Becomes $500M in 5 Years</Title>
            <Row gutter={32}>
              <Col span={12}>
                <Statistic title="Entry Multiple" value="10.0×" suffix=" EBITDA" />
                <Statistic title="Exit Multiple" value="12.0×" suffix=" EBITDA" style={{ margin: '16px 0' }} />
                <Statistic title="EBITDA Growth" value="+60%" />
              </Col>
              <Col span={12}>
                <Statistic title="Debt Paydown" value="70%" suffix=" of initial" />
                <Statistic title="Target IRR" value="25%+" style={{ color: '#f5222d' }} />
                <Statistic title="MOIC Target" value="3.0–4.0×" />
              </Col>
            </Row>
          </Card>

          {/* 4. WACC & Capital Structure */}
          <Divider />
            <div id="wacc">
              <Title level={3}><DollarOutlined /> WACC & Optimal Capital Structure</Title>
            </div>
          <div className={'p-3'}></div>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card title="WACC Formula (2025)">
                <Text code>
                  WACC = (E/V × Re) + (D/V × Rd × (1−Tc))
                </Text>
                <Text strong>Re (Cost of Equity)</Text> = Rf + β × ERP<br/>
                <Text strong>2025 Inputs:</Text> Rf = 4.5%, ERP = 5.5%, β = 1.0 → Re = 10%
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Optimal Debt Level">
                <Progress percent={35} strokeColor="#722ed1" format={() => 'Investment Grade: < 2.5× Net Debt/EBITDA'} />
                <Progress percent={65} strokeColor="#f5222d" format={() => 'LBO Territory: 5–7×'} style={{ marginTop: 16 }} />
                <Text type="secondary">Tax shield vs bankruptcy risk trade-off</Text>
              </Card>
            </Col>
          </Row>

          {/* 5. M&A Accretion/Dilution */}
          <Divider />
            <div id="ma">
              <Title level={3}><FireOutlined /> M&A Modeling — Accretion/Dilution</Title>
            </div>
          <div className={'p-3'}></div>

          <Card>
            <Title level={4}>Rule of Thumb</Title>
            <Text strong>If you pay less than your P/E → Accretive</Text><br/>
            <Text strong>If you pay more than your P/E → Dilutive (but maybe strategic)</Text><br/><br/>
            <Tag color="green">100% Cash</Tag> Always accretive<br/>
            <Tag color="volcano">100% Stock</Tag> Depends on relative P/E<br/>
            <Tag color="blue">50/50</Tag> Most common in 2025
          </Card>

          {/* 6. Professional Free Excel Models */}
          {/*<Divider orientation="horizontal">*/}
          {/*  <div id="downloads">*/}
          {/*    <Space><DownloadOutlined /> Professional Investment Banking Excel Models (2025)</Space>*/}
          {/*  </div>*/}
          {/*</Divider>*/}
          {/*<Row gutter={[24, 32]}>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          cover={<img src="/previews/dcf-preview.png" alt="DCF" style={{ borderRadius: '8px 8px 0 0' }} />}*/}
          {/*          actions={[<a href="/downloads/3-statement-dcf-model.xlsx" download><DownloadOutlined /> Download Excel</a>]}>*/}
          {/*      <Meta title="Full 3-Statement DCF" description="Integrated forecast, WACC, sensitivity, football field" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/lbo-model-template.xlsx" download><DownloadOutlined /> Download Excel</a>]}>*/}
          {/*      <Meta title="Complete LBO Model" description="Sources & Uses, IRR, MOIC, debt schedule, credit metrics" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/trading-comps-template.xlsx" download><DownloadOutlined /> Download Excel</a>]}>*/}
          {/*      <Meta title="Trading Comps + Football Field" description="Auto-charting, premium/discount analysis" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/merger-model-accretion-dilution.xlsx" download><DownloadOutlined /> Download Excel</a>]}>*/}
          {/*      <Meta title="M&A Accretion/Dilution" description="Cash/stock/mix scenarios, pro forma EPS" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          {/* Final CTA */}
          {/*<Divider />*/}
          {/*<div style={{ textAlign: 'center', padding: '80px 0' }}>*/}
          {/*  <Title level={2} style={{ color: '#722ed1' }}>*/}
              {/*These are the exact models used in $100B+ deals.<br />*/}
              {/*Download them now. Practice daily.<br />*/}
              {/*Become unemployable anywhere except the top 1%.*/}
            {/*</Title>*/}
            {/*<Space size={20} style={{ marginTop: 32 }}>*/}
            {/*  <a href="/downloads/3-statement-dcf-model.xlsx" download>*/}
            {/*    <Button type="primary" size="large" icon={<DownloadOutlined />}>*/}
            {/*      Download All 4 Models (Free Forever)*/}
            {/*    </Button>*/}
            {/*  </a>*/}
            {/*</Space>*/}
          {/*</div>*/}
        </div>
      </Col>

      {/* Sidebar */}
      <Col span={4}>
        <Anchor affix={true} offsetTop={100} items={[
          { key: 'overview', href: '#overview', title: 'Valuation Methods' },
          { key: 'dcf', href: '#dcf', title: 'DCF Mastery' },
          { key: 'lbo', href: '#lbo', title: 'LBO Modeling' },
          { key: 'wacc', href: '#wacc', title: 'WACC & Capital Structure' },
          { key: 'ma', href: '#ma', title: 'M&A Modeling' },
          // { key: 'downloads', href: '#downloads', title: 'Free Pro Excel Models' },
        ]} />
      </Col>
    </Row>
  );
};

export default CorporateFinance;