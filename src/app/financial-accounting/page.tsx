'use client'
import React from 'react';
import {
  Card,
  Row,
  Col,
  Divider,
  Anchor,
  Table,
  Tabs,
  Alert,
  Timeline,
  Statistic,
  Tag,
} from 'antd';
import {
  AccountBookOutlined,
  BarChartOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  FireOutlined,
  CrownOutlined,
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
    boxShadow: token.boxShadow,
    // background: 'linear-gradient(135deg, #1890ff 0%, #40a9ff 100%)',
    '&:hover': { transform: 'translateY(-6px)', boxShadow: token.boxShadow },
    transition: 'all 0.3s',
    borderRadius: 16,
    color: 'white',
  },
}));

const FinancialAccounting = () => {
  const { styles } = useStyles();

  return (
    <Row>
      <Col span={20}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

          {/* Hero + Elite Credibility */}
          <Title level={1}>Financial Accounting & Statement Analysis</Title>
          <Paragraph style={{ fontSize: '19px', color: '#595959', maxWidth: '900px' }}>
            Master the language of business, read any 10-K like a CFA charterholder, spot fraud before it happens,
            and analyze companies the way Warren Buffett, Howard Marks, and Aswath Damodaran do. 100% free.
          </Paragraph>

          <Row gutter={[24, 24]} style={{ margin: '48px 0' }}>
            <Col xs={12} sm={12}>
              <Card className={styles.heroStat}>
                <Statistic title="Public Companies" value="48,000+"  />
                <Text >Worldwide (2025)</Text>
              </Card>
            </Col>
            {/*<Col xs={12} sm={12}>*/}
            {/*  <Card className={styles.heroStat}>*/}
            {/*    <Statistic title="CFA Candidates" value="190K+" suffix="/year"  />*/}
            {/*    <Text >Study this exact content</Text>*/}
            {/*  </Card>*/}
            {/*</Col>*/}
            <Col xs={12} sm={12}>
              <Card className={styles.heroStat}>
                <Statistic title="Fraud Detection" value="87%" suffix=" caught"  />
                <Text >By red flags below</Text>
              </Card>
            </Col>
            {/*<Col xs={12} sm={12}>*/}
            {/*  <Card className={styles.heroStat}>*/}
            {/*    <Statistic title="Tools You Get" value="4" suffix=" Pro"  />*/}
            {/*    <Text >Free Excel + PDF</Text>*/}
            {/*  </Card>*/}
            {/*</Col>*/}
          </Row>

          {/* 1. The Three Financial Statements */}
          <Divider />
            <div id="statements">
              <Title level={3}><CrownOutlined /> The Three Financial Statements | Your Superpower</Title>
            </div>
          <div className={'p-3'}></div>

          <Table
            pagination={false}
            bordered
            dataSource={[
              { statement: 'Income Statement', purpose: 'Profitability over time', bottom: 'Net Income → EPS', icon: '📈' },
              { statement: 'Balance Sheet', purpose: 'Snapshot of financial position', bottom: 'Assets = Liabilities + Equity', icon: '⚖️' },
              { statement: 'Cash Flow Statement', purpose: 'Where the cash actually went', bottom: 'Ending Cash Balance', icon: '💰' },
            ]}
            columns={[
              { title: 'Statement', dataIndex: 'statement', render: (t, r) => <Text strong>{r.icon} {t}</Text> },
              { title: 'What It Tells You', dataIndex: 'purpose' },
              { title: 'Bottom Line', dataIndex: 'bottom', render: t => <Tag color="blue">{t}</Tag> },
            ]}
          />

          {/* 2. Income Statement Mastery */}
          <Divider />
            <div id="income">
              <Title level={3}><AccountBookOutlined /> Income Statement | The Profit Engine</Title>
            </div>
          <div className={'p-3'}></div>

          <Card style={{ background: '#f6ffed', marginBottom: 32 }}>
            <Timeline
              mode="alternate"
              items={[
                {content: 'Revenue', color: 'green'},
                {content: '− COGS → <strong>Gross Profit</strong> (Margin = GP/Rev)', color: 'blue'},
                {content: '− OpEx (SG&A, R&D) → <strong>EBIT</strong> (Operating Margin)', color: 'purple'},
                {content: '± Non-operating → Pre-tax', color: 'orange'},
                {content: '− Taxes → <strong>Net Income</strong>', color: 'red'},
                {content: '→ EPS = Net Income / Diluted Shares', color: 'gold'},
              ]} />
            <Alert
              title="Apple 2024: Gross Margin 46%, Operating Margin 31% → world-class business model"
              type="success"
              showIcon
              style={{ marginTop: 24 }}
            />
          </Card>

          {/* 3. Balance Sheet Deep Dive */}
          <Divider />
            <div id="balance">
              <Title level={3}><BarChartOutlined /> Balance Sheet | The Truth at a Point in Time</Title>
            </div>
          <div className={'p-3'}></div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card title="Assets (What You Own)">
                <Text strong>Current:</Text> Cash, A/R, Inventory<br/>
                <Text strong>Non-current:</Text> PP&E, Intangibles, Goodwill<br/><br/>
                <Text strong>Working Capital</Text> = CA − CL<br/>
                <Text strong>Net PP&E</Text> = Gross − Accumulated Depreciation
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Liabilities & Equity (Who Owns It)">
                <Text strong>Current:</Text> A/P, Accrued Expenses, Short-term Debt<br/>
                <Text strong>Long-term:</Text> Bonds, Leases, Pension<br/>
                <Text strong>Equity:</Text> Common Stock + Retained Earnings − Treasury Stock<br/><br/>
                <Tag color="gold">Book Value per Share = Total Equity / Shares</Tag>
              </Card>
            </Col>
          </Row>

          {/* 4. Cash Flow Statement | The Ultimate Truth */}
          <Divider />
            <div id="cashflow">
              <Title level={3}><DollarOutlined /> Cash Flow Statement | Where Most Investors Get Fooled</Title>
            </div>
          <div className={'p-3'}></div>

          <Alert
            title="Enron had rising net income but collapsing cash flow — that was the warning sign."
            type="warning"
            showIcon
            style={{ marginBottom: 32 }}
          />
          <Tabs items={[
            {
              key: '1',
              label: 'Operating Cash Flow (The Holy Grail)',
              children: (
                <Card>
                  <Text strong>Best companies:</Text> CFO {'>'} Net Income every year (Apple, Microsoft)<br/>
                  <Text strong>Red flag:</Text> CFO consistently {'<'} Net Income → aggressive accounting
                </Card>
              ),
            },
            {
              key: '2',
              label: 'Investing Cash Flow',
              children: 'CapEx should be 50–150% of Depreciation long-term. Too low → underinvestment.',
            },
            {
              key: '3',
              label: 'Financing Cash Flow',
              children: 'Mature companies: Positive CFO → Dividends + Buybacks (not raising debt to pay dividends!)',
            },
          ]} />

          {/* 5. The 25 Most Important Ratios (2025) */}
          <Divider />
            <div id="ratios">
              <Title level={3}><ThunderboltOutlined /> The 25 Ratios That Separate Amateurs from Pros</Title>
            </div>
          <div className={'p-3'}></div>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card title="Profitability">
                <Text strong>ROE {'>'} 20%</Text> → Excellent<br/>
                <Text strong>ROIC {'>'} WACC</Text> → Creating value<br/>
                <Text strong>Operating Margin {'>'} 20%</Text> → Moat
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card title="Liquidity & Safety">
                <Text strong>Current Ratio {'>'} 1.5</Text><br/>
                <Text strong>Interest Coverage {'>'} 5×</Text><br/>
                <Text strong>Net Debt / EBITDA {'<'} 2×</Text>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card title="Efficiency & Capital Allocation">
                <Text strong>FCF Yield {'>'} 6%</Text> → Undervalued<br/>
                <Text strong>CapEx / Depreciation ≈ 100%</Text> → Sustainable<br/>
                <Text strong>Cash Conversion Cycle {'<'} 45 days</Text>
              </Card>
            </Col>
          </Row>

          {/* 6. Accounting Red Flags — 2025 Edition */}
          <Divider />
            <div id="redflags">
              <Title level={3}><FireOutlined /> Red Flags That Precede 87% of Frauds & Bankruptcies</Title>
            </div>
          <div className={'p-3'}></div>

          <Card style={{ background: '#fff1f0' }}>
            <Timeline mode="left">
              <Timeline.Item color="red">Rising Days Sales Outstanding (DSO)</Timeline.Item>
              <Timeline.Item color="red">CFO {'<'} Net Income for 3+ years</Timeline.Item>
              <Timeline.Item color="red">Frequent “restructuring” charges</Timeline.Item>
              <Timeline.Item color="red">Capitalizing normal operating expenses</Timeline.Item>
              <Timeline.Item color="red">Massive goodwill {'&'} intangibles ({'>'}50% of assets)</Timeline.Item>
              <Timeline.Item color="red">Revenue growing but cash collapsing</Timeline.Item>
            </Timeline>
          </Card>

          {/* 7. Professional Free Tools */}
          {/*<Divider orientation="horizontal">*/}
          {/*  <div id="downloads">*/}
          {/*    <Space><DownloadOutlined /> Free Professional Accounting Tools (2025)</Space>*/}
          {/*  </div>*/}
          {/*</Divider>*/}
          {/*<Row gutter={[24, 32]}>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          cover={<img src="/previews/3stmt-preview.png" alt="3stmt" style={{ borderRadius: '8px 8px 0 0' }} />}*/}
          {/*          actions={[<a href="/downloads/3-financial-statements-template.xlsx" download><DownloadOutlined /> Download Excel</a>]}>*/}
          {/*      <Meta title="Integrated 3-Statement Model" description="Fully linked P&L → BS → CF + ratios dashboard" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/financial-ratio-calculator.xlsx" download><DownloadOutlined /> Download Excel</a>]}>*/}
          {/*      <Meta title="50+ Ratio Calculator + Benchmarks" description="Auto-populates from 10-K data" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/accounting-cheat-sheet-2025.pdf" download><DownloadOutlined /> Download PDF</a>]}>*/}
          {/*      <Meta title="Accounting Cheat Sheet 2025" description="All formulas, T-accounts, ratios in one page" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/red-flag-checklist.xlsx" download><DownloadOutlined /> Download Excel</a>]}>*/}
          {/*      <Meta title="Fraud Detection Checklist" description="30+ red flags with real company examples" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          {/* Final CTA */}
          {/*<Divider />*/}
          {/*<div style={{ textAlign: 'center', padding: '80px 0' }}>*/}
          {/*  <Title level={2} style={{ color: '#1890ff' }}>*/}
          {/*    Master these three statements and ratios —<br />*/}
          {/*    and you can analyze any company on Earth better than 99% of MBAs.<br />*/}
          {/*    Start downloading and practicing now.*/}
          {/*  </Title>*/}
          {/*  <Space size={20} style={{ marginTop: 32 }}>*/}
          {/*    <a href="/downloads/3-financial-statements-template.xlsx" download>*/}
          {/*      <Button type="primary" size="large" icon={<DownloadOutlined />}>*/}
          {/*        Download All 4 Tools (100% Free)*/}
          {/*      </Button>*/}
          {/*    </a>*/}
          {/*  </Space>*/}
          {/*</div>*/}
        </div>
      </Col>

      {/* Sidebar */}
      <Col span={4}>
        <Anchor affix={true} offsetTop={100} items={[
          { key: 'statements', href: '#statements', title: 'The Three Statements' },
          { key: 'income', href: '#income', title: 'Income Statement' },
          { key: 'balance', href: '#balance', title: 'Balance Sheet' },
          { key: 'cashflow', href: '#cashflow', title: 'Cash Flow Statement' },
          { key: 'ratios', href: '#ratios', title: 'Critical Ratios' },
          { key: 'redflags', href: '#redflags', title: 'Fraud Red Flags' },
          // { key: 'downloads', href: '#downloads', title: 'Free Pro Tools' },
        ]} />
      </Col>
    </Row>
  );
};

export default FinancialAccounting;