import {Card, Divider} from "antd";
import {BookOpen, Download, Heart, Shield} from "lucide-react";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";

export default function OthersPage() {
  return (
    <div className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <Title level={1} className="text-5xl md:text-6xl font-bold text-indigo-700">
          GrokFinance Handbook
        </Title>
        <Paragraph className="text-2xl mt-4 text-gray-700">
          Investment-banking wealth secrets<br/>for people earning under $50,000/year
        </Paragraph>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Card className="flex items-center gap-3 px-6 py-4">
            <Shield className="w-6 h-6 text-green-600"/>
            <p>No sign-up • No tracking • 100% private</p>
          </Card>
          <Card className="flex items-center gap-3 px-6 py-4">
            <Download className="w-6 h-6 text-blue-600"/>
            <Text strong>Works offline • Save as PDF</Text>
          </Card>
          <Card className="flex items-center gap-3 px-6 py-4">
            <Heart className="w-6 h-6 text-red-600"/>
            <Text strong>Made with love by the Grok community</Text>
          </Card>
        </div>
      </div>

      <Divider>
        <BookOpen className="w-8 h-8 text-indigo-600"/>
      </Divider>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {handbookSections.map((section) => (
          <a
            key={section.slug}
            href={`/${section.slug}`}
            className="block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
          >
            <div className="text-4xl mb-4">{section.icon}</div>
            <p>{section.title}</p>
            <p className="text-gray-600">{section.desc}</p>
          </a>
        ))}
      </div>

      <footer className="text-center mt-20 text-gray-500">
        <p>
          Built with Next.js • Powered by Grok AI • Deployed for free on Vercel<br/>
          Share this link with anyone who needs it: grokfinance-handbook.vercel.app
        </p>
      </footer>
    </div>
  );
}

const handbookSections = [
  {
    slug: "handbook/emergency-fund",
    title: "1. Build Your Emergency Fund First",
    desc: "Why 3–6 months expenses beats every investment",
    icon: "🛡️"
  },
  {
    slug: "handbook/kill-debt",
    title: "2. Destroy High-Interest Debt",
    desc: "Snowball vs Avalanche + secret consolidation tricks",
    icon: "🔥"
  },
  {
    slug: "handbook/government-money",
    title: "3. Claim Free Government Money",
    desc: "EITC, SNAP, LIHEAP, child tax credits – up to $10k+/year",
    icon: "💰"
  },
  {
    slug: "handbook/micro-investing",
    title: "4. Micro-Investing Blueprint",
    desc: "Start with $5/month and still retire decently",
    icon: "📈"
  },
  {
    slug: "handbook/side-hustle",
    title: "5. Side Hustle IRR Calculator",
    desc: "Which hustle actually makes real money after expenses",
    icon: "🚀"
  },
  {
    slug: "handbook/credit-score",
    title: "6. Credit Score Hacks Used by Banks",
    desc: "Free +35–100 point boosts in 3–6 months",
    icon: "⭐"
  },
  {
    slug: "handbook/bitcoin-dca",
    title: "7. Bitcoin 4-Year Cycle (Optional Rocket Fuel)",
    desc: "Tiny 1–5% allocation that changed thousands of lives",
    icon: "₿"
  },
  {
    slug: "handbook/2030-plan",
    title: "8. Your Exact 5-Year Millionaire Roadmap",
    desc: "Real numbers. Real platforms. Real results.",
    icon: "🏆"
  },
];