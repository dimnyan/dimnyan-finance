import {Button, Card, Table, Divider} from "antd";
import {ArrowLeft, TrendingUp} from "lucide-react";

import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

export default function MicroInvesting() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Button type="text" href="/" size="large" className="mb-8">
          <ArrowLeft className="w-5 h-5 mr-2"/> Back
        </Button>

        <Card className="shadow-xl">
          <div className="text-center mb-10">
            <div className="inline-block p-6 bg-blue-100 rounded-full mb-6">
              <TrendingUp className="w-16 h-16 text-blue-700"/>
            </div>
            <Title level={1} className="text-4xl md:text-5xl">4. Micro-Investing Blueprint</Title>
            <Paragraph className="text-xl text-gray-600 mt-4">Start with $5–$50/month and still build real
              wealth</Paragraph>
          </div>

          <Divider/>

          <Table
            dataSource={[
              {platform: "Bibit / Ajaib (Indonesia)", min: "Rp 10,000", best: "VWRA global ETF"},
              {platform: "Groww / Zerodha Coin (India)", min: "₹100", best: "Nifty 50 + global funds"},
              {platform: "Acorns / Stash (USA)", min: "$5", best: "Round-ups + S&P 500"},
              {platform: "Pluang (Indonesia)", min: "Rp 10,000", best: "Emas + US stocks"},
            ]}
            columns={[
              {title: "Platform", dataIndex: "platform"},
              {title: "Minimum", dataIndex: "min"},
              {title: "Best Choice", dataIndex: "best"},
            ]}
            pagination={false}
            className="mb-8"
          />

          <div className="bg-blue-50 p-8 rounded-2xl text-center">
            <Title level={3}>$10/month at 9% return = $15,000 in 20 years</Title>
            <Paragraph className="text-lg">Consistency beats timing. Start today.</Paragraph>
          </div>
        </Card>

        <div className="text-center mt-12">
          <Button type="primary" size="large" href="/side-hustle">
            Next → 5. Side Hustle Calculator
          </Button>
        </div>
      </div>
    </div>
  );
}