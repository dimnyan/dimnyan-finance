'use client'
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
  // Timeline,
} from 'antd';
import {
  FunctionOutlined,
  LineChartOutlined,
  CalculatorOutlined,
  StockOutlined,
  ThunderboltOutlined,
  // DownloadOutlined,
  AlertOutlined,
} from '@ant-design/icons';
import { createStyles } from 'antd-style';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import Text from 'antd/es/typography/Text';

const { Meta } = Card;

const useStyles = createStyles(({ token }) => ({
  card: {
    height: '100%',
    transition: 'all 0.3s',
    '&:hover': { transform: 'translateY(-4px)', boxShadow: token.boxShadow },
  },
}));

const QuantitativeFinance = () => {
  const { styles } = useStyles();

  const topics = [
    { name: 'Time Value of Money',          desc: 'PV, FV, NPV, IRR, Annuities' },
    { name: 'Bond Pricing & Yields',       desc: 'YTM, Duration, Convexity' },
    { name: 'Portfolio Theory',            desc: 'Efficient Frontier, CAPM, Beta' },
    { name: 'Options & Black-Scholes',     desc: 'Calls/Puts, Greeks, Implied Volatility' },
    { name: 'Monte Carlo Simulation',     desc: 'Risk modeling, pricing exotics' },
    { name: 'VaR & Risk Metrics',          desc: 'Historical, Parametric, Monte Carlo VaR' },
  ];

  return (
    <Row>
      <Col span={20}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          <Title level={1}>Quantitative Finance & Financial Modeling</Title>
          <Paragraph style={{ fontSize: '18px', color: '#595959' }}>
            Master the math and Excel/Python skills used by quants, risk managers, traders, and investment banks use every day —
            all explained clearly with free professional templates.
          </Paragraph>

          {/* 1. Core Concepts */}
          <Divider orientation="horizontal">
            <div id="core">
              <Space><FunctionOutlined /> Core Quantitative Concepts</Space>
            </div>
          </Divider>
          <Row gutter={[24, 32]}>
            {topics.map((topic) => (
              <Col xs={24} sm={12} lg={8} key={topic.name}>
                <Card hoverable className={styles.card}>
                  <Meta
                    title={<Title level={4}>{topic.name}</Title>}
                    description={<Text type="secondary">{topic.desc}</Text>}
                  />
                </Card>
              </Col>
            ))}
          </Row>

          {/* 2. Time Value of Money */}
          <Divider orientation="horizontal">
            <div id="tvm">
              <Space><CalculatorOutlined /> Time Value of Money — The Foundation</Space>
            </div>
          </Divider>
          <Card>
            <Text strong>Key Formulas:</Text><br/>
            <Text code>PV = FV / (1 + r)ⁿ</Text><br/>
            <Text code>FV = PV × (1 + r)ⁿ</Text><br/>
            <Text code>NPV = Σ (CFₜ / (1 + r)ᵗ) − Initial Investment</Text><br/>
            <Text code>IRR</Text> → rate where NPV = 0<br/><br/>
            <Tag color="blue">Rule of 72:</Tag> Years to double ≈ 72 ÷ annual rate
          </Card>

          {/* 3. Bond Math */}
          <Divider orientation="horizontal">
            <div id="bonds">
              <Space><LineChartOutlined /> Bond Pricing, Duration & Convexity</Space>
            </div>
          </Divider>
          <Alert
            title="Duration ≈ % price change for 1% change in yield. Convexity adds the curvature."
            type="info"
            showIcon
          />
          <Tabs
            items={[
              {
                key: '1',
                label: 'Zero-Coupon Bond',
                children: 'Price = Face Value / (1 + y)ⁿ',
              },
              {
                key: '2',
                label: 'Coupon Bond',
                children: 'Price = Σ (C / (1+y)ᵗ) + FV/(1+y)ⁿ',
              },
              {
                key: '3',
                label: 'Macaulay Duration',
                children: 'Weighted average time until cash flows are received',
              },
            ]}
          />

          {/* 4. Portfolio Theory & CAPM */}
          <Divider orientation="horizontal">
            <div id="portfolio">
              <Space><StockOutlined /> Modern Portfolio Theory & CAPM</Space>
            </div>
          </Divider>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card title="CAPM Formula">
                <Text strong>Expected Return = Rƒ + β × (Rₘ − Rƒ)</Text><br/><br/>
                Rƒ = Risk-free rate<br/>
                β = Stock’s systematic risk<br/>
                Rₘ − Rƒ = Market risk premium (~5–7%)
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Efficient Frontier">
                Optimal portfolios maximize return for given risk<br/>
                Tangency portfolio + risk-free asset → Capital Market Line
              </Card>
            </Col>
          </Row>

          {/* 5. Options & Black-Scholes */}
          <Divider orientation="horizontal">
            <div id="options">
              <Space><ThunderboltOutlined /> Options Pricing & The Greeks</Space>
            </div>
          </Divider>
          <Card>
            <Title level={5}>Black-Scholes Call Price</Title>
            <Text code>C = S×N(d₁) − Ke⁻ʳᵀ×N(d₂)</Text><br/><br/>
            <Text strong>The Greeks:</Text><br/>
            Δ (Delta) • Γ (Gamma) • Θ (Theta) • ν (Vega) • ρ (Rho)
          </Card>

          {/* 6. Risk Management */}
          <Divider orientation="horizontal">
            <div id="risk">
              <Space><AlertOutlined /> Value at Risk (VaR) & Stress Testing</Space>
            </div>
          </Divider>
          <Table
            pagination={false}
            columns={[
              { title: 'Method', dataIndex: 'method' },
              { title: '95% 1-Day VaR Means', dataIndex: 'means' },
            ]}
            dataSource={[
              { key: 1, method: 'Historical', means: 'Worst 5% of past returns' },
              { key: 2, method: 'Parametric', means: 'μ + 1.65σ (normal distribution)' },
              { key: 3, method: 'Monte Carlo', means: 'Full simulation of risk factors' },
            ]}
          />

          {/* 7. Free Templates */}
          {/*<Divider orientation="horizontal">*/}
          {/*  <div id="downloads">*/}
          {/*    <Space><DownloadOutlined /> Professional Free Quant Templates (2025)</Space>*/}
          {/*  </div>*/}
          {/*</Divider>*/}
          {/*<Row gutter={[16, 32]}>*/}
          {/*  <Col xs={24} sm={12} lg={8}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/black-scholes-calculator.xlsx" download><DownloadOutlined /> Excel</a>]}>*/}
          {/*      <Meta title="Black-Scholes + Greeks Calculator" description="Price any option instantly" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={8}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/monte-carlo-simulation.xlsx" download><DownloadOutlined /> Excel</a>]}>*/}
          {/*      <Meta title="Monte Carlo Simulator" description="1,000-path simulation for stocks/options" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={8}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/var-risk-dashboard.xlsx" download><DownloadOutlined /> Excel</a>]}>*/}
          {/*      <Meta title="VaR & Stress Testing Dashboard" description="Historical + Parametric + Monte Carlo" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={8}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/portfolio-optimizer.xlsx" download><DownloadOutlined /> Excel</a>]}>*/}
          {/*      <Meta title="Efficient Frontier Optimizer" description="Find optimal stock/bond mix" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          <Divider />
          <Title level={2} style={{ textAlign: 'center', color: '#fa8c16' }}>
            From NPV to Black-Scholes to Monte Carlo —<br />
            everything a quant needs, explained simply and for free.
          </Title>
        </div>
      </Col>

      {/* Sidebar */}
      <Col span={4}>
        <Anchor
          affix={true}
          offsetTop={100}
          items={[
            { key: 'core', href: '#core', title: 'Core Concepts' },
            { key: 'tvm', href: '#tvm', title: 'Time Value of Money' },
            { key: 'bonds', href: '#bonds', title: 'Bond Math' },
            { key: 'portfolio', href: '#portfolio', title: 'Portfolio Theory & CAPM' },
            { key: 'options', href: '#options', title: 'Options & Greeks' },
            { key: 'risk', href: '#risk', title: 'Risk Management & VaR' },
            // { key: 'downloads', href: '#downloads', title: 'Free Quant Templates' },
          ]}
        />
      </Col>
    </Row>
  );
};

export default QuantitativeFinance;