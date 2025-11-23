import { Button, Card } from "antd";
import { ArrowLeft, Rocket } from "lucide-react";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

export default function SideHustle() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Button type="text" href="/" size="large" className="mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back
        </Button>

        <Card className="shadow-xl">
          <div className="text-center mb-10">
            <div className="inline-block p-6 bg-purple-100 rounded-full mb-6">
              <Rocket className="w-16 H-16 text-purple-700" />
            </div>
            <Title level={1} className="text-4xl md:text-5xl">5. Side Hustle IRR Calculator</Title>
            <Paragraph className="text-xl text-gray-600 mt-4">Not all hustles are equal — here are the winners</Paragraph>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Real Hourly Winners" className="bg-green-50">
              <ul className="space-y-3 text-lg">
                <li>GoFood/Grab driver (after fuel): Rp 80k–120k/hr</li>
                <li>Online tutoring (English/Math): Rp 150k–300k/hr</li>
                <li>TikTok Shop affiliate: Rp 500k–2M/month passive</li>
              </ul>
            </Card>
            <Card title="Avoid These Traps" className="bg-red-50">
              <ul className="space-y-3 text-lg">
                <li>MLM / money games</li>
                <li>Survey apps (max Rp 200k/month)</li>
                <li>“Passive income” courses</li>
              </ul>
            </Card>
          </div>
        </Card>

        <div className="text-center mt-12">
          <Button type="primary" size="large" href="/credit-score">
            Next → 6. Credit Score Hacks
          </Button>
        </div>
      </div>
    </div>
  );
}