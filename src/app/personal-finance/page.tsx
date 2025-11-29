'use client'
import React from 'react';
import {
  Card,
  Row,
  Col,
  Divider,
  Space,
  Anchor,
  Tag,
  Alert,
  Progress,
  // Statistic,
  Tabs,
  Timeline,
  // Button,
} from 'antd';
import {
  WalletOutlined,
  CreditCardOutlined,
  FlagOutlined,
  BankOutlined,
  // CalculatorOutlined,
  // DownloadOutlined,
  FireOutlined,
  ThunderboltOutlined,
  HeartOutlined,
  // BulbOutlined,
} from '@ant-design/icons';
import {createStyles} from 'antd-style';

import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";

const {Meta} = Card;

const useStyles = createStyles(({token}) => ({
  card: {
    height: '100%',
    transition: 'all 0.3s',
    '&:hover': {transform: 'translateY(-6px)', boxShadow: token.boxShadow},
  },
  statCard: {
    textAlign: 'center',
    borderRadius: 12,
    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    transition: 'all 0.3s',
    '&:hover': {transform: 'translateY(-6px)', boxShadow: token.boxShadow},
  },
}));

const PersonalFinance = () => {
  const {styles} = useStyles();

  return (
    <Row>
      <Col span={20}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '40px 20px'}}>

          {/* Hero */}
          <Title level={1}>Personal Finance & Budgeting</Title>
          <Paragraph style={{fontSize: '19px', color: '#595959', maxWidth: '800px'}}>
            The only page you’ll ever need to go from <Text strong style={{fontSize: '19px',}}>financial
            stress</Text> to
            <Text strong style={{fontSize: '19px',}}> financial freedom</Text>.
            Completely free, no ads, no email required.
          </Paragraph>

          {/* Quick Win Stats */}
          {/*<Row gutter={24} style={{marginBottom: 48}}>*/}
          {/*  <Col xs={12} sm={8}>*/}
          {/*    <Card className={styles.statCard}>*/}
          {/*      <Statistic title="Average student saves" value="$4,200" suffix="/year" valueStyle={{color: '#3f8600'}}/>*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={12} sm={8}>*/}
          {/*    <Card className={styles.statCard}>*/}
          {/*      <Statistic title="Pay off debt faster by" value="37" suffix="%" valueStyle={{color: '#cf1322'}}/>*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={12} sm={8}>*/}
          {/*    <Card className={styles.statCard}>*/}
          {/*      <Statistic title="Build emergency fund in" value="9" suffix="months" valueStyle={{color: '#1890ff'}}/>*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
            {/*<Col xs={12} sm={6}>*/}
            {/*  <Card className={styles.statCard}>*/}
            {/*    <Statistic title="Learners worldwide" value="250K+" valueStyle={{color: '#722ed1'}}/>*/}
            {/*  </Card>*/}
            {/*</Col>*/}
          {/*</Row>*/}

          {/* 1. Budgeting Mastery */}
          <Divider orientation="horizontal">
            <div id="budgeting">
              <Space><WalletOutlined/> Budgeting Mastery</Space>
            </div>
          </Divider>
          <Title level={4}>What is a Budget?</Title>
          <Paragraph>A budget is a spending plan that tells your money where to go instead of wondering where it went.</Paragraph>

          <Row gutter={[24, 32]}>
            <Col xs={24} md={8}>
              <Card className={styles.card}>
                <Meta
                  title={<><FireOutlined style={{color: '#ff4facfe'}}/> 50/30/20 Rule</>}
                  description={
                    <>
                      <Text strong>50%</Text> Needs<br/>
                      <Text strong>30%</Text> Wants<br/>
                      <Text strong>20%</Text> Savings + Debt<br/><br/>
                      <Tag color="green">Perfect for beginners</Tag>
                    </>
                  }
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className={styles.card}>
                <Meta
                  title={<><ThunderboltOutlined style={{color: '#f83600'}}/> Zero-Based Budget</>}
                  description={
                    <>
                      Every dollar gets a job<br/>
                      Income − Expenses − Savings = 0<br/><br/>
                      <Tag color="volcano">Maximum control</Tag>
                    </>
                  }
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className={styles.card}>
                <Meta
                  title={<><HeartOutlined style={{color: '#eb2f96'}}/> Pay-Yourself-First</>}
                  description={
                    <>
                      Auto-save 20% first<br/>
                      Then live on the rest<br/><br/>
                      <Tag color="magenta">Wealth-builder favorite</Tag>
                    </>
                  }
                />
              </Card>
            </Col>
          </Row>

          <Alert
            title="Pro Tip: Track your expenses for 30 days first — most people are shocked to see where their money actually goes."
            type="success"
            showIcon
            style={{margin: '32px 0'}}
          />

          {/* 2. Debt Destruction Strategies */}
          <Divider orientation="horizontal">
            <div id="debt">
              <Space><CreditCardOutlined/> Debt Destruction Strategies</Space>
            </div>
          </Divider>

          <Tabs
            items={[
              {
                key: 'snowball',
                label: 'Debt Snowball (Motivation Monster)',
                children: (
                  <Card>
                    <Timeline
                      items={[
                        {content: 'List debts smallest → largest (ignore interest)'},
                        {content: 'Pay minimums on all'},
                        {content: 'Attack smallest debt with extra dollar'},
                        {content: 'Roll payment into next → snowball effect'},
                      ]}
                    />
                    <Text type="success"><strong>Best if you need quick wins</strong></Text>
                  </Card>
                ),
              },
              {
                key: 'avalanche',
                label: 'Debt Avalanche (Mathematically Optimal)',
                children: (
                  <Card>
                    <Timeline
                      items={[
                        {content: 'List debts highest → lowest interest rate'},
                        {content: 'Pay minimums on all'},
                        {content: 'Attack highest-interest debt first'},
                        {content: 'Save maximum interest over time'},
                      ]}
                    />
                    <Text type="danger"><strong>Saves the most money</strong></Text>
                  </Card>
                ),
              },
            ]}
          />

          {/* 3. Emergency Fund Builder */}
          <Divider orientation="horizontal">
            <div id="emergency">
              <Space><BankOutlined/> Emergency Fund Builder</Space>
            </div>
          </Divider>

          <Row gutter={24}>
            <Col span={24}>
              <Card>
                <Row gutter={48} align="middle">
                  <Col xs={24} md={12}>
                    <Title level={3}>Your Safety Net Levels</Title>
                    <Progress percent={25} strokeColor="#52c41a" format={() => 'Level 1: $1,000'}/>
                    <Progress percent={50} strokeColor="#1890ff" format={() => 'Level 2: 3 Months Expenses'}
                              style={{margin: '16px 0'}}/>
                    <Progress percent={75} strokeColor="#722ed1" format={() => 'Level 3: 6 Months'}/>
                    <Progress percent={100} strokeColor="#f5222d" format={() => 'Level 4: 12 Months'}
                              style={{marginTop: 16}}/>
                  </Col>
                  <Col xs={24} md={12}>
                    <Title level={4}>Best Places in 2025 (4–5.3% APY)</Title>
                    <ul>
                      <li>• Ally Bank • Marcus • SoFi • Capital One 360</li>
                      <li>• Treasury Bills (via TreasuryDirect.gov)</li>
                      <li>• High-Yield Money Market Funds (VMFXX, SPRXX)</li>
                      <li>✅ Safe, liquid, and earning interest.</li>
                    </ul>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          {/* 4. SMART Goal Setting + Calculator Teaser */}
          <Divider orientation="horizontal">
            <div id="goals">
              <Space><FlagOutlined/> Turn Dreams into Deadlines (S.M.A.R.T Goals)</Space>
            </div>
          </Divider>

          <Card style={{marginBottom: 32}}>
            <Text>Make every goal <Text strong>S.M.A.R.T</Text> (Specific, Measurable, Achievable, Relevant, Time-bound)</Text>
            <Title level={4}>Bad Goal Examples</Title>
            <ul>
              <li>“Save more money”</li>
            </ul>
            <Title level={4}>Good Goal Examples</Title>
            <ul>
              <li>“Save $20,000 for a house down payment by December 2027 by auto-saving $550/month”</li>
              <li>“Pay off $15,000 credit card debt in 18 months using avalanche method”</li>
              <li>“Build $12,000 emergency fund by June 2026 ($500/paycheck)”</li>
            </ul>
          </Card>

          {/* 5. Free Tools | Now with Previews */}
          {/*<Divider orientation="horizontal">*/}
          {/*  <div id="tools">*/}
          {/*    <Space><CalculatorOutlined/> Free Professional Tools (Instant Download)</Space>*/}
          {/*  </div>*/}
          {/*</Divider>*/}

          {/*<Row gutter={[24, 32]}>*/}
          {/*  <Col xs={24} sm={12} lg={12}>*/}
          {/*    <Card*/}
          {/*      className={styles.card}*/}
          {/*      // cover={<img alt="budget template" src="/previews/budget-preview.png"*/}
          {/*      //             style={{borderRadius: '8px 8px 0 0'}}/>}*/}
          {/*      actions={[<a href="/downloads/budget-template.xlsx" download><DownloadOutlined/> Download Excel</a>]}*/}
          {/*    >*/}
          {/*      <Meta title="Ultimate Budget Template" description="50/30/20 + Zero-Based + Pay-Yourself-First"/>*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={12}>*/}
          {/*    <Card*/}
          {/*      className={styles.card}*/}
          {/*      // cover={<img alt="debt calculator" src="/previews/debt-preview.png"/>}*/}
          {/*      actions={[<a href="/downloads/debt-snowball-calculator.xlsx" download><DownloadOutlined/> Download</a>]}*/}
          {/*    >*/}
          {/*      <Meta title="Debt Payoff Calculator" description="Snowball vs Avalanche comparison + payoff date"/>*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={12}>*/}
          {/*    <Card*/}
          {/*      className={styles.card}*/}
          {/*      // cover={<img alt="net worth" src="/previews/networth-preview.png"/>}*/}
          {/*      actions={[<a href="/downloads/net-worth-tracker.xlsx" download><DownloadOutlined/> Download</a>]}*/}
          {/*    >*/}
          {/*      <Meta title="Net Worth Tracker" description="Track assets, liabilities, progress over time"/>*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={12}>*/}
          {/*    <Card*/}
          {/*      className={styles.card}*/}
          {/*      // cover={<img alt="emergency fund" src="/previews/emergency-preview.png"/>}*/}
          {/*      actions={[<a href="/downloads/emergency-fund-tracker.xlsx" download><DownloadOutlined/> Download</a>]}*/}
          {/*    >*/}
          {/*      <Meta title="Emergency Fund Thermometer" description="Visual progress + auto-calculating"/>*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          {/* Final CTA */}
          {/*<Divider/>*/}
          {/*<div style={{textAlign: 'center', padding: '60px 0'}}>*/}
          {/*  <Title level={2} style={{color: '#1890ff'}}>*/}
          {/*    Your money. Your rules.<br/>*/}
          {/*    Take control today | 100% free.*/}
          {/*  </Title>*/}
          {/*  <Space size={20} style={{marginTop: 32}}>*/}
          {/*    <a href="/downloads/budget-template.xlsx" download>*/}
          {/*      <Button type="primary" size="large" icon={<DownloadOutlined/>}>*/}
          {/*        Download All Templates (Free)*/}
          {/*      </Button>*/}
          {/*    </a>*/}
          {/*  </Space>*/}
          {/*</div>*/}
        </div>
      </Col>

      {/* Sidebar */}
      <Col span={4}>
        <Anchor
          affix={true}
          offsetTop={100}
          items={[
            {key: 'budgeting', href: '#budgeting', title: 'Budgeting Mastery'},
            {key: 'debt', href: '#debt', title: 'Debt Strategies'},
            {key: 'emergency', href: '#emergency', title: 'Emergency Fund'},
            {key: 'goals', href: '#goals', title: 'S.M.A.R.T Goals'},
            // {key: 'tools', href: '#tools', title: 'Free Tools & Templates'},
          ]}
        />
      </Col>
    </Row>
  );
};

export default PersonalFinance;