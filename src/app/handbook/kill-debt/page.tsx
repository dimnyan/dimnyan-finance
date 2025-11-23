import { Button, Card, Table, Divider } from "antd";
import { ArrowLeft, Zap } from "lucide-react";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

export default function KillDebt() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Button type="text" href="/" size="large" className="mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back
        </Button>

        <Card className="shadow-xl">
          <div className="text-center mb-10">
            <div className="inline-block p-6 bg-red-100 rounded-full mb-6">
              <Zap className="w-16 h-16 text-red-600" />
            </div>
            <Title level={1} className="text-4xl md:text-5xl">2. Destroy High-Interest Debt</Title>
            <Paragraph className="text-xl text-gray-600 mt-4">Debt at 15%+ APR is a wealth destroyer</Paragraph>
          </div>

          <Divider />

          <section className="mb-12">
            <Title level={2}>Snowball vs Avalanche</Title>
            <Table
              dataSource={[
                { method: "Debt Snowball", order: "Smallest balance first", bestFor: "Motivation", example: "Pay $500 card → $2k card → $10k loan" },
                { method: "Debt Avalanche", order: "Highest interest first", bestFor: "Save maximum money", example: "Pay 29% card → 24% card → 7% loan" },
              ]}
              columns={[
                { title: "Method", dataIndex: "method" },
                { title: "Payoff Order", dataIndex: "order" },
                { title: "Best For", dataIndex: "bestFor" },
                { title: "Real Example", dataIndex: "example" },
              ]}
              pagination={false}
              className="mb-8"
            />
          </section>

          <div className="bg-yellow-50 p-8 rounded-2xl">
            <Title level={3}>Secret Trick: Balance Transfer Cards</Title>
            <Paragraph className="text-lg">
              Move credit card debt to a 0% intro APR card (12–21 months)<br/>
              Example: $5,000 at 24% → 0% for 18 months → saves $1,800 in interest
            </Paragraph>
          </div>
        </Card>

        <div className="text-center mt-12">
          <Button type="primary" size="large" href="/government-money">
            Next → 3. Claim Free Government Money
          </Button>
        </div>
      </div>
    </div>
  );
}