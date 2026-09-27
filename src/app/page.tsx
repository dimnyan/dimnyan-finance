'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Card,
  Form,
  Input,
  Button,
  Tabs,
  Typography,
  message,
  Spin,
  Alert,
  Select,
  List,
} from 'antd';
import {
  RobotOutlined,
  DollarCircleOutlined,
  SaveOutlined,
  ReadOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import axios from 'axios';

const { Title, Paragraph, Text } = Typography;

interface FormValues {
  income: string;
  rent?: string;
  expenses?: string;
  debt?: string;
  debtType?: string;
  savings?: string;
  goal?: string;
}

const FREE_RESOURCES = [
  {
    name: 'Benefits.gov',
    url: 'https://www.benefits.gov',
    description:
        'Official U.S. government screening tool — answer a few questions to see which federal and state assistance programs you may qualify for.',
  },
  {
    name: '211.org',
    url: 'https://www.211.org',
    description:
        'Free, confidential referral service for food, housing, utility, and emergency assistance in your local area. Call 211 or search by ZIP code.',
  },
  {
    name: 'National Foundation for Credit Counseling (NFCC)',
    url: 'https://www.nfcc.org',
    description:
        'Certified nonprofit credit counselors — free or low-cost help with budgeting, debt management plans, and credit report reviews.',
  },
  {
    name: 'IRS VITA Program',
    url: 'https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers',
    description:
        'Free tax preparation from IRS-certified volunteers for filers generally earning under about $67,000/year.',
  },
  {
    name: 'LIHEAP (Home Energy Assistance)',
    url: 'https://www.acf.hhs.gov/ocs/programs/liheap',
    description:
        'Federal program that helps eligible households pay heating and cooling bills, and covers weatherization in some states.',
  },
  {
    name: 'Find a Credit Union',
    url: 'https://www.mycreditunion.gov/consumer-tools/find-credit-union',
    description:
        'Credit unions often offer far better rates than payday loans for small emergency loans — search for one you can join.',
  },
];

export default function Home() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string>('');
  const [currencySymbol, setCurrencySymbol] = useState<string>('$');

  const getFinancialAdvice = async (values: FormValues) => {
    setLoading(true);
    setAdvice('');

    try {
      const response = await axios.post('/api/advice', {
        ...values,
        currencySymbol,
      });
      setAdvice(response.data.content);
    } catch (error) {
      message.error(
          'Could not generate your plan right now. Please try again in a moment — or check the Free Resources tab in the meantime.'
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Title level={1} className="flex items-center justify-center gap-3">
              <RobotOutlined className="text-5xl text-blue-600" />
              DimnyanFinance
            </Title>
            <Paragraph className="text-xl text-gray-600">
              Your free personal financial planning assistant
            </Paragraph>
            <Alert
                title="100% Free • No ads • Built for people earning under $50k/year"
                type="success"
                showIcon
                className="mt-4 max-w-md mx-auto"
            />
          </div>

          <Card>
            <Tabs
                defaultActiveKey="1"
                centered
                items={[
                  {
                    key: '1',
                    label: (
                        <span>
                    <DollarCircleOutlined /> Get My Free Plan
                  </span>
                    ),
                    children: (
                        <>
                          <Form form={form} layout="vertical" onFinish={getFinancialAdvice}>
                            <div className="grid md:grid-cols-2 gap-4">
                              <Form.Item label="Currency">
                                <Select
                                    onChange={(v) => setCurrencySymbol(v)}
                                    options={[
                                      { label: 'USD', value: '$' },
                                      { label: 'IDR', value: 'Rp' },
                                    ]}
                                    value={currencySymbol}
                                />
                              </Form.Item>
                              <Form.Item
                                  name="income"
                                  label="Monthly Take-Home Income"
                                  rules={[{ required: true, message: 'Income is required' }]}
                              >
                                <Input prefix={currencySymbol} placeholder="2400" type="number" />
                              </Form.Item>
                              <Form.Item name="rent" label="Rent / Mortgage">
                                <Input prefix={currencySymbol} placeholder="900" type="number" />
                              </Form.Item>
                              <Form.Item name="expenses" label="All Other Monthly Expenses">
                                <Input prefix={currencySymbol} placeholder="1200" type="number" />
                              </Form.Item>
                              <Form.Item name="debt" label="Total Debt (credit cards, loans, etc)">
                                <Input prefix={currencySymbol} placeholder="8000" type="number" />
                              </Form.Item>
                              <Form.Item name="debtType" label="Type of Debt (optional)">
                                <Input placeholder="credit cards, medical, student loans" />
                              </Form.Item>
                              <Form.Item name="savings" label="Current Savings">
                                <Input prefix={currencySymbol} placeholder="300" type="number" />
                              </Form.Item>
                            </div>

                            <Form.Item name="goal" label="Your #1 Financial Goal (optional)">
                              <Input.TextArea
                                  rows={2}
                                  placeholder="Get out of debt, build emergency fund, save for kids..."
                              />
                            </Form.Item>

                            <Button
                                type="primary"
                                size="large"
                                block
                                htmlType="submit"
                                loading={loading}
                                icon={<RobotOutlined />}
                            >
                              Get My Free Financial Plan
                            </Button>
                          </Form>

                          {loading && (
                              <div className="text-center my-10">
                                <Spin size="large" />
                                <Paragraph className="mt-4">
                                  Analyzing your situation...
                                </Paragraph>
                              </div>
                          )}

                          {advice && (
                              <Card
                                  className="mt-8 bg-blue-50"
                                  title={
                                    <Title level={3}>
                                      <SaveOutlined /> Your Personalized Financial Plan
                                    </Title>
                                  }
                              >
                                <div className="prose prose-lg max-w-none text-gray-800">
                                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {advice}
                                  </ReactMarkdown>
                                </div>
                              </Card>
                          )}
                        </>
                    ),
                  },
                  {
                    key: '2',
                    label: (
                        <span>
                    <ReadOutlined /> Free Resources
                  </span>
                    ),
                    children: (
                        <>
                          <Title level={3}>Real Programs, No AI Needed</Title>
                          <Paragraph>
                            These are established government and nonprofit resources —
                            worth checking regardless of what your AI-generated plan says.
                          </Paragraph>
                          <List
                              itemLayout="vertical"
                              dataSource={FREE_RESOURCES}
                              renderItem={(item) => (
                                  <List.Item>
                                    <Text strong>
                                      <LinkOutlined />{' '}
                                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        {item.name}
                                      </a>
                                    </Text>
                                    <Paragraph className="mt-1 mb-0 text-gray-600">
                                      {item.description}
                                    </Paragraph>
                                  </List.Item>
                              )}
                          />
                        </>
                    ),
                  },
                  {
                    key: '3',
                    label: 'About',
                    children: (
                        <>
                          <Title level={3}>Why This Exists</Title>
                          <Paragraph>
                            Traditional financial advisors charge $200–500/hour and
                            require $250k+ in assets. This app brings{' '}
                            <strong>financial-planning quality guidance</strong> to
                            everyone — for free.
                          </Paragraph>
                          <Paragraph>
                            We believe financial dignity should not have a paywall.
                          </Paragraph>
                        </>
                    ),
                  },
                ]}
            />
          </Card>

          <Paragraph className="text-center mt-10 text-gray-500">
            Built with ❤️ using Next.js + Ant Design
          </Paragraph>
        </div>
      </div>
  );
}