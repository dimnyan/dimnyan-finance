'use client';
import { Card, InputNumber, Slider, Typography, Button, Space } from "antd";
import { useState } from "react";
import { Target, Share2 } from "lucide-react";

const { Title, Paragraph, Text } = Typography;

export default function Calculator() {
  const [monthly, setMonthly] = useState(2000000); // Rp 2jt default

  const years = 5;
  const normalReturn = 0.10;    // 10% stocks
  const bitcoinReturn = 0.35;   // conservative cycle return
  const bitcoinPercent = 0.05;  // 5% allocation

  const futureNormal = monthly * 12 * (((1 + normalReturn) ** years - 1) / normalReturn) * (1 + normalReturn);
  const futureWithBTC = futureNormal * (1 - bitcoinPercent) + futureNormal * bitcoinPercent * (1 + bitcoinReturn);

  const formatRupiah = (n: number) => "Rp " + (n / 1_000_000).toFixed(1) + " jt";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <Button type="text" href="/" className="mb-8">← Back</Button>

        <Card className="shadow-2xl">
          <div className="text-center mb-10">
            <Target className="w-20 h-20 mx-auto text-indigo-600 mb-4" />
            <Title level={1}>My 2030 Calculator</Title>
            <Paragraph className="text-xl">See your future net worth in 5 years</Paragraph>
          </div>

          <Space direction="vertical" size="large" className="w-full">
            <div>
              <Text className="text-lg">I can save every month:</Text>
              <Title level={2} className="mt-2">{formatRupiah(monthly)}</Title>
              <Slider
                min={500000}
                max={20000000}
                step={100000}
                value={monthly}
                onChange={setMonthly}
                className="mt-4"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <Card className="text-center bg-blue-50">
                <Title level={3} className="text-blue-700">Safe Path (Stocks only)</Title>
                <Title className="text-4xl text-blue-600">~{formatRupiah(futureNormal)}</Title>
                <Paragraph>in 2030</Paragraph>
              </Card>

              <Card className="text-center bg-orange-50">
                <Title level={3} className="text-orange-700">With 5% Bitcoin</Title>
                <Title className="text-4xl text-orange-600">~{formatRupiah(futureWithBTC)}</Title>
                <Paragraph>in 2030</Paragraph>
              </Card>
            </div>

            <Button
              type="primary"
              size="large"
              block
              icon={<Share2 className="inline" />}
              onClick={() => {
                const text = `My 2030 Plan 💰\nIf I save ${formatRupiah(monthly)}/month:\nSafe → ${formatRupiah(futureNormal)}\nWith Bitcoin → ${formatRupiah(futureWithBTC)}\nSee yours: grokfinance-handbook.vercel.app/calculator`;
                navigator.clipboard.writeText(text);
                alert("Copied to clipboard! Share on WhatsApp now 🚀");
              }}
            >
              Copy & Share on WhatsApp
            </Button>
          </Space>
        </Card>
      </div>
    </div>
  );
}