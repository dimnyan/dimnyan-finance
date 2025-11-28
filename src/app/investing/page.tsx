import React from 'react';
import {
  Typography,
  Card,
  Row,
  Col,
  Divider,
  Space,
  Anchor,
  Tag,
  Table,
  Tabs,
  Alert,
} from 'antd';
import {
  StockOutlined,
  FundOutlined,
  DollarOutlined,
  RiseOutlined,
  FallOutlined,
  DownloadOutlined,
  AlertOutlined,
} from '@ant-design/icons';
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";

const {Link} = Anchor;
const {TabPane} = Tabs;

const Investing = () => {
  const assetComparisonColumns = [
    {title: 'Asset Type', dataIndex: 'type', key: 'type'},
    {title: 'Risk Level', dataIndex: 'risk', key: 'risk'},
    {title: 'Return Potential', dataIndex: 'return', key: 'return'},
    {title: 'Liquidity', dataIndex: 'liquidity', key: 'liquidity'},
    {title: 'Best For', dataIndex: 'best', key: 'best'},
  ];

  const assetComparisonData = [
    {
      key: '1',
      type: 'Stocks',
      risk: 'High',
      return: 'High (7–12% long-term)',
      liquidity: 'Very High',
      best: 'Growth & dividends'
    },
    {
      key: '2',
      type: 'Bonds',
      risk: 'Low–Medium',
      return: 'Moderate (2–6%)',
      liquidity: 'High',
      best: 'Income & stability'
    },
    {
      key: '3',
      type: 'ETFs',
      risk: 'Varies',
      return: 'Matches index',
      liquidity: 'Very High',
      best: 'Diversification & low cost'
    },
    {
      key: '4',
      type: 'Mutual Funds',
      risk: 'Varies',
      return: 'Varies',
      liquidity: 'High',
      best: 'Active management (higher fees)'
    },
    {
      key: '5',
      type: 'Index Funds',
      risk: 'Market risk',
      return: '7–10% historical',
      liquidity: 'High',
      best: 'Passive long-term wealth'
    },
    {
      key: '6',
      type: 'Options',
      risk: 'Very High',
      return: 'Unlimited / −100%',
      liquidity: 'High',
      best: 'Advanced hedging / leverage'
    },
    {
      key: '7',
      type: 'Futures',
      risk: 'Extremely High',
      return: 'Leveraged',
      liquidity: 'High',
      best: 'Professional speculation / hedging'
    },
  ];

  return (
    <Row>
      <Col span={20}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '40px 20px'}}>
          <Title level={1}>Investing Fundamentals</Title>
          <Paragraph style={{fontSize: '18px', color: '#595959'}}>
            Everything you need to start investing wisely — Stocks, Bonds, ETFs, Mutual Funds, Index Investing, Dividend
            Strategies, Options & Futures — explained simply and for free.
          </Paragraph>

          {/* 1. Quick Comparison Table */}
          <Divider orientation="horizontal">
            <div id={"overview"}>
              <Space><FundOutlined/> Investment Asset Class Comparison</Space>
            </div>
          </Divider>
          <Table
            columns={assetComparisonColumns}
            dataSource={assetComparisonData}
            pagination={false}
            bordered
            size="middle"
          />

          {/* 2. Stocks */}
          <Divider orientation="horizontal">
            <div id="stocks">
              <Space><StockOutlined/> Stocks (Equities)</Space>
            </div>
          </Divider>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card title="What is a Stock?">
                Ownership in a company. You profit from price appreciation + dividends.
                <br/><br/>
                <Text strong>Historical average return:</Text> ~10% per year (S&P 500, 1926–2024)
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Types of Stocks">
                <Text strong>Growth stocks</Text> → High growth, low/no dividends (e.g., Tesla, Nvidia)<br/>
                <Text strong>Value stocks</Text> → Undervalued, often pay dividends (e.g., banks, energy)<br/>
                <Text strong>Blue-chip</Text> → Large, stable (Apple, Microsoft, Coca-Cola)
              </Card>
            </Col>
          </Row>

          {/* 3. Bonds */}
          <Divider orientation="horizontal">
            <div id="bonds">
              <Space><DollarOutlined/> Bonds (Fixed Income)</Space>
            </div>
          </Divider>
          <Card>
            <Paragraph>
              You lend money to governments or companies → they pay you interest (coupon) and return principal at
              maturity.
            </Paragraph>
            <Row gutter={16}>
              <Col span={8}><Tag color="green">Treasury Bonds</Tag> Safest</Col>
              <Col span={8}><Tag color="blue">Corporate Bonds</Tag> Higher yield</Col>
              <Col span={8}><Tag color="volcano">High-Yield (Junk)</Tag> Highest risk</Col>
            </Row>
          </Card>

          {/* 4. ETFs & Index Investing */}
          <Divider orientation="horizontal">
            <div id="etfs">
              <Space><RiseOutlined/> ETFs & Index Investing (Recommended for 95% of People)</Space>
            </div>
          </Divider>
          <Alert
            message="The #1 strategy backed by Warren Buffett, Vanguard founder John Bogle, and decades of data: Buy low-cost broad-market index funds or ETFs and hold forever."
            type="success"
            showIcon
            style={{marginBottom: 24}}
          />
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <Card title="Best Beginner ETFs (2025)">
                <ul>
                  <li>VOO / VTI – Total US Stock Market</li>
                  <li>VXUS / IXUS – International Stocks</li>
                  <li>BND / AGG – Total Bond Market</li>
                  <li>VT – Entire World Stock Market (one-fund solution)</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card title="Why Index Investing Wins">
                • Beats 90%+ of active funds over 10+ years<br/>
                • Expense ratios &lt; 0.05%<br/>
                • No stock-picking stress<br/>
                • Automatic diversification
              </Card>
            </Col>
          </Row>

          {/* 5. Mutual Funds */}
          <Divider orientation="horizontal">
            <div id="mutual">
              Mutual Funds
            </div>
          </Divider>
          <Card>
            <Text>
              Actively managed baskets of stocks/bonds. Higher fees (0.5–2%) → most underperform index funds after fees.
            </Text>
            <br/><br/>
            <Text type="warning"><strong>Stick to index funds unless you have a specific reason.</strong></Text>
          </Card>

          {/* 6. Dividend Strategies */}
          <Divider orientation="horizontal">
            <div id="dividends">
              <Space><DollarOutlined/> Dividend Investing Strategies</Space>
            </div>
          </Divider>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Dividend Growth" key="1">
              Buy companies that raise dividends every year (Dividend Aristocrats).<br/>
              Examples: Procter & Gamble, Johnson & Johnson, 3M<br/>
              Goal: Growing passive income stream
            </TabPane>
            <TabPane tab="High-Yield" key="2">
              High current yield (6–10%).<br/>
              Warning: Often value traps or declining businesses.<br/>
              Better: Focus on sustainable payout ratio &lt; 60%
            </TabPane>
            <TabPane tab="Dividend ETF Examples" key="3">
              • SCHD – Schwab U.S. Dividend Equity (top quality + yield)<br/>
              • VYM – Vanguard High Dividend Yield<br/>
              • DGRO – iShares Core Dividend Growth
            </TabPane>
          </Tabs>

          {/* 7. Options & Futures (Advanced) */}
          <Divider orientation="horizontal">
            <div id="options">
              <Space><AlertOutlined/> Options & Futures (Advanced — High Risk)</Space>
            </div>
          </Divider>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card title="Call & Put Options">
                <Text strong>Call</Text> → Right to BUY at strike price<br/>
                <Text strong>Put</Text> → Right to SELL at strike price<br/><br/>
                <Text type="danger">95% of retail options traders lose money.</Text>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Futures">
                Contracts to buy/sell assets (oil, gold, S&P) at future date.<br/>
                Massive leverage → suitable only for professionals.
              </Card>
            </Col>
          </Row>

          {/* 8. Free Downloads */}
          {/*<Divider id="downloads" orientation="horizontal">*/}
          {/*  <Space><DownloadOutlined /> Free Investing Tools & Templates</Space>*/}
          {/*</Divider>*/}
          {/*<Row gutter={[16, 24]}>*/}
          {/*  <Col xs={24} sm={12} md={8}>*/}
          {/*    <Card hoverable actions={[<a href="/downloads/asset-allocation-calculator.xlsx" download><DownloadOutlined /> Excel</a>]}>*/}
          {/*      <Card.Meta title="Asset Allocation Calculator" description="Find your perfect stock/bond mix by age & risk" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} md={8}>*/}
          {/*    <Card hoverable actions={[<a href="/downloads/dividend-tracker.xlsx" download><DownloadOutlined /> Download</a>]}>*/}
          {/*      <Card.Meta title="Dividend Income Tracker" description="Track yield on cost & monthly income" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} md={8}>*/}
          {/*    <Card hoverable actions={[<a href="/downloads/etf-comparison.pdf" download><DownloadOutlined /> PDF Guide</a>]}>*/}
          {/*      <Card.Meta title="2025 Best ETFs Cheat Sheet" description="Top 15 ETFs for every goal" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          <Divider/>
          <Title level={2} style={{textAlign: 'center', color: '#08979c'}}>
            Start with a low-cost global index fund (VT or VTI + VXUS).<br/>
            Time in the market beats timing the market.
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
              title: 'Asset Class Overview',
            }, {
              key: 'stocks',
              href: '#stocks',
              title: 'Stocks',
            }, {
              key: 'bonds',
              href: '#bonds',
              title: 'Bonds',
            }, {
              key: 'etfs',
              href: '#etfs',
              title: 'ETFs & Index Funds',
            },
            {
              key: 'mutual',
              href: '#mutual',
              title: 'Mutual Funds',
            },
            {
              key: 'dividends',
              href: '#dividends',
              title: 'Dividend Investing',
            },
            {
              key: 'options',
              href: '#options',
              title: 'Options & Futures (Advanced)',
            },
            // {
            //   key: 'downloads',
            //   href: '#downloads',
            //   title: 'Free Tools & Downloads',
            // },
          ]}
        />
      </Col>
    </Row>
  );
};

export default Investing;