import { Button, Card, Progress, Table, Divider } from "antd";
import { ArrowLeft, Trophy, Target } from "lucide-react";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";

export default function Plan2030() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-amber-50 to-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <Button type="text" href="/" size="large" className="mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Handbook
        </Button>

        <Card className="shadow-2xl border-amber-300">
          <div className="text-center mb-12">
            <div className="inline-block p-8 bg-yellow-100 rounded-full mb-8">
              <Trophy className="w-20 h-20 text-yellow-600" />
            </div>
            <Title level={1} className="text-5xl md:text-6xl text-amber-700">
              8. Your Exact 2030 Millionaire Roadmap
            </Title>
            <Paragraph className="text-2xl text-gray-700 mt-6">
              From {"<"}$50k/year today → Top 5–10% net worth in your country by 2030
            </Paragraph>
          </div>

          <Divider orientation="left">Realistic 5-Year Plan (Indonesia Example)</Divider>

          <Table
            dataSource={[
              { year: "2025", savings: "Rp 3jt/month", totalSaved: "Rp 36jt", investments: "Rp 50jt", total: "Rp 86jt" },
              { year: "2026", savings: "Rp 4jt/month", totalSaved: "Rp 84jt", investments: "Rp 90jt", total: "Rp 174jt" },
              { year: "2027", savings: "Rp 5jt/month", totalSaved: "Rp 144jt", investments: "Rp 150jt", total: "Rp 294jt" },
              { year: "2028", savings: "Rp 6jt/month", totalSaved: "Rp 216jt", investments: "Rp 240jt", total: "Rp 456jt" },
              { year: "2029", savings: "Rp 7jt/month", totalSaved: "Rp 300jt", investments: "Rp 400jt", total: "Rp 700jt" },
              { year: "2030", savings: "Rp 8jt/month", totalSaved: "Rp 396jt", investments: "Rp 700jt+", total: <Text strong type="danger">Rp 1.1 Miliar+</Text> },
            ]}
            columns={[
              { title: "Year", dataIndex: "year", key: "year" },
              { title: "Monthly Savings", dataIndex: "savings", key: "savings" },
              { title: "Cash Saved", dataIndex: "totalSaved", key: "totalSaved" },
              { title: "Investments Growth", dataIndex: "investments", key: "investments" },
              { title: "Total Net Worth", dataIndex: "total", key: "total" },
            ]}
            pagination={false}
            className="mb-12 text-lg"
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card title="Your Asset Allocation (2030 Target)" className="bg-gradient-to-br from-amber-50 to-white">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2"><span>Emergency Fund</span><span>20%</span></div>
                  <Progress percent={20} showInfo={false} strokeColor="#10b981" />
                </div>
                <div>
                  <div className="flex justify-between mb-2"><span>Global Stocks / ETFs</span><span>50%</span></div>
                  <Progress percent={50} showInfo={false} strokeColor="#3b82f6" />
                </div>
                <div>
                  <div className="flex justify-between mb-2"><span>Bitcoin (optional)</span><span>5–10%</span></div>
                  <Progress percent={10} showInfo={false} strokeColor="#f97316" />
                </div>
                <div>
                  <div className="flex justify-between mb-2"><span>High-Yield Cash / Stablecoins</span><span>20–25%</span></div>
                  <Progress percent={25} showInfo={false} strokeColor="#8b5cf6" />
                </div>
              </div>
            </Card>

            <Card title="Your Final Checklist" className="bg-gradient-to-br from-green-50 to-white">
              <ul className="space-y-4 text-lg">
                <li>☑ Emergency fund = 6 months expenses</li>
                <li>☑ Zero high-interest debt</li>
                <li>☑ Claimed all government benefits</li>
                <li>☑ Investing minimum 20% of income</li>
                <li>☑ Credit score 720+</li>
                <li>☑ Bitcoin DCA running (optional)</li>
                <li>☑ Net worth {">"} Rp 1 miliar (or $100k+ USD)</li>
              </ul>
            </Card>
          </div>

          <div className="text-center bg-gradient-to-r from-amber-600 to-orange-600 text-white p-12 rounded-3xl">
            <Title level={1} className="text-white text-5xl mb-6">
              You did it.
            </Title>
            <Paragraph className="text-2xl">
              You followed the exact same playbook that billionaires teach their kids.<br/>
              You just did it with less money and more courage.
            </Paragraph>
            <div className="mt-8">
              <Target className="w-24 h-24 mx-auto text-white opacity-80" />
            </div>
          </div>
        </Card>

        <div className="text-center mt-16">
          <Button type="primary" size="large" href="/">
            ← Back to Start • Share This Handbook
          </Button>
          <Paragraph className="mt-6 text-gray-600">
            Send this link to one person who needs it today.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}