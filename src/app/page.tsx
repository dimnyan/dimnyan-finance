'use client'
import React from 'react';
import { Row, Col, Card, Button, Space, Divider, Tag } from 'antd';
import {
  WalletOutlined,
  StockOutlined,
  BankOutlined,
  FileTextOutlined,
  RiseOutlined,
  DownloadOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';
import { createStyles } from 'antd-style';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import Text from 'antd/es/typography/Text';

const { Meta } = Card;

// Modern Ant Design v5 styling
const useStyles = createStyles(({ token }) => ({
  hero: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '120px 20px',
    textAlign: 'center' as const,
  },
  card: {
    height: '100%',
    textAlign: 'center' as const,
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
    },
  },
  cardIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
}));

const Home = () => {
  const { styles } = useStyles();

  const courses = [
    { title: 'Personal Finance & Budgeting',        icon: <WalletOutlined />,      path: '/personal-finance',  color: '#52c41a' },
    { title: 'Investing — Stocks, ETFs, Dividends', icon: <StockOutlined />,       path: '/investing',         color: '#1890ff' },
    { title: 'Cryptocurrency & Blockchain',         icon: <>&#8383;</>,            path: '/crypto',            color: '#f39c12' },
    { title: 'Corporate Finance & Valuation',       icon: <BankOutlined />,        path: '/corporate-finance', color: '#722ed1' },
    { title: 'Financial Accounting & Analysis',     icon: <FileTextOutlined />,    path: '/accounting',        color: '#eb2f96' },
    { title: 'Economics — Micro & Macro',           icon: <RiseOutlined />,       path: '/economics',         color: '#13c2c2' },
  ];

  return (
    <>
      {/* Hero */}
      <div className={styles.hero}>
        <Title level={1} style={{ color: 'white', fontSize: '56px', marginBottom: 24 }}>
          Master Finance.<br />Completely Free. Forever.
        </Title>
        <Paragraph style={{ fontSize: '22px', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto 40px'}}>
          Professional-grade courses on personal finance, investing, crypto, valuation, accounting & economics —
          with free Excel templates and zero ads.
        </Paragraph>
        <Space size={24}>
          <Button type="primary" size="large" href="#courses" style={{ height: 56, padding: '0 40px', fontSize: '18px' }}>
            Start Learning Now
          </Button>
          <Button size="large" ghost style={{ height: 56, padding: '0 40px', fontSize: '18px' }}>
            <DownloadOutlined /> Free Templates
          </Button>
        </Space>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>

        {/* Trust Signals */}
        <Row gutter={[32, 48]} justify="center" style={{ marginBottom: 80 }}>
          <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
            <CheckCircleFilled style={{ fontSize: 52, color: '#52c41a' }} />
            <Title level={3}>100% Free</Title>
            <Text>No registration • No ads • No paywall</Text>
          </Col>
          <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
            <CheckCircleFilled style={{ fontSize: 52, color: '#1890ff' }} />
            <Title level={3}>Professional Level</Title>
            <Text>Used by analysts, MBAs, CFA students</Text>
          </Col>
          <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
            <CheckCircleFilled style={{ fontSize: 52, color: '#722ed1' }} />
            <Title level={3}>Free Excel Tools</Title>
            <Text>DCF • LBO • Budget • Crypto Tracker</Text>
          </Col>
        </Row>

        {/* Course Grid */}
        <div id="courses">
          <Title level={2} style={{ textAlign: 'center', marginBottom: 60 }}>
            Choose Your Learning Path
          </Title>

          <Row gutter={[24, 32]}>
            {courses.map((course) => (
              <Col xs={24} sm={12} lg={8} key={course.title}>
                <Card
                  hoverable
                  className={styles.card}
                  styles={{
                    body: { padding: '24px' },
                  }}
                  actions={[
                    <Button key={'1'} type="link" href={course.path} style={{ fontWeight: 600 }}>
                      Start Course →
                    </Button>,
                  ]}
                >
                  <div className={styles.cardIcon} style={{ color: course.color }}>
                    {course.icon}
                  </div>
                  <Meta
                    title={<Title level={4} style={{ margin: 0 }}>{course.title}</Title>}
                    description={
                      <Text type="secondary">
                        {course.title.includes('Personal') && 'Budgeting • Debt • Emergency Fund • Goals'}
                        {course.title.includes('Investing') && 'Stocks • ETFs • Index Funds • Dividends'}
                        {course.title.includes('Crypto') && 'Bitcoin • Ethereum • DeFi • Wallets'}
                        {course.title.includes('Corporate') && 'DCF • LBO • Comps • M&A'}
                        {course.title.includes('Accounting') && '3 Statements • Ratios • Red Flags'}
                        {course.title.includes('Economics') && 'GDP • Inflation • Monetary Policy'}
                      </Text>
                    }
                  />
                  <div style={{ marginTop: 16 }}>
                    <Tag color={course.color} style={{ borderRadius: 12, padding: '4px 12px' }}>
                      Free Templates Included
                    </Tag>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Final CTA */}
        <Divider />
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <Title level={2}>Start building real wealth today</Title>
          <Paragraph style={{ fontSize: '18px', color: '#595959', maxWidth: 700, margin: '0 auto 40px' }}>
            No email. No credit card. Just the best free finance education on the internet.
          </Paragraph>
          <Space size={20}>
            <Button type="primary" size="large" icon={<WalletOutlined />} href="/personal-finance">
              Start: Personal Finance
            </Button>
            <Button size="large" href="/investing">
              Or Jump to Investing
            </Button>
          </Space>
          <br /><br />
          <Text type="secondary">Updated for 2025 • 100% free forever</Text>
        </div>
      </div>
    </>
  );
};

export default Home;