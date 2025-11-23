import {Button, Card, Table, Divider} from "antd";
import {ArrowLeft, Shield, TrendingUp} from "lucide-react";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

export default function EmergencyFund() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Button type="text" href="/" size="large" className="mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Handbook
        </Button>

        <Card className="shadow-xl">
          <div className="text-center mb-10">
            <div className="inline-block p-6 bg-indigo-100 rounded-full mb-6">
              <Shield className="w-16 h-16 text-indigo-700" />
            </div>
            <Title level={1} className="text-4xl md:text-5xl">
              1. Build Your Emergency Fund First
            </Title>
            <Paragraph className="text-xl text-gray-600 mt-4">
              The #1 rule every investment bank teaches millionaires — now for you
            </Paragraph>
          </div>

          <Divider />

          <section className="mb-12">
            <Title level={2}>Why This Comes BEFORE Any Investing</Title>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <span>Payday loans charge <strong>300–600% APR</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <span>One hospital bill can wipe out years of stock gains</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <span>Rich people never sell stocks in a crash — they have cash</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <Title level={2}>Your Emergency Fund Target (2025)</Title>
            <Table
              dataSource={[
                { country: "Indonesia", minimum: "Rp 15–30 juta", ideal: "Rp 50 juta", platforms: "SeaBank (5.5%), Jenius Flexi, Blu by BCA" },
                { country: "Philippines", minimum: "₱30,000–60,000", ideal: "₱100,000", platforms: "Maya Savings (6%), CIMB Fast Plus" },
                { country: "United States", minimum: "$1,000", ideal: "$3,000–$8,000", platforms: "Ally Bank (4.2%), SoFi, Marcus" },
                { country: "Nigeria", minimum: "₦300,000–800,000", ideal: "₦2 million", platforms: "PiggyVest, Cowrywise" },
              ]}
              columns={[
                { title: "Country", dataIndex: "country", key: "country" },
                { title: "Minimum Target", dataIndex: "minimum", key: "minimum" },
                { title: "Ideal Target", dataIndex: "ideal", key: "ideal" },
                { title: "Best Places (High Yield)", dataIndex: "platforms", key: "platforms" },
              ]}
              pagination={false}
              bordered
            />
          </section>

          <div className="bg-green-50 p-8 rounded-2xl text-center">
            <Title level={3} className="text-green-800">
              Start with just $10–$50 this week
            </Title>
            <Paragraph className="text-lg">
              Open a high-yield account today → set auto-transfer → forget about it.<br/>
              In 6–12 months you’ll thank yourself when life throws a curveball.
            </Paragraph>
          </div>
        </Card>

        <div className="text-center mt-12">
          <Button type="primary" size="large" href="/kill-debt">
            Next Chapter → 2. Destroy High-Interest Debt
          </Button>
        </div>
      </div>
    </div>
  );
}