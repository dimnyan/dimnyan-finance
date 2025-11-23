import { Button, Card, Table, Divider, Alert } from "antd";
import { ArrowLeft, Star, Zap, Shield, TrendingUp } from "lucide-react";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";

export default function CreditScore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <Button type="text" href="/" size="large" className="mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Handbook
        </Button>

        <Card className="shadow-2xl border-2 border-yellow-200">
          <div className="text-center mb-12">
            <div className="inline-block p-8 bg-yellow-100 rounded-full mb-8">
              <Star className="w-20 h-20 text-yellow-600" />
            </div>
            <Title level={1} className="text-5xl md:text-6xl font-bold text-yellow-800">
              6. Credit Score Hacks Used by Investment Banks
            </Title>
            <Paragraph className="text-2xl text-gray-700 mt-6">
              +50 to +200 points in 3–12 months — free or nearly free
            </Paragraph>
          </div>

          <Divider className="border-yellow-300" />

          {/* Top Impact Hacks Table */}
          <Title level={2} className="text-center mb-8">
            <Zap className="inline w-8 h-8 text-yellow-600" /> Top 8 Credit Hacks Ranked by Impact
          </Title>

          <Table
            dataSource={[
              {
                rank: "1",
                hack: "Pay down credit cards to <10% utilization (not just <30%)",
                points: "+80 to +150",
                cost: "Free",
                time: "30–90 days",
              },
              {
                rank: "2",
                hack: "Become Authorized User on old, perfect family/friend card",
                points: "+50 to +120",
                cost: "Free",
                time: "30–60 days",
              },
              {
                rank: "3",
                hack: "Use Experian Boost (USA) or similar (adds rent & phone payments)",
                points: "+20 to +70",
                cost: "Free",
                time: "Instant–30 days",
              },
              {
                rank: "4",
                hack: "Self-Lender / Credit Builder Loan (e.g., Kikoff, Self, CreditStrong)",
                points: "+40 to +100",
                cost: "$5–$25/month",
                time: "6–12 months",
              },
              {
                rank: "5",
                hack: "Add ALL utility & streaming bills via Experian Boost or UltraFICO",
                points: "+30 to +60",
                time: "Instant",
              },
              {
                rank: "6",
                hack: "Request goodwill deletion of old late payments",
                points: "+20 to +80",
                cost: "Free",
                time: "30–90 days",
              },
              {
                rank: "7",
                hack: "Open a secured credit card (e.g., Discover It Secured, Capital One)",
                points: "+30 to +80",
                cost: "$200 deposit (refundable)",
                time: "6–12 months",
              },
              {
                rank: "8",
                hack: "Dispute old incorrect items (collections, wrong addresses)",
                points: "+20 to +100",
                cost: "Free",
                time: "30–90 days",
              },
            ]}
            columns={[
              { title: "Rank", dataIndex: "rank", width: 80 },
              { title: "Hack", dataIndex: "hack", width: 400 },
              { title: "Points Gained", dataIndex: "points", render: (t) => <Text strong type="success">{t}</Text> },
              { title: "Cost", dataIndex: "cost" },
              { title: "Time", dataIndex: "time" },
            ]}
            pagination={false}
            className="mb-12"
          />

          <Divider />

          {/* Pro Tips Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Alert
              type="success"
              showIcon
              icon={<Shield className="w-6 h-6" />}
              message="Authorized User Trick (Private Equity Secret)"
              description={
                <>
                  <Paragraph strong>Ask a parent or trusted friend with a 10+ year old card, high limit, $0 balance to add you as authorized user.</Paragraph>
                  <Paragraph>You get their perfect history instantly — even if you never touch the card.</Paragraph>
                  <Paragraph className="text-green-600 font-bold">This is 100% legal and used by rich families for generations.</Paragraph>
                </>
              }
              className="h-full"
            />

            <Alert
              type="warning"
              showIcon
              icon={<TrendingUp className="w-6 h-6" />}
              message="Utilization resets monthly"
              description={
                <>
                  <Paragraph>Your utilization is recalculated every month.</Paragraph>
                  <Paragraph>Pay down cards to {"<"}10% BEFORE statement closes → score jumps every month.</Paragraph>
                  <Paragraph className="font-bold">Never wait until due date — pay early!</Paragraph>
                </>
              }
              className="h-full"
            />
          </div>

          {/* Country-Specific Tools */}
          <Title level={2} className="mb-6">Free Tools by Country</Title>
          <div className="grid md:grid-cols-3 gap-6">
            <Card title="🇺🇸 United States" className="bg-blue-50">
              <ul className="space-y-2">
                <li><a href="https://experian.com/boost" target="_blank" className="text-blue-600">Experian Boost</a> (free)</li>
                <li><a href="https://creditkarma.com" target="_blank" className="text-blue-600">Credit Karma</a></li>
                <li><a href="https://kikoff.com" target="_blank" className="text-blue-600">Kikoff</a> ($5/month builder)</li>
              </ul>
            </Card>
            <Card title="🇮🇩 Indonesia" className="bg-green-50">
              <ul className="space-y-2">
                <li>SKOR by Kredivo</li>
                <li>Pinjol legal reporting to SLIK OJK</li>
                <li>Akurasi (new credit builder)</li>
              </ul>
            </Card>
            <Card title="🌍 Global" className="bg-purple-50">
              <ul className="space-y-2">
                <li>Pay rent via Bilt (USA) or Canarius (some countries)</li>
                <li>Secured cards from Capital One, Discover</li>
                <li>Goodwill letter templates online</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-16 bg-gradient-to-r from-yellow-100 to-orange-100 p-12 rounded-3xl">
            <Title level={2} className="text-orange-800">
              A 100-point increase = thousands saved on loans
            </Title>
            <Paragraph className="text-xl">
              Better score → lower car loan, apartment approval, even job offers
            </Paragraph>
          </div>
        </Card>

        <div className="text-center mt-12">
          <Button type="primary" size="large" href="/bitcoin-dca" className="mr-4">
            Next → 7. Bitcoin 4-Year Cycle (Optional)
          </Button>
          <Button type="default" size="large" href="/">
            Back to All Chapters
          </Button>
        </div>
      </div>
    </div>
  );
}