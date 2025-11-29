'use client'
import React from 'react';
import {
  Card,
  Row,
  Col,
  Divider,
  Anchor,
  Tag,
  Table,
  Tabs,
  Alert,
  Progress,
  Statistic,
  Timeline,
} from 'antd';
import {
  StockOutlined,
  FundOutlined,
  DollarOutlined,
  RiseOutlined,
  FallOutlined,
  RocketOutlined,
  BulbOutlined,
  FireOutlined, SafetyOutlined, BankOutlined, ExclamationCircleOutlined,
} from '@ant-design/icons';
import {createStyles} from 'antd-style';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import Text from 'antd/es/typography/Text';

const {Meta} = Card;

const useStyles = createStyles(({token}) => ({
  card: {
    height: '100%',
    transition: 'all 0.3s',
    '&:hover': {transform: 'translateY(-6px)', boxShadow: token.boxShadow},
  },
  heroStat: {
    textAlign: 'center',
    padding: '24px 0px',
    transition: 'all 0.3s',
    '&:hover': {transform: 'translateY(-6px)', boxShadow: token.boxShadow},
    // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: 12,
    // color: 'white',
  },
}));

const Investing = () => {
  const {styles} = useStyles();

  return (
    <Row>
      <Col span={20}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '40px 20px'}}>

          {/* Hero + Trust Stats */}
          <Title level={1}>Investing Fundamentals</Title>
          <Paragraph style={{fontSize: '19px', color: '#595959', maxWidth: '900px'}}>
            The only investing course you’ll ever need. From zero to building real wealth with stocks, ETFs, bonds,
            dividends,
            and the exact strategy used by Warren Buffett and 99% of millionaires.
          </Paragraph>

          <Row gutter={[24, 24]} style={{margin: '40px 0'}}>
            <Col xs={12} sm={6}>
              <Card className={styles.heroStat}>
                <Statistic title="S&P 500 Avg Return" value="10.7%" suffix="/year"/>
                <p style={{color: "#808080", fontSize: 13, marginTop: 10, marginBottom: 0}}>1926–2024 with dividends</p>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className={styles.heroStat}>
                <Statistic title="Index Funds Beat" value="92%" suffix=" of pros"/>
                <p style={{color: "#808080", fontSize: 13, marginTop: 10, marginBottom: 0}}>Over 15 years (SPIVA
                  2024)</p>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className={styles.heroStat}>
                <Statistic title="$1 → $88,000" value="in 60 yrs"/>
                <p style={{color: "#808080", fontSize: 13, marginTop: 10, marginBottom: 0}}>$100/month at 10%</p>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className={styles.heroStat}>
                <Statistic title="Best Investor Advice" value="VT + Chill"/>
                <p style={{color: "#808080", fontSize: 13, marginTop: 10, marginBottom: 0}}>One fund, entire world</p>
              </Card>
            </Col>
          </Row>

          {/* 1. Asset Classed Overview (Upgraded Table) */}
          <Divider/>
          <div id="assets">
            <Title level={3}><FundOutlined/> Asset Classes Overview (2025)</Title>
          </div>
          <div className={'p-3'}></div>

          <Table
            pagination={false}
            bordered
            dataSource={[
              {key: '1', type: 'Stocks', risk: 'High', return: '7–12%', liquidity: 'Instant', best: 'Long-term growth'},
              {
                key: '2',
                type: 'ETFs/Index Funds',
                risk: 'Market',
                return: '7–10%',
                liquidity: 'Instant',
                best: '99% of people'
              },
              {
                key: '3',
                type: 'Mutual Funds',
                risk: 'Varies',
                return: 'Varies',
                liquidity: 'High',
                best: 'Active management (higher fees)'
              },
              {key: '4', type: 'Bonds', risk: 'Low', return: '3–6%', liquidity: 'High', best: 'Stability & income'},
              {
                key: '5',
                type: 'Real Estate',
                risk: 'Medium',
                return: '6–10%',
                liquidity: 'Low',
                best: 'REITs or physical'
              },
              {
                key: '6',
                type: 'Gold/Crypto',
                risk: 'Very High',
                return: 'Volatile',
                liquidity: 'High',
                best: 'Small allocation'
              },
              {
                key: '7',
                type: 'Options/Futures',
                risk: 'Extreme',
                return: 'Leveraged',
                liquidity: 'High',
                best: 'Professionals only'
              },
            ]}
            columns={[
              {title: 'Asset', dataIndex: 'type', key: 'type'},
              {title: 'Risk', dataIndex: 'risk', key: 'risk'},
              {title: 'Avg Return', dataIndex: 'return', key: 'return'},
              {title: 'Liquidity', dataIndex: 'liquidity', key: 'liquidity'},
              {title: 'Best For', dataIndex: 'best', key: 'best'},
            ]}
          />

          {/* 2. Stocks */}
          <Divider/>
          <div id="stocks">
            <Title level={3}><StockOutlined/> Stocks (Equities)</Title>
          </div>
          <div className={'p-3'}></div>

          <Title level={4}>What is a Stock?</Title>
          <Paragraph>Ownership in a company. You profit from price appreciation + dividends.</Paragraph>
          <Text strong>Historical average return:</Text> ~10% per year (S&P 500, 1926–2024)

          <Title level={4}>Types of Stocks</Title>
          <Text strong>Growth stocks</Text> → High growth, low/no dividends (e.g., Tesla, Nvidia)<br/>
          <Text strong>Value stocks</Text> → Undervalued, often pay dividends (e.g., banks, energy)<br/>
          <Text strong>Blue-chip</Text> → Large, stable (Apple, Microsoft, Coca-Cola)

          {/* 3. Bonds */}
          <Divider/>
          <div id="bonds">
            <Title level={3}><DollarOutlined/> Bonds (Fixed Income)</Title>
          </div>
          <div className={'p-3'}></div>

          <Card>
            <Paragraph>
              You lend money to governments or companies → they pay you interest (coupon) and return principal at
              maturity.
            </Paragraph>
            <Tag color="green">Treasury Bonds</Tag> Safest <br/>
            <Tag color="blue">Corporate Bonds</Tag> Higher yield <br/>
            <Tag color="volcano">High-Yield (Junk)</Tag> Highest risk <br/>
          </Card>

          {/* 4. ETFs & Index Investing */}
          <Divider/>
          <div id="etfs">
            <Title level={3}><RiseOutlined/> ETFs & Index Investing (Recommended for 95% of People)</Title>
          </div>
          <div className={'p-3'}></div>

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

          <Alert
            title="The #1 strategy backed by Warren Buffett, Vanguard founder John Bogle, and decades of data: Buy low-cost broad-market index funds or ETFs and hold forever."
            type="success"
            showIcon
            style={{marginTop: 24}}
          />

          {/* 5. Mutual Funds */}
          <Divider/>
          <div id="mutual">
            <Title level={3}><BankOutlined/> Mutual Funds</Title>
          </div>
          <div className={'p-3'}></div>

          <Card>
            <Text>
              Actively managed baskets of stocks/bonds. Higher fees (0.5–2%) → most underperform index funds after fees.
            </Text>
            <br/><br/>
            <Text type="warning"><strong>Stick to index funds unless you have a specific reason.</strong></Text>
          </Card>

          {/* 6. The Golden Rule */}
          <Divider/>
          <div id="golden">
            <Title level={3}><RocketOutlined/> The One Rule That Beats 99% of Investors</Title>
          </div>
          <div className={'p-3'}></div>

          <Alert
            title="“Time in the market beats timing the market.” | Every study ever done."
            description="Missing the 10 best days in 30 years turns 10.7% → 6.1% annual return. Just stay invested."
            type="success"
            showIcon
            style={{marginBottom: 32, fontSize: '16px'}}
          />

          {/* 7. The Perfect Portfolio (Bogleheads Style) */}
          <Divider/>
          <div id="portfolio">
            <Title level={3}><SafetyOutlined/> The Forever Portfolio (Works in Any Decade)</Title>
          </div>
          <div className={'p-3'}></div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card title="Recommended Allocations by Age">
                <Timeline
                  items={[
                    {content: '20–30s: 90–100% Stocks (VTI + VXUS)'},
                    {content: '40s: 80% Stocks / 20% Bonds'},
                    {content: '50s: 70/30'},
                    {content: '60s+: 60/40 or 50/50'},
                    {content: 'Retirement: Add TIPS, Bonds, cash'},
                  ]}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Top 5 ETFs for Life (2025)">
                <Text strong>1. VT</Text> – Entire world stock market (one fund!)<br/>
                <Text strong>2. VTI</Text> – Total US<br/>
                <Text strong>3. VXUS</Text> – International ex-US<br/>
                <Text strong>4. BND</Text> – Total bond market<br/>
                <Text strong>5. SCHD</Text> – Dividend growth (optional)
              </Card>
            </Col>
          </Row>

          {/* 8. Compound Interest Calculator Teaser */}
          <Divider/>
          <div id="compound">
            <Title level={3}><FireOutlined/> The 8th Wonder of the World</Title>
          </div>
          <div className={'p-3'}></div>

          <Card style={{background: '#f9f0ff', marginBottom: 32}}>
            <Row align="middle" gutter={32}>
              <Col xs={24} md={12}>
                <Title level={3}>$200/month at 10% for 40 years</Title>
                <Title level={1} style={{color: '#722ed1'}}>$1,018,000</Title>
                <Text type="secondary">You invested only $96,000. The rest is magic.</Text>
              </Col>
              <Col xs={24} md={12}>
                <Progress percent={100} strokeColor="#722ed1" size="default"/>
                <Text>Starting at age 25 → Millionaire by 65</Text>
              </Col>
            </Row>
          </Card>

          {/* 9. Dividend Investing Done Right */}
          <Divider/>
          <div id="dividends">
            <Title level={3}><DollarOutlined/> Dividend Investing (The Smart Way)</Title>
          </div>
          <div className={'p-3'}></div>

          <Tabs items={[
            {
              key: 'growth',
              label: 'Dividend Growth (Best)',
              children: 'Focus on companies raising dividends 10%+/year → SCHD, DGRO, VIG',
            },
            {
              key: 'highyield',
              label: 'High Yield (Risky)',
              children: '6–12% yields often mean declining businesses. Avoid “yield traps”.',
            },
            {
              key: 'etfs',
              label: 'Best Dividend ETFs 2025',
              children: 'SCHD (4.1% yield + 12% growth) • VIG • DGRO • NOBL (Aristocrats)',
            },
          ]}/>

          {/* 10. Behavioral Finance & Common Mistakes */}
          <Divider/>
          <div id="psychology">
            <Title level={3}><BulbOutlined/> Psychology of Investing</Title>
          </div>
          <div className={'p-3'}></div>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card className={styles.card}>
                <Meta
                  title={<><FallOutlined/> Biggest Mistakes</>}
                  description={
                    <ul>
                      <li>Trying to time the market</li>
                      <li>Selling in panic (2020, 2022)</li>
                      <li>Chasing hot stocks</li>
                      <li>Paying 1–2% fees</li>
                    </ul>
                  }
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className={styles.card}>
                <Meta
                  title={<><RiseOutlined/> Winning Behaviors</>}
                  description={
                    <ul>
                      <li>Invest automatically every month</li>
                      <li>Never check portfolio daily</li>
                      <li>Rebalance once a year</li>
                      <li>Hold through crashes</li>
                    </ul>
                  }
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className={styles.card}>
                <Meta
                  title={<><ExclamationCircleOutlined/> Warren Buffett’s Two Rules</>}
                  description={
                    <>
                      <Text strong>Rule #1:</Text> Never lose money<br/>
                      <Text strong>Rule #2:</Text> Never forget Rule #1
                    </>
                  }
                />
              </Card>
            </Col>
          </Row>

          {/* 7. Free Tools (Now Active!) */}
          {/*<Divider orientation="horizontal">*/}
          {/*  <div id="tools">*/}
          {/*    <Space><DownloadOutlined /> Free Professional Investing Tools</Space>*/}
          {/*  </div>*/}
          {/*</Divider>*/}
          {/*<Row gutter={[24, 32]}>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          // cover={<img src="/previews/compound-preview.png" alt="compound" />}*/}
          {/*          actions={[<a href="/downloads/compound-interest-calculator.xlsx" download><DownloadOutlined /> Download</a>]}>*/}
          {/*      <Meta title="Compound Interest Calculator" description="See exactly when you’ll be a millionaire" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/asset-allocation-2025.xlsx" download><DownloadOutlined /> Download</a>]}>*/}
          {/*      <Meta title="Age-Based Portfolio Builder" description="Perfect stock/bond mix by age" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/dividend-tracker.xlsx" download><DownloadOutlined /> Download</a>]}>*/}
          {/*      <Meta title="Dividend Income Tracker" description="Monthly passive income dashboard" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/best-etfs-2025.pdf" download><DownloadOutlined /> PDF Guide</a>]}>*/}
          {/*      <Meta title="Best ETFs Cheat Sheet 2025" description="Top 20 ETFs for every goal" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          {/* Final CTA */}
          <Divider/>
          <div style={{textAlign: 'center', padding: '80px 0'}}>
            <Title level={2} style={{color: '#13c2c2'}}>
              Start with VT (or VTI + VXUS).<br/>
              Invest every month.<br/>
              Never sell.<br/>
              Become rich slowly.
            </Title>
            {/*<Space size={20} style={{ marginTop: 32 }}>*/}
            {/*  <a href="/downloads/compound-interest-calculator.xlsx" download>*/}
            {/*    <Button type="primary" size="large" icon={<DownloadOutlined />}>*/}
            {/*      Download All Tools (Free)*/}
            {/*    </Button>*/}
            {/*  </a>*/}
            {/*</Space>*/}
          </div>
        </div>
      </Col>

      {/* Sidebar */}
      <Col span={4}>
        <Anchor affix={true} offsetTop={100} items={[
          {key: 'assets', href: '#assets', title: 'Asset Classes Overview'},
          {key: 'stocks', href: '#stocks', title: 'Stocks'},
          {key: 'bonds', href: '#bonds', title: 'Bonds'},
          {key: 'etfs', href: '#etfs', title: 'ETFs & Index Investing'},
          {key: 'mutual', href: '#mutual', title: 'Mutual Funds'},
          {key: 'golden', href: '#golden', title: 'The Golden Rule'},
          {key: 'portfolio', href: '#portfolio', title: 'Forever Portfolio'},
          {key: 'compound', href: '#compound', title: 'Compound Magic'},
          {key: 'dividends', href: '#dividends', title: 'Dividends'},
          {key: 'psychology', href: '#psychology', title: 'Psychology'},
          // { key: 'tools', href: '#tools', title: 'Free Tools' },
        ]}/>
      </Col>
    </Row>
  );
};

export default Investing;