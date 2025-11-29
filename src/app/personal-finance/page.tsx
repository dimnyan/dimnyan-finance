'use client'
import React from 'react';
import {Card, Row, Col, Divider, Space, Anchor} from 'antd';
import {
  WalletOutlined,
  CreditCardOutlined,
  FlagOutlined,
  BankOutlined
} from '@ant-design/icons';

import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";

const PersonalFinance = () => {
  return (
    <Row>
      <Col span={20}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '40px 20px'}}>
          <Title level={1}>Personal Finance & Budgeting</Title>
          <Paragraph style={{fontSize: '18px', color: '#595959'}}>
            Master the fundamentals of managing your money: create a budget that works, pay off debt faster,
            build an emergency fund, and achieve your biggest financial goals | completely free.
          </Paragraph>


          {/* ===== 1. Budgeting Basics ===== */}
          <Divider orientation="horizontal">
            <div id="budgeting">
              <Space><WalletOutlined/> Budgeting Basics</Space>
            </div>
          </Divider>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={12} lg={8}>
              <Card hoverable title="What is a Budget?">
                A budget is a spending plan that tells your money where to go instead of wondering where it went.
              </Card>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <Card hoverable title="50/30/20 Rule (Recommended for Beginners)">
                <Text strong>50%</Text> Needs (rent, food, bills)<br/>
                <Text strong>30%</Text> Wants (entertainment, dining)<br/>
                <Text strong>20%</Text> Savings & Debt repayment
              </Card>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <Card hoverable title="Zero-Based Budgeting">
                Every dollar is assigned a job. Income − Expenses − Savings = 0
              </Card>
            </Col>
          </Row>

          <Paragraph style={{marginTop: 30, fontSize: '16px'}}>
            <strong>Pro Tip:</strong> Track your expenses for 30 days first | most people are shocked to see where their
            money actually goes.
          </Paragraph>

          {/* ===== 2. Debt Management ===== */}
          <Divider orientation="horizontal">
            <div id="debt">
              <Space><CreditCardOutlined/> Debt Management</Space>
            </div>
          </Divider>

          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="Two Proven Debt Repayment Strategies">
                <Row gutter={32}>
                  <Col xs={24} md={12}>
                    <Title level={4}>Snowball Method (Dave Ramsey)</Title>
                    <ol>
                      <li>List debts smallest to largest</li>
                      <li>Pay minimums on everything</li>
                      <li>Throw every extra dollar at the smallest debt</li>
                      <li>Roll payment into next debt → snowball effect</li>
                    </ol>
                    <Text type="success"><strong>Best for motivation</strong></Text>
                  </Col>
                  <Col xs={24} md={12}>
                    <Title level={4}>Avalanche Method (Mathematically Optimal)</Title>
                    <ol>
                      <li>List debts highest interest rate to lowest</li>
                      <li>Pay minimums on all</li>
                      <li>Attack the highest-interest debt first</li>
                    </ol>
                    <Text type="danger"><strong>Saves the most money long-term</strong></Text>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          {/* ===== 3. Emergency Fund ===== */}
          <Divider orientation="horizontal">
            <div id="emergency">
              <Space>
                <BankOutlined/>
                Emergency Fund
              </Space>
            </div>
          </Divider>

          <Card>
            <Title level={3}>How Much Should You Save?</Title>
            <ul style={{fontSize: '16px'}}>
              <li><strong>Beginner goal:</strong> $1,000</li>
              <li><strong>Standard goal:</strong> 3–6 months of essential expenses</li>
              <li><strong>Maximum security:</strong> 9–12 months (freelancers, single income)</li>
            </ul>

            <Title level={4} style={{marginTop: 30}}>Where to Keep It</Title>
            <Text>
              High-yield savings account (4–5% APY in 2025) or money-market fund | safe, liquid, and earning interest.
            </Text>
          </Card>

          {/* ===== 4. Financial Goal Setting ===== */}
          <Divider orientation="horizontal">
            <div id="goals">
              <Space><FlagOutlined/> Financial Goal Setting (SMART Framework)</Space>
            </div>
          </Divider>

          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Card>
                <Paragraph>
                  Make every goal <Text strong>S</Text>pecific, <Text strong>M</Text>easurable, <Text
                  strong>A</Text>chievable,{' '}
                  <Text strong>R</Text>elevant, <Text strong>T</Text>ime-bound.
                </Paragraph>
                <Title level={5}>Examples:</Title>
                <ul>
                  <li>Bad: “Save more money”</li>
                  <li>Good: “Save $10,000 for a house down payment by Dec 31, 2027 by auto-transferring $300/paycheck”
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>

          {/* ===== 5. Free Tools & Downloads ===== */}
          {/*<Divider orientation="horizontal">*/}
          {/*  <div id="tools">*/}
          {/*    <Space><CalculatorOutlined/> Free Tools & Downloads</Space>*/}
          {/*  </div>*/}
          {/*</Divider>*/}

          {/*<Row gutter={[16, 16]}>*/}
          {/*  <Col xs={24} sm={12} md={8}>*/}
          {/*    <Card*/}
          {/*      hoverable*/}
          {/*      actions={[*/}
          {/*        <a href="/downloads/budget-template.xlsx" key={'budget-template'} download>*/}
          {/*          <DownloadOutlined/> Excel / Google Sheets*/}
          {/*        </a>,*/}
          {/*      ]}*/}
          {/*    >*/}
          {/*      <Meta*/}
          {/*        title="Monthly Budget Template (50/30/20)"*/}
          {/*        description="Zero-based and 50/30/20 versions included"*/}
          {/*      />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}

          {/*  <Col xs={24} sm={12} md={8}>*/}
          {/*    <Card*/}
          {/*      hoverable*/}
          {/*      actions={[*/}
          {/*        <a href="/downloads/debt-snowball-calculator.xlsx" key={'debt-snowball-calculator'} download>*/}
          {/*          <DownloadOutlined/> Download*/}
          {/*        </a>,*/}
          {/*      ]}*/}
          {/*    >*/}
          {/*      <Meta*/}
          {/*        title="Debt Snowball & Avalanche Calculator"*/}
          {/*        description="See exact payoff dates and interest saved"*/}
          {/*      />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}

          {/*  <Col xs={24} sm={12} md={8}>*/}
          {/*    <Card*/}
          {/*      hoverable*/}
          {/*      actions={[*/}
          {/*        <a href="/downloads/emergency-fund-tracker.pdf" key={'emergency-fund-tracker'} download>*/}
          {/*          <DownloadOutlined/> PDF Tracker*/}
          {/*        </a>,*/}
          {/*      ]}*/}
          {/*    >*/}
          {/*      <Meta*/}
          {/*        title="Emergency Fund Progress Tracker"*/}
          {/*        description="Visual thermometer + milestone checklist"*/}
          {/*      />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          {/*<Divider/>*/}
          {/*<Title level={2} style={{textAlign: 'center', color: '#1890ff'}}>*/}
          {/*  Start taking control of your money today | for free.*/}
          {/*</Title>*/}
        </div>
      </Col>
      <Col span={4}>
        <Anchor
          affix={true}
          offsetTop={100}
          style={{marginBottom: 40}}
          items={[
            {
              key: 'budgeting',
              href: '#budgeting',
              title: 'Budgeting Basics',
            }, {
              key: 'debt',
              href: '#debt',
              title: 'Debt Management',
            }, {
              key: 'emergency',
              href: '#emergency',
              title: 'Emergency Fund',
            }, {
              key: 'goals',
              href: '#goals',
              title: 'Financial Goal Setting',
            },
            // {
            //   key: 'tools',
            //   href: '#tools',
            //   title: 'Free Tools & Downloads',
            // }
          ]}
        />
      </Col>
    </Row>
  );
};

export default PersonalFinance;