import React from 'react';
import {
  Card,
  Row,
  Col,
  Divider,
  Space,
  Anchor,
  Table,
  Tabs,
  Alert,
  Timeline,
} from 'antd';
import {
  FileTextOutlined,
  AccountBookOutlined,
  BarChartOutlined,
  CalculatorOutlined,
  DollarOutlined,
  AlertOutlined,
} from '@ant-design/icons';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import Text from 'antd/es/typography/Text';

const FinancialAccounting = () => {
  const financialStatements = [
    { key: 1, statement: 'Income Statement', purpose: 'Shows profitability over a period', keyLine: 'Net Income / EPS' },
    { key: 2, statement: 'Balance Sheet', purpose: 'Snapshot of assets, liabilities & equity at a point in time', keyLine: 'Assets = Liabilities + Equity' },
    { key: 3, statement: 'Cash Flow Statement', purpose: 'Tracks actual cash movement', keyLine: 'Ending Cash Balance' },
  ];

  const ratioCategories = [
    { key: '1',category: 'Profitability', ratios: 'Gross Margin, Operating Margin, Net Margin, ROE, ROA, ROIC' },
    { key: '2',category: 'Liquidity', ratios: 'Current Ratio, Quick Ratio, Cash Ratio' },
    { key: '3',category: 'Solvency/Leverage', ratios: 'Debt/Equity, Debt/EBITDA, Interest Coverage' },
    { key: '4',category: 'Efficiency', ratios: 'Asset Turnover, Inventory Days, Receivables Days, Payables Days' },
    { key: '5',category: 'Valuation', ratios: 'P/E, P/B, EV/EBITDA, PEG, Dividend Yield' },
  ];

  return (
    <Row>
      <Col span={20}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          <Title level={1}>Financial Accounting & Statement Analysis</Title>
          <Paragraph style={{ fontSize: '18px', color: '#595959' }}>
            Learn to read, interpret, and analyze the three financial statements like a professional analyst, CFO, or investor —
            completely free and explained step-by-step.
          </Paragraph>

          {/* 1. The Three Financial Statements */}
          <Divider orientation="horizontal">
            <div id="statements">
              <Space><FileTextOutlined /> The Three Core Financial Statements</Space>
            </div>
          </Divider>
          <Table
            columns={[
              { title: 'Statement', dataIndex: 'statement', key: 'statement' },
              { title: 'Purpose', dataIndex: 'purpose', key: 'purpose' },
              { title: 'Bottom Line', dataIndex: 'keyLine', key: 'keyLine' },
            ]}
            dataSource={financialStatements}
            pagination={false}
            bordered
          />

          {/* 2. Income Statement Deep Dive */}
          <Divider orientation="horizontal">
            <div id="income">
              <Space><AccountBookOutlined /> Income Statement (P&L)</Space>
            </div>
          </Divider>
          <Card>
            <Timeline
              items={[
                { content: 'Revenue (Sales)' },
                { content: '− Cost of Goods Sold (COGS) → Gross Profit' },
                { content: '− Operating Expenses (SG&A, R&D) → Operating Income (EBIT)' },
                { content: '± Other Income/Expense → Pre-tax Income' },
                { content: '− Taxes → Net Income' },
                { content: '− Preferred Dividends → Earnings Available to Common → EPS' },
              ]}
            />
            <Alert
              title="Pro Tip: Always look at both Gross Margin and Operating Margin trends — they tell you if the real health of the business model."
              type="info"
              showIcon
              style={{ marginTop: 24 }}
            />
          </Card>

          {/* 3. Balance Sheet */}
          <Divider orientation="horizontal">
            <div id="balance">
              <Space><BarChartOutlined /> Balance Sheet</Space>
            </div>
          </Divider>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card title="Assets = Liabilities + Equity (Always true)">
                <Text strong>Current Assets:</Text> Cash, A/R, Inventory<br />
                <Text strong>Non-current:</Text> PP&E, Intangibles, Goodwill<br /><br />
                <Text strong>Current Liabilities:</Text> A/P, Short-term debt<br />
                <Text strong>Long-term:</Text> Bonds, Leases<br />
                <Text strong>Equity:</Text> Common Stock + Retained Earnings
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Key Concepts">
                <Text strong>Working Capital</Text> = Current Assets − Current Liabilities<br />
                <Text strong>Book Value</Text> = Total Equity<br />
                <Text strong>Tangible Book Value</Text> = Equity − Goodwill − Intangibles
              </Card>
            </Col>
          </Row>

          {/* 4. Cash Flow Statement */}
          <Divider orientation="horizontal">
            <div id="cashflow">
              <Space><DollarOutlined /> Cash Flow Statement — Most Important</Space>
            </div>
          </Divider>
          <Alert
            title="Warren Buffett: “Cash is king.” Many companies with strong profits go bankrupt because of poor cash flow."
            type="warning"
            showIcon
          />
          <Tabs
            items={[
              {
                key: '1',
                label: 'Operating Cash Flow',
                children: (
                  <>
                    Start with Net Income → Add back non-cash (D&A) → ± Changes in Working Capital → CFO<br /><br />
                    <Text strong>Best companies:</Text> CFO consistently &gt; Net Income
                  </>
                ),
              },
              {
                key: '2',
                label: 'Investing Cash Flow',
                children: 'CapEx, acquisitions, asset sales. Negative is normal for growing firms.',
              },
              {
                key: '3',
                label: 'Financing Cash Flow',
                children: 'Debt issuance/repayment, dividends, share buybacks',
              },
            ]}
          />

          {/* 5. Financial Ratios */}
          <Divider orientation="horizontal">
            <div id="ratios">
              <Space><CalculatorOutlined /> Key Financial Ratios Every Investor Must Know</Space>
            </div>
          </Divider>
          <Table
            columns={[
              { title: 'Category', dataIndex: 'category', key: 'category' },
              { title: 'Important Ratios', dataIndex: 'ratios', key: 'ratios' },
            ]}
            dataSource={ratioCategories}
            pagination={false}
            bordered
          />

          <Row gutter={[16, 24]} style={{ marginTop: 32 }}>
            <Col span={24}>
              <Card title="Rule-of-Thumb Benchmarks (2025)">
                <Text strong>ROE {'>'} 15%</Text> → Excellent<br />
                <Text strong>Current Ratio {'>'} 1.5</Text> → Safe liquidity<br />
                <Text strong>Debt/EBITDA {'<'} 3×</Text> → Conservative leverage<br />
                <Text strong>Free Cash Flow Yield {'>'} 5%</Text> → Attractive valuation
              </Card>
            </Col>
          </Row>

          {/* 6. Red Flags */}
          <Divider orientation="horizontal">
            <div id="redflags">
              <Space><AlertOutlined /> Common Accounting Red Flags</Space>
            </div>
          </Divider>
          <Card>
            <Card>
              <ul>
                <li>Aggressive revenue recognition</li>
                <li>Frequent “one-time” charges</li>
                <li>Rising DSO (Days Sales Outstanding)</li>
                <li>Capitalized expenses instead of expensed</li>
                <li>Sudden jump in goodwill from acquisitions</li>
                <li>CFO consistently {'<'} Net Income</li>
              </ul>
            </Card>

            {/* 7. Free Downloads */}
            {/*<Divider orientation="horizontal">*/}
            {/*  <div id="downloads">*/}
            {/*    <Space><DownloadOutlined /> Free Accounting & Analysis Templates</Space>*/}
            {/*  </div>*/}
            {/*</Divider>*/}
            {/*<Row gutter={[16, 24]}>*/}
            {/*  <Col xs={24} sm={12} lg={8}>*/}
            {/*    <Card hoverable actions={[<a href="/downloads/3-financial-statements-template.xlsx" download><DownloadOutlined /> Excel</a>]}>*/}
            {/*      <Card.Meta*/}
            {/*        title="Integrated 3-Statement Model"*/}
            {/*        description="Linked Income → Balance Sheet → Cash Flow with ratios dashboard"*/}
            {/*      />*/}
            {/*    </Card>*/}
            {/*  </Col>*/}
            {/*  <Col xs={24} sm={12} lg={8}>*/}
            {/*    <Card hoverable actions={[<a href="/downloads/financial-ratio-calculator.xlsx" download><DownloadOutlined /> Excel</a>]}>*/}
            {/*      <Card.Meta*/}
            {/*        title="50+ Financial Ratios Calculator"*/}
            {/*        description="Auto-calculates all key metrics from raw statements"*/}
            {/*      />*/}
            {/*    </Card>*/}
            {/*  </Col>*/}
            {/*  <Col xs={24} sm={12} lg={8}>*/}
            {/*    <Card hoverable actions={[<a href="/downloads/accounting-cheat-sheet.pdf" download><DownloadOutlined /> PDF</a>]}>*/}
            {/*      <Card.Meta*/}
            {/*        title="Accounting Cheat Sheet 2025"*/}
            {/*        description="All formulas, ratios in one printable page"*/}
            {/*      />*/}
            {/*    </Card>*/}
            {/*  </Col>*/}
            {/*</Row>*/}

            <Divider />
            <Title level={2} style={{ textAlign: 'center', color: '#1890ff' }}>
              Once you can read the three statements and calculate ratios,<br />
              you can understand any public company on Earth.
            </Title>
          </Card>
        </div>
      </Col>

      {/* Sidebar Anchor */}
      <Col span={4}>
        <Anchor
          affix={true}
          offsetTop={100}
          items={[
            { key: 'statements', href: '#statements', title: 'The Three Statements' },
            { key: 'income', href: '#income', title: 'Income Statement' },
            { key: 'balance', href: '#balance', title: 'Balance Sheet' },
            { key: 'cashflow', href: '#cashflow', title: 'Cash Flow Statement' },
            { key: 'ratios', href: '#ratios', title: 'Financial Ratios' },
            { key: 'redflags', href: '#redflags', title: 'Red Flags' },
            // { key: 'downloads', href: '#downloads', title: 'Free Templates' },
          ]}
        />
      </Col>
    </Row>
);
};

export default FinancialAccounting;