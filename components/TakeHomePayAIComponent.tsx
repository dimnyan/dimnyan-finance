'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Card, Form, Input, Button, Tabs, Typography, message, Spin, Alert, Dropdown, Select} from 'antd';
import { RobotOutlined, DollarCircleOutlined, SaveOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

export default function TakeHomePayAIComponent() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string>('');
  const [currencySymbol, setCurrencySymbol] = useState<string>("$")

  const getGrokAdvice = async (values: any) => {
    setLoading(true);
    setAdvice('');

    const prompt = `
You are a compassionate investment banker helping low-income families in the United States.
User profile:
- Monthly take-home income: ${currencySymbol}${values.income}
- Rent/Mortgage: ${currencySymbol}${values.rent}
- Total monthly expenses: ${currencySymbol}${values.expenses}
- Current debt: ${currencySymbol}${values.debt} (type: ${values.debtType || 'various'})
- Savings: ${currencySymbol}${values.savings}
- Goal: ${values.goal || 'build emergency fund and get out of debt'}

Provide a clear, kind, actionable 12-month financial plan including:
1. Recommended budget (use 50/30/20 or better)
2. Debt payoff strategy (snowball or avalanche)
3. Side hustle ideas under $100 to start
4. Free government or community resources
5. Emergency fund target
6. Credit improvement steps

Be encouraging, realistic, and speak like a trusted friend. Use bullet points.
    `;

    try {
      const response = await axios.post(
        'https://api.x.ai/v1/chat/completions',
        {
          model: 'grok-2-1212',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROK_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setAdvice(response.data.choices[0].message.content);
    } catch (error: any) {
      message.error('Could not connect to Grok AI. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Title level={1} className="flex items-center justify-center gap-3">
              <RobotOutlined className="text-5xl text-blue-600" />
              GrokFinance
            </Title>
            <Paragraph className="text-xl text-gray-600">
              Your free personal investment banker — powered by Grok AI
            </Paragraph>
            <Alert
              message="100% Free • No ads • Built for people earning under $50k/year"
              type="success"
              showIcon
              className="mt-4 max-w-md mx-auto"
            />
          </div>

          <Card>
            <Tabs defaultActiveKey="1" centered>
              <TabPane
                tab={<span><DollarCircleOutlined /> Get My Free Plan</span>}
                key="1"
              >
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={getGrokAdvice}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <Form.Item label={"Currency"}>
                      <Select onChange={(e)=>setCurrencySymbol(e)}
                              options={[{ label: 'USD', value: '$' }, { label: 'IDR', value: 'IDR' }]} value={currencySymbol}/>
                    </Form.Item>
                    <Form.Item name="income" label="Monthly Take-Home Income" rules={[{ required: true }]}>
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
                    <Input.TextArea rows={2} placeholder="Get out of debt, build emergency fund, save for kids..." />
                  </Form.Item>

                  <Button
                    type="primary"
                    size="large"
                    block
                    htmlType="submit"
                    loading={loading}
                    icon={<RobotOutlined />}
                  >
                    Get My Free Financial Plan from Grok AI
                  </Button>
                </Form>

                {loading && (
                  <div className="text-center my-10">
                    <Spin size="large" />
                    <Paragraph className="mt-4">Grok is analyzing your situation...</Paragraph>
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
              </TabPane>

              <TabPane tab="About" key="2">
                <Title level={3}>Why This Exists</Title>
                <Paragraph>
                  Traditional financial advisors charge $200–500/hour and require $250k+ in assets.
                  This app brings <strong>investment-banking quality advice</strong> to everyone — for free — using Grok AI.
                </Paragraph>
                <Paragraph>
                  We believe financial dignity should not have a paywall.
                </Paragraph>
              </TabPane>
            </Tabs>
          </Card>

          <Paragraph className="text-center mt-10 text-gray-500">
            Built with ❤️ using Next.js + Ant Design + Grok AI
          </Paragraph>
        </div>
      </div>
    </>
  );
}