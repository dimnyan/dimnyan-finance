import { Button, Card, Table, Divider } from "antd";
import { ArrowLeft } from "lucide-react";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";

export default function BitcoinDCA() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Button type="text" href="/" size="large" className="mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Handbook
        </Button>

        <Card className="shadow-xl border-orange-200">
          <div className="text-center mb-10">
            <div className="inline-block p-6 bg-orange-100 rounded-full mb-6">
              <span className="text-6xl">₿</span>
            </div>
            <Title level={1} className="text-4xl md:text-5xl text-orange-700">
              7. Bitcoin 4-Year Cycle (Optional Rocket Fuel)
            </Title>
            <Paragraph className="text-xl text-gray-600 mt-4">
              1–5% of your money here has turned regular people into millionaires
            </Paragraph>
          </div>

          <Divider>Historical 4-Year Cycles (2009–2025)</Divider>

          <Table
            dataSource={[
              { cycle: "2011–2013", start: "$2", peak: "$1,242", gain: "+62,000%" },
              { cycle: "2014–2017", start: "$320", peak: "$19,800", gain: "+6,087%" },
              { cycle: "2018–2021", start: "$3,200", peak: "$69,000", gain: "+2,056%" },
              { cycle: "2022–2025", start: "$16,500", peak: "→ $150k–$300k?", gain: "Currently +400% (Nov 2025)" },
            ]}
            columns={[
              { title: "Halving Cycle", dataIndex: "cycle", key: "cycle" },
              { title: "Cycle Low", dataIndex: "start", key: "start" },
              { title: "Cycle Peak", dataIndex: "peak", key: "peak" },
              { title: "Total Gain", dataIndex: "gain", key: "gain", render: (t) => <Text strong type="danger">{t}</Text> },
            ]}
            pagination={false}
            className="mb-10"
          />

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="text-center bg-gradient-to-br from-orange-50 to-white">
              <Title level={3} className="text-orange-700">Rule #1</Title>
              <Paragraph className="text-lg">Only invest what you can afford to lose</Paragraph>
            </Card>
            <Card className="text-center bg-gradient-to-br from-orange-50 to-white">
              <Title level={3} className="text-orange-700">Rule #2</Title>
              <Paragraph className="text-lg">Never borrow money to buy Bitcoin</Paragraph>
            </Card>
            <Card className="text-center bg-gradient-to-br from-orange-50 to-white">
              <Title level={3} className="text-orange-700">Rule #3</Title>
              <Paragraph className="text-lg">DCA weekly or monthly → ignore price</Paragraph>
            </Card>
          </div>

          <Card title="Best Platforms for Low-Income Countries (2025)" className="mb-10">
            <ul className="space-y-4 text-lg">
              <li><strong>Indonesia:</strong> Tokocrypto, Indodax, Pintu (recurring buy from Rp 11,000)</li>
              <li><strong>Philippines:</strong> PDAX, Coins.ph, Binance P2P</li>
              <li><strong>Nigeria:</strong> Busha, Quidax, Binance P2P (NGN)</li>
              <li><strong>Global:</strong> Binance “Recurring Buy”, Coinbase “Automatic Purchase”</li>
            </ul>
          </Card>

          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-10 rounded-2xl text-center">
            <Title level={2} className="text-white">Real Example (Indonesia)</Title>
            <Paragraph className="text-2xl">
              Rp 100,000/month since 2022 → Rp 14 million invested<br/>
              <strong className="text-4xl">Now worth Rp 70–90 million (Nov 2025)</strong>
            </Paragraph>
          </div>
        </Card>

        <div className="text-center mt-12">
          <Button type="primary" size="large" href="/2030-plan">
            Final Chapter → 8. Your Exact 2030 Millionaire Roadmap
          </Button>
        </div>
      </div>
    </div>
  );
}